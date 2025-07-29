import { nameToPath } from "../utils";
import { Product } from "./Product";
import { Skill } from "./Skill";

export class Furniture extends Product {
  constructor(
    id: number,
    name: string,
    price: number,
    wishPrice: number,
    wishExp: number,
    duration: number,
    cost: number,
  ) {
    super(id, name, price, wishPrice, wishExp, Skill.FURNITURE_PRODUCTION, duration, cost);
  }

  static readonly RABBIT_SCULPTURE_CHAIR: Furniture;
  static readonly NEATLY_ARRANGED_TABLE: Furniture;
  static readonly RABBIT_SCULPTURE_DRAWER: Furniture;
  static readonly SOFA: Furniture;

  static readonly WARDROBE: Furniture;
  static readonly TEA_TABLE: Furniture;
  static readonly EBONY_BED: Furniture;

  static all(): Furniture[] {
    return [
      Furniture.RABBIT_SCULPTURE_CHAIR,
      Furniture.NEATLY_ARRANGED_TABLE,
      Furniture.RABBIT_SCULPTURE_DRAWER,
      Furniture.SOFA,
      Furniture.WARDROBE,
      Furniture.TEA_TABLE,
      Furniture.EBONY_BED,
    ];
  }
}

(() => {
  const initial = [
    ["Rabbit Sculpture Chair", 6300, 2922, 37800, 21915, 13891, 69455, 19418, 210],
    ["Neatly Arranged Table", 6900, 3419, 41400, 25643, 37967, 189835, 52742, 366],
    ["Rabbit Sculpture Drawer", 9900, 5249, 59400, 39368, 47702, 238510, 65423, 612],
    ["Sofa", 12000, 6370, 72000, 47775, 62845, 314225, 85842, 1059],
    ["Wardrobe", 13800, 7637, 82800, 57278, 65033, 325165, 88562, 1439],
    ["Tea Table", 15600, 9064, 93600, 67980, 68991, 344955, 93741, 1970],
    ["Ebony Bed", 18000, 10660, 108000, 79950, 79883, 399415, 0, 0],
  ] as const;
  const cls: Record<string, Furniture> = Furniture as any;
  for (let id = 1; id <= initial.length; ++id) {
    const [name, duration, cost, , , price, , wishPrice, exp] = initial[id - 1];
    const key = nameToPath(name).toUpperCase();
    cls[key] = new Furniture(id, name, price, wishPrice, exp, duration, cost);
  }
})();
