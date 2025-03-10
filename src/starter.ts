import { LiteGraph } from "litegraph.js";

import type { SkillNode, ProductNode } from "./litegraph";
import { items, skills } from "./types";

(function setupSkillNodes() {
  for (const skill of skills) {
    const node = LiteGraph.createNode("magicalink/skill", "", { info: skill }) as SkillNode;
    skill.node = node;
    node.pos = [100 + 300 * (skill.id - 1), 100];
  }
})();

(function setupProductNode() {
  const layerIndexes: Record<number, number> = {};
  for (const item of items) {
    const layer = item.layer;
    const index = layerIndexes[layer] ?? 1;
    layerIndexes[layer] = index + 1;
    const x = 100 + (layer - 1) * 200;
    const y = 300 + (index - 1) * 100;
    const node = LiteGraph.createNode("magicalink/product", "", { info: item }) as ProductNode;
    node.pos = [x, y];
    item.node = node;
  }
})();
