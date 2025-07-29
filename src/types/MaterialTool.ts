import { nameToPath } from "../utils";
import { Product } from "./Product";
import { Skill } from "./Skill";

export class MaterialTool extends Product {
  constructor(
    id: number,
    name: string,
    price: number,
    wishPrice: number,
    wishExp: number,
    duration: number,
    cost: number,
  ) {
    super(id, name, price, wishPrice, wishExp, Skill.MATERIALS_AND_TOOLS_PRODUCTION, duration, cost);
  }

  static readonly WOODEN_NAIL: MaterialTool;
  static readonly WOODEN_PLANK: MaterialTool;
  static readonly WOODEN_HAMMER: MaterialTool;
  static readonly GLASS: MaterialTool;

  static readonly NAIL: MaterialTool;
  static readonly SAND_GRAIN_TWEEZERS: MaterialTool;
  static readonly MORTAR_AND_PESTLE: MaterialTool;
  static readonly PICKAXE: MaterialTool;

  static readonly SANDPAPER: MaterialTool;
  static readonly TOOL_BAG: MaterialTool;
  static readonly CRIMSON_FLAME_LAMP: MaterialTool;
  static readonly SILVER_INGOT: MaterialTool;

  static readonly GOLD_INGOT: MaterialTool;
  static readonly EBONY_NEEDLE: MaterialTool;

  static all(): MaterialTool[] {
    return [
      MaterialTool.WOODEN_NAIL,
      MaterialTool.WOODEN_PLANK,
      MaterialTool.WOODEN_HAMMER,
      MaterialTool.GLASS,
      MaterialTool.NAIL,
      MaterialTool.SAND_GRAIN_TWEEZERS,
      MaterialTool.MORTAR_AND_PESTLE,
      MaterialTool.PICKAXE,
      MaterialTool.SANDPAPER,
      MaterialTool.TOOL_BAG,
      MaterialTool.CRIMSON_FLAME_LAMP,
      MaterialTool.SILVER_INGOT,
      MaterialTool.GOLD_INGOT,
      MaterialTool.EBONY_NEEDLE,
    ];
  }
}

(() => {
  const initial = [
    ["Wooden Nail", 2700, 1017, 16200, 7628, 1830, 9150, 2734, 54],
    ["Wooden Plank", 3000, 1269, 18000, 9518, 2172, 10860, 3188, 64],
    ["Wooden Hammer", 3600, 1561, 21600, 11708, 2663, 13315, 3852, 75],
    ["Glass", 4200, 1892, 25200, 14190, 6836, 34180, 9768, 128],
    ["Nail", 5700, 2691, 34200, 20183, 10423, 52115, 14622, 177],
    ["Sand Grain Tweezers", 6600, 3165, 39600, 23738, 11163, 55815, 15554, 194],
    ["Mortar and Pestle", 7500, 3690, 45000, 27675, 17294, 86470, 23960, 254],
    ["Pickaxe", 8400, 4270, 50400, 32025, 20037, 100185, 27632, 287],
    ["Sandpaper", 9900, 5249, 59400, 39368, 26954, 134770, 36968, 460],
    ["Tool Bag", 11400, 5981, 68400, 44858, 39190, 195950, 53596, 754],
    ["Crimson Flame Lamp", 13200, 7198, 79200, 53985, 59523, 297615, 81132, 1245],
    ["Silver Ingot", 15000, 8572, 90000, 64290, 64839, 324195, 88159, 1742],
    ["Gold Ingot", 17400, 10109, 104400, 75818, 74846, 374230, 101578, 2447],
    ["Ebony Needle", 19800, 11821, 118800, 88658, 105362, 526810, 0, 0],
  ] as const;
  const cls: Record<string, MaterialTool> = MaterialTool as any;
  for (let id = 1; id <= initial.length; ++id) {
    const [name, duration, cost, , , price, , wishPrice, exp] = initial[id - 1];
    const key = nameToPath(name).toUpperCase();
    cls[key] = new MaterialTool(id, name, price, wishPrice, exp, duration, cost);
  }
})();
