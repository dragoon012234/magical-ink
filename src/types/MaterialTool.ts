import { nameToPath } from "../utils";
import { Product } from "./Product";
import { Skill } from "./Skill";

export class MaterialTool extends Product {
  constructor(id: number, name: string, price: number, wishPrice: number, duration: number, cost: number) {
    super(id, name, price, wishPrice, Skill.MATERIALS_AND_TOOLS_PRODUCTION, duration, cost);
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
}

(() => {
  const initial = [
    ["Wooden Nail", 2700, 1017, 16200, 7628, 1830, 9150, 2734],
    ["Wooden Plank", 3000, 1269, 18000, 9518, 2172, 10860, 3188],
    ["Wooden Hammer", 3600, 1561, 21600, 11708, 2663, 13315, 3852],
    ["Glass", 4200, 1892, 25200, 14190, 6836, 34180, 9768],
    ["Nail", 5700, 2691, 34200, 20183, 10423, 52115, 14622],
    ["Sand Grain Tweezers", 6600, 3165, 39600, 23738, 11163, 55815, 15554],
    ["Mortar and Pestle", 7500, 3690, 45000, 27675, 17294, 86470, 23960],
    ["Pickaxe", 8400, 4270, 50400, 32025, 20037, 100185, 27632],
    ["Sandpaper", 9900, 5249, 59400, 39368, 26954, 134770, 36968],
  ] as const;
  const cls: Record<string, MaterialTool> = MaterialTool as any;
  for (let id = 1; id <= initial.length; ++id) {
    const [name, duration, cost, , , price, , wishPrice] = initial[id - 1];
    const key = nameToPath(name).toUpperCase();
    cls[key] = new MaterialTool(id, name, price, wishPrice, duration, cost);
  }
})();
