import React from "react";
import type { Product, Resource } from "../types";
import { isProduct } from "../utils";
import { ProductItem } from "./ProductItem";
import { ResourceItem } from "./ResourceItem";

type Props = {
  referenceResource: Resource;
};

export function ProduceTable(props: Props) {
  const { referenceResource } = props;

  const ingredientSide = calIngredientNode(referenceResource);
  const produceSide = calProduceNode(referenceResource);

  const sizeRequired = {
    width: ingredientSide.size[0] + produceSide.size[0] - 96,
    height: Math.max(ingredientSide.size[1], produceSide.size[1]),
  };

  const refPos = {
    top: (sizeRequired.height - 96) / 2 + 16,
    left: sizeRequired.width - produceSide.size[0] + 16,
  };

  const ingredientOrigin: [number, number] = [0, (sizeRequired.height - ingredientSide.size[1]) / 2];

  const ingredientNode = resolveIngredientNode(ingredientSide, ingredientOrigin);

  return (
    <div className='relative bg-slate-200' style={sizeRequired}>
      <div className='absolute' style={refPos}>
        {ingredientSide.jsx}
      </div>
      {ingredientNode}
    </div>
  );
}

type NodeInfo = {
  size: [number, number];
  jsx: React.ReactElement;
  child?: NodeInfo[];
};

function calProduceNode(resource: Resource): NodeInfo {
  if (resource.ingredientFor.length === 0) {
    return {
      size: [96, 96],
      jsx: isProduct(resource) ? <ProductItem product={resource} /> : <ResourceItem resource={resource} />,
    };
  }

  const childNode = resource.ingredientFor.map(calProduceNode);
  const childSize = [
    childNode.reduce((maxWidth, cur) => (cur.size[0] > maxWidth ? cur.size[0] : maxWidth), 0),
    childNode.reduce((height, cur) => cur.size[0] + height, 0),
  ];

  return {
    size: [96 + childSize[0], Math.max(96, childSize[1])],
    jsx: isProduct(resource) ? <ProductItem product={resource} /> : <ResourceItem resource={resource} />,
    child: childNode,
  };
}

function calIngredientNode(resource: Resource | Product): NodeInfo {
  if (!isProduct(resource)) {
    return {
      size: [96, 96],
      jsx: <ResourceItem resource={resource} />,
    };
  }

  const childNode = resource.ingredient.map((v) => calIngredientNode(v.ingredient));
  const childSize = [
    childNode.reduce((maxWidth, cur) => (cur.size[0] > maxWidth ? cur.size[0] : maxWidth), 0),
    childNode.reduce((height, cur) => cur.size[0] + height, 0),
  ];

  return {
    size: [96 + childSize[0], Math.max(96, childSize[1])],
    jsx: <ProductItem product={resource} />,
    child: childNode,
  };
}

function resolveIngredientNode(
  info: NodeInfo,
  origin: [number, number],
  includeParent?: boolean,
): React.ReactElement[] {
  if (!info.child) {
    return [];
  }

  let height = origin[1];
  const jsxs = info.child.flatMap((v) => {
    const child = resolveIngredientNode(v, [origin[0], height], true);
    height += v.size[1];
    return child;
  });

  if (includeParent) {
    const size = info.size;
    const pos = { left: origin[0] + (size[0] - 96) + 16, top: origin[1] + (size[1] - 96) / 2 + 16 };
    jsxs.push(
      <div className='absolute' style={pos}>
        {info.jsx}
      </div>,
    );
  }

  return jsxs;
}
