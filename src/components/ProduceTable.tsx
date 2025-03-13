import type { CSSProperties } from "react";
import React from "react";

import type { Product, Resource } from "../types";
import { isProduct } from "../utils";
import { BezierCurve } from "./BezierCurve";
import { ProductItem } from "./ProductItem";
import { ResourceItem } from "./ResourceItem";

type Props = {
  referenceResource: Resource;
};

const itemSpace: Size = { w: 128, h: 96 };
const itemSize: Size = { w: 64, h: 64 };
const offset: Position = { x: (itemSpace.w - itemSize.w) / 2, y: (itemSpace.h - itemSize.h) / 2 };

const uniqueKeyer = {
  i: 0,
  get key() {
    ++this.i;
    return this.i;
  },
  reset() {
    this.i = 0;
  },
};

const BezierCurveValue: [number, number, number, number] = [0.8, 0, 0.2, 1];

function _s(size: Size): CSSProperties {
  return { width: size.w, height: size.h };
}

function _p(pos: Position): CSSProperties {
  return { top: pos.y, left: pos.x };
}

export function ProduceTable(props: Props) {
  const { referenceResource } = props;
  uniqueKeyer.reset();

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
  produceSide.pos = refPos;
  ingredientSide.pos = refPos;

  const ingredientOrigin: [number, number] = [0, (sizeRequired.h - ingredientSide.size.h) / 2];
  const ingredientNodes = resolveIngredientNode(ingredientSide, ingredientOrigin);
  const ingredientLinks = createIngredientLink(ingredientSide);

  const produceOrigin: [number, number] = [
    ingredientSide.size.w - itemSpace.w,
    (sizeRequired.h - produceSide.size.h) / 2,
  ];
  const produceNodes = resolveProduceNode(produceSide, produceOrigin);
  const produceLinks = createProduceLink(produceSide);

  return (
    <div className='relative bg-slate-200' style={_s(sizeRequired)}>
      <div className='absolute' style={_p(refPos)}>
        {ingredientSide.jsx}
      </div>
      {ingredientNodes}
      {produceNodes}
      {ingredientLinks}
      {produceLinks}
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
  const key = `${resource.filename}_${uniqueKeyer.key}`;
  if (resource.ingredientFor.length === 0) {
    return {
      size: itemSpace,
      pos: { x: 0, y: 0 },
      jsx: isProduct(resource) ? (
        <ProductItem key={key} product={resource} />
      ) : (
        <ResourceItem key={key} resource={resource} />
      ),
    };
  }

  const childNode = resource.ingredientFor.map(calProduceNode);
  const childWidth = childNode.reduce((maxWidth, cur) => (cur.size.w > maxWidth ? cur.size.w : maxWidth), 0);
  const childHeight = childNode.reduce((height, cur) => cur.size.h + height, 0);

  return {
    size: { w: itemSpace.w + childWidth, h: Math.max(itemSpace.h, childHeight) },
    pos: { x: 0, y: 0 },
    jsx: isProduct(resource) ? (
      <ProductItem key={key} product={resource} />
    ) : (
      <ResourceItem key={key} resource={resource} />
    ),
    child: childNode,
  };
}

function calIngredientNode(resource: Resource | Product): NodeInfo {
  const key = `${resource.filename}_${uniqueKeyer.key}`;
  if (!isProduct(resource)) {
    return {
      size: itemSpace,
      pos: { x: 0, y: 0 },
      jsx: <ResourceItem key={key} resource={resource} />,
    };
  }

  const childNode = resource.ingredient.map((v) => calIngredientNode(v.ingredient));
  const childWidth = childNode.reduce((maxWidth, cur) => (cur.size.w > maxWidth ? cur.size.w : maxWidth), 0);
  const childHeight = childNode.reduce((height, cur) => cur.size.h + height, 0);

  return {
    size: { w: itemSpace.w + childWidth, h: Math.max(itemSpace.h, childHeight) },
    pos: { x: 0, y: 0 },
    jsx: <ProductItem key={key} product={resource} />,
    child: childNode,
  };
}

function resolveProduceNode(info: NodeInfo, origin: [number, number], includeParent?: boolean): React.ReactElement[] {
  let height = origin[1];
  const jsxs = info.child
    ? info.child.flatMap((v) => {
        const child = resolveProduceNode(v, [origin[0] + itemSpace.w, height], true);
        height += v.size.h;
        return child;
      })
    : [];

  if (includeParent) {
    const { size, pos } = info;
    pos.x = origin[0] + offset.x;
    pos.y = origin[1] + (size.h - itemSpace.h) / 2 + offset.y;
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
        const child = resolveIngredientNode(v, [origin[0] + (info.size.w - v.size.w - itemSpace.w), top], true);
        top += v.size.h;
        return child;
      })
    : [];

  if (includeParent) {
    const { size, pos } = info;
    pos.x = origin[0] + (size.w - itemSpace.w) + offset.x;
    pos.y = origin[1] + (size.h - itemSpace.h) / 2 + offset.y;
    jsxs.push(
      <div className='absolute' style={_p(pos)}>
        {info.jsx}
      </div>,
    );
  }

  return jsxs;
}

function createProduceLink(info: NodeInfo): React.ReactElement[] {
  if (info.child) {
    const _out: Position = {
      x: info.pos.x + itemSize.w,
      y: info.pos.y + itemSize.h / 2,
    };
    const links = info.child.map((v) => {
      const _in: Position = {
        x: v.pos.x,
        y: v.pos.y + itemSize.h / 2,
      };
      return <Link key={`link_${uniqueKeyer.key}`} start={_out} end={_in} />;
    });

    const childLinks = info.child.flatMap(createProduceLink);
    return links.concat(childLinks);
  }

  return [];
}

function createIngredientLink(info: NodeInfo): React.ReactElement[] {
  if (info.child) {
    const links = info.child.map((v, i, arr) => {
      const _in: Position = {
        x: info.pos.x,
        y: info.pos.y + Math.round(itemSize.h * ((i + 1) / (arr.length + 1))),
      };
      const _out: Position = {
        x: v.pos.x + itemSize.w,
        y: v.pos.y + itemSize.h / 2,
      };

      return (
        <>
          <Link key={`link_${uniqueKeyer.key}`} start={_out} end={_in} />
        </>
      );
    });

    const childLinks = info.child.flatMap(createProduceLink);
    return links.concat(childLinks);
  }

  return [];
}

function Link({ start, end }: { start: Position; end: Position }) {
  if (start.x > end.x) {
    const tmp = start;
    start = end;
    end = tmp;
  }

  const pos = {
    left: start.x,
    top: Math.min(start.y, end.y),
  };
  const rotate = end.y > start.y;

  return (
    <BezierCurve
      className={`absolute stroke-black ${rotate ? "-scale-y-100" : ""}`}
      style={pos}
      size={[end.x - start.x, rotate ? end.y - start.y : start.y - end.y]}
      value={BezierCurveValue}
    />
  );
}
