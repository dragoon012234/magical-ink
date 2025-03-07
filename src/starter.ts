import { LiteGraph } from "litegraph.js";

import type { SkillNode, ProductNode } from "./litegraph";
import type { Resource } from "./types";
import { items, Product, skills } from "./types";

(function setupSkillNodes() {
  for (const skill of skills) {
    const node = LiteGraph.createNode("magicalink/skill", "", { info: skill }) as SkillNode;
    skill.node = node;
    node.pos = [100 + (300 * skill.id - 1), 100];
  }
})();

(function setupProductNode() {
  const layeredItems: Resource[][] = [];

  const flags = Array.from({ length: items.length }, () => false);
  let remainItems = items.length;

  const ingredientItems = [];
  for (let i = 0; i < items.length; ++i) {
    const item = items[i];
    if (item instanceof Product) {
      if (item.ingredient.length === 0) {
        item.layer = 1;
        ingredientItems.push(item);
        flags[i] = true;
      }
    } else {
      item.layer = 1;
      ingredientItems.push(item);
      flags[i] = true;
    }
  }
  layeredItems.push(ingredientItems);
  remainItems -= ingredientItems.length;

  let layerNumber = 1;
  while (remainItems > 0) {
    const layer = [];
    ++layerNumber;

    for (let i = 0; i < items.length; ++i) {
      if (flags[i]) continue;

      const item = items[i] as Product; // As this rate, there are no Resource anymore
      let isThisLayer = true;
      for (const ingredient of item.ingredient) {
        if (ingredient.ingredient.layer > 0) {
          isThisLayer = false;
          break;
        }
      }

      if (isThisLayer) {
        item.layer = layerNumber;
        layer.push(item);
        flags[i] = true;
      }
    }

    layeredItems.push(layer);
    remainItems -= layer.length;
  }

  for (let i = 0; i < layeredItems.length; ++i) {
    const layer = layeredItems[i];
    const x = 100 + i * 300;
    for (let j = 0; j < layer.length; ++j) {
      const item = layer[j];
      const y = 400 + j * 300;
      const node = LiteGraph.createNode("magicalink/product", "", { info: item }) as ProductNode;
      node.pos = [x, y];
      item.node = node;
    }
  }

  for (const item of items) {
    if (item instanceof Product) {
      for (const { ingredient } of item.ingredient) {
        ingredient.node.connect(0, item.node, ingredient.name);
      }
    }
  }
})();
