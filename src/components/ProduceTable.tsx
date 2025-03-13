import type { CSSProperties } from "react";
import React from "react";

import type { Product, Resource } from "../types";
import { isProduct } from "../utils";
import { ProductItem } from "./ProductItem";
import { ResourceItem } from "./ResourceItem";

type Props = {
  referenceResource: Resource;
};

const itemSpace: Size = { w: 96, h: 96 };
const itemSize: Size = { w: 64, h: 64 };
const offset: Position = { x: (itemSpace.w - itemSize.w) / 2, y: (itemSpace.h - itemSize.h) / 2 };

function _s(size: Size): CSSProperties {
  return { width: size.w, height: size.h };
}

function _p(pos: Position): CSSProperties {
  return { top: pos.y, left: pos.x };
}

export function ProduceTable(props: Props) {
  const { referenceResource } = props;

  const ingredientSide = calIngredientNode(referenceResource);
  const produceSide = calProduceNode(referenceResource);

  const sizeRequired: Size = {
    w: ingredientSide.size.w + produceSide.size.w - itemSpace.w,
    h: Math.max(ingredientSide.size.h, produceSide.size.h),
  };

  const refPos: Position = {
    x: sizeRequired.w - produceSide.size.w + offset.x,
    y: (sizeRequired.h - itemSpace.h) / 2 + offset.y,
  };

  const ingredientOrigin: [number, number] = [0, (sizeRequired.h - ingredientSide.size.h) / 2];
  const ingredientNodes = resolveIngredientNode(ingredientSide, ingredientOrigin);

  const produceOrigin: [number, number] = [
    ingredientSide.size.w - itemSpace.w,
    (sizeRequired.h - produceSide.size.h) / 2,
  ];
  const produceNodes = resolveProduceNode(produceSide, produceOrigin);

  return (
    <div className='relative bg-slate-200' style={_s(sizeRequired)}>
      <div className='absolute' style={_p(refPos)}>
        {ingredientSide.jsx}
      </div>
      {ingredientNodes}
      {produceNodes}
    </div>
  );
}

type NodeInfo = {
  size: Size;
  pos: Position;
  jsx: React.ReactElement;
  child?: NodeInfo[];
};

function calProduceNode(resource: Resource): NodeInfo {
  if (resource.ingredientFor.length === 0) {
    return {
      size: itemSpace,
      pos: { x: 0, y: 0 },
      jsx: isProduct(resource) ? <ProductItem product={resource} /> : <ResourceItem resource={resource} />,
    };
  }

  const childNode = resource.ingredientFor.map(calProduceNode);
  const childWidth = childNode.reduce((maxWidth, cur) => (cur.size.w > maxWidth ? cur.size.w : maxWidth), 0);
  const childHeight = childNode.reduce((height, cur) => cur.size.h + height, 0);

  return {
    size: { w: itemSpace.w + childWidth, h: Math.max(itemSpace.h, childHeight) },
    pos: { x: 0, y: 0 },
    jsx: isProduct(resource) ? <ProductItem product={resource} /> : <ResourceItem resource={resource} />,
    child: childNode,
  };
}

function calIngredientNode(resource: Resource | Product): NodeInfo {
  if (!isProduct(resource)) {
    return {
      size: itemSpace,
      pos: { x: 0, y: 0 },
      jsx: <ResourceItem resource={resource} />,
    };
  }

  const childNode = resource.ingredient.map((v) => calIngredientNode(v.ingredient));
  const childWidth = childNode.reduce((maxWidth, cur) => (cur.size.w > maxWidth ? cur.size.w : maxWidth), 0);
  const childHeight = childNode.reduce((height, cur) => cur.size.h + height, 0);

  return {
    size: { w: itemSpace.w + childWidth, h: Math.max(itemSpace.h, childHeight) },
    pos: { x: 0, y: 0 },
    jsx: <ProductItem product={resource} />,
    child: childNode,
  };
}

function resolveProduceNode(info: NodeInfo, origin: [number, number], includeParent?: boolean): React.ReactElement[] {
  let height = origin[1];
  const jsxs = info.child
    ? info.child.flatMap((v) => {
        const child = resolveProduceNode(v, [origin[0] + 96, height], true);
        height += v.size.h;
        return child;
      })
    : [];

  if (includeParent) {
    const { size, pos } = info;
    pos.x = origin[0] + offset.x;
    pos.y = origin[1] + (size.h - 96) / 2 + offset.y;
    jsxs.push(
      <div className='absolute' style={_p(pos)}>
        {info.jsx}
      </div>,
    );
  }

  return jsxs;
}

function resolveIngredientNode(
  info: NodeInfo,
  origin: [number, number],
  includeParent?: boolean,
): React.ReactElement[] {
  let top = origin[1];
  const jsxs = info.child
    ? info.child.flatMap((v) => {
        const child = resolveIngredientNode(v, [origin[0] + (info.size.w - v.size.w - 96), top], true);
        top += v.size.h;
        return child;
      })
    : [];

  if (includeParent) {
    const { size, pos } = info;
    pos.x = origin[0] + (size.w - 96) + offset.x;
    pos.y = origin[1] + (size.h - 96) / 2 + offset.y;
    jsxs.push(
      <div className='absolute' style={_p(pos)}>
        {info.jsx}
      </div>,
    );
  }

  return jsxs;
}
