import { nameToPath } from "../utils";
import { Product } from "./Product";
import { Skill } from "./Skill";

export class Ore extends Product {
  constructor(
    id: number,
    name: string,
    price: number,
    wishPrice: number,
    wishExp: number,
    duration: number,
    cost: number,
  ) {
    super(id, name, price, wishPrice, wishExp, Skill.ORE_GENERATION, duration, cost);
  }

  static readonly SAND: Ore;
  static readonly SOIL: Ore;
  static readonly METAL_SCRAP: Ore;
  static readonly IRON_ORE: Ore;

  static readonly COPPER_ORE: Ore;
  static readonly SALT: Ore;
  static readonly COAL: Ore;
  static readonly SILVER_ORE: Ore;

  static readonly GOLD_ORE: Ore;

  static all(): Ore[] {
    return [
      Ore.SAND,
      Ore.SOIL,
      Ore.METAL_SCRAP,
      Ore.IRON_ORE,
      Ore.COPPER_ORE,
      Ore.SALT,
      Ore.COAL,
      Ore.SILVER_ORE,
      Ore.GOLD_ORE,
    ];
  }
}

(() => {
  const initial = [
    ["Sand", 3600, 1561, 21600, 11708, 2629, 13145, 3803, 75],
    ["Soil", 4200, 1892, 25200, 14190, 3146, 15730, 4496, 87],
    ["Metal Scrap", 5700, 2691, 34200, 20183, 4357, 21785, 6113, 115],
    ["Iron Ore", 6600, 3165, 39600, 23738, 5099, 25495, 7105, 131],
    ["Copper Ore", 8400, 4270, 50400, 32025, 6717, 33585, 9263, 166],
    ["Salt", 10800, 5605, 64800, 42038, 15201, 76005, 20817, 413],
    ["Coal", 12600, 6776, 75600, 50820, 16866, 84330, 23013, 598],
    ["Silver Ore", 14400, 8094, 86400, 60705, 35348, 176740, 48097, 1170],
    ["Gold Ore", 16200, 9578, 97200, 71835, 37320, 186600, 50677, 1584],
  ] as const;
  const cls: Record<string, Ore> = Ore as any;
  for (let id = 1; id <= initial.length; ++id) {
    const [name, duration, cost, , , price, , wishPrice, exp] = initial[id - 1];
    const key = nameToPath(name).toUpperCase();
    cls[key] = new Ore(id, name, price, wishPrice, exp, duration, cost);
  }
})();
