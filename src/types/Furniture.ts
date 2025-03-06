import { nameToPath } from "../utils";
import { Product } from "./Product";
import { Skill } from "./Skill";

export class Furniture extends Product {
  constructor(id: number, name: string, price: number, wishPrice: number, duration: number, cost: number) {
    super(id, name, price, wishPrice, Skill.FURNITURE_PRODUCTION, duration, cost);
  }

  static readonly RABBIT_SCULPTURE_CHAIR: Furniture;
  static readonly NEATLY_ARRANGED_TABLE: Furniture;
  static readonly RABBIT_SCULPTURE_DRAWER: Furniture;
}

(() => {
  const initial = [
    ["Rabbit Sculpture Chair", 6300, 2922, 37800, 21915, 13891, 69455, 19418],
    ["Neatly Arranged Table", 6900, 3419, 41400, 25643, 37967, 189835, 52742],
    ["Rabbit Sculpture Drawer", 9900, 5249, 59400, 39368, 47702, 238510, 65423],
  ] as const;
  const cls: Record<string, Furniture> = Furniture as any;
  for (let id = 1; id <= initial.length; ++id) {
    const [name, duration, cost, , , price, , wishPrice] = initial[id - 1];
    const key = nameToPath(name).toUpperCase();
    cls[key] = new Furniture(id, name, price, wishPrice, duration, cost);
  }
})();
