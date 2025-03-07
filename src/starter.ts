import { LiteGraph } from "litegraph.js";

import type { SkillNode, ProductNode } from "./litegraph";
import type { Resource } from "./types";
import { items, Product, skills } from "./types";

(function setupSkillNodes() {
  for (const skill of skills) {
    const node = LiteGraph.createNode("magicalink/skill", "", { info: skill }) as SkillNode;
    skill.node = node;
    node.pos = [100 + 300 * (skill.id - 1), 100];
  }
})();

(function setupProductNode() {
  const layeredItems: Resource[][] = [];

  let remainItems = items.length;

  const ingredientItems = [];
  for (let i = 0; i < items.length; ++i) {
    const item = items[i];
    if (item instanceof Product) {
      if (item.ingredient.length === 0) {
        item.layer = 1;
        ingredientItems.push(item);
      }
    } else {
      item.layer = 1;
      ingredientItems.push(item);
    }
  }
  layeredItems.push(ingredientItems);
  remainItems -= ingredientItems.length;

  let layerNumber = 1;
  while (remainItems > 0) {
    const layer = [];
    ++layerNumber;

    for (let i = 0; i < items.length; ++i) {
      const item = items[i] as Product; // As this rate, there are no Resource anymore
      if (item.layer !== 0) continue;

      let isThisLayer = true;
      for (const { ingredient } of item.ingredient) {
        if (ingredient.layer === 0 || ingredient.layer >= layerNumber) {
          isThisLayer = false;
          break;
        }
      }

      if (isThisLayer) {
        item.layer = layerNumber;
        layer.push(item);
      }
    }

    layeredItems.push(layer);
    remainItems -= layer.length;
  }

  for (let i = 0; i < layeredItems.length; ++i) {
    const layer = layeredItems[i];
    const x = 100 + i * 200;
    for (let j = 0; j < layer.length; ++j) {
      const item = layer[j];
      const y = 300 + j * 100;
      const node = LiteGraph.createNode("magicalink/product", "", { info: item }) as ProductNode;
      node.pos = [x, y];
      item.node = node;
    }
  }

  // for (const item of items) {
  //   if (item instanceof Product) {
  //     for (const { ingredient } of item.ingredient) {
  //       ingredient.node.connect(0, item.node, ingredient.name);
  //     }
  //   }
  // }

  console.log("Setup Product Node: [Done]");
})();
