import { nameToPath } from "../utils";
import { Product } from "./Product";
import { Skill } from "./Skill";

export class Ore extends Product {
  constructor(id: number, name: string, price: number, wishPrice: number, duration: number, cost: number) {
    super(id, name, price, wishPrice, Skill.ORE_GENERATION, duration, cost);
  }

  static readonly SAND: Ore;
  static readonly SOIL: Ore;
  static readonly METAL_SCRAP: Ore;
  static readonly IRON_ORE: Ore;
  static readonly COPPER_ORE: Ore;

  static all(): Ore[] {
    return [Ore.SAND, Ore.SOIL, Ore.METAL_SCRAP, Ore.IRON_ORE, Ore.COPPER_ORE];
  }
}

(() => {
  const initial = [
    ["Sand", 3600, 1561, 21600, 11708, 2629, 13145, 3803],
    ["Soil", 4200, 1892, 25200, 14190, 3146, 15730, 4496],
    ["Metal Scrap", 5700, 2691, 34200, 20183, 4357, 21785, 6113],
    ["Iron Ore", 6600, 3165, 39600, 23738, 5099, 25495, 7105],
    ["Copper Ore", 8400, 4270, 50400, 32025, 6717, 33585, 9263],
  ] as const;
  const cls: Record<string, Ore> = Ore as any;
  for (let id = 1; id <= initial.length; ++id) {
    const [name, duration, cost, , , price, , wishPrice] = initial[id - 1];
    const key = nameToPath(name).toUpperCase();
    cls[key] = new Ore(id, name, price, wishPrice, duration, cost);
  }
})();
