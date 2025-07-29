import { nameToPath } from "../utils";
import { Product } from "./Product";
import { Skill } from "./Skill";

export class FarmProduct extends Product {
  constructor(
    id: number,
    name: string,
    price: number,
    wishPrice: number,
    wishExp: number,
    duration: number,
    cost: number,
  ) {
    super(id, name, price, wishPrice, wishExp, Skill.FARM, duration, cost);
  }

  static readonly WHEAT: FarmProduct;
  static readonly STRAWBERRY: FarmProduct;
  static readonly TOMATO: FarmProduct;
  static readonly POPPURI_PETAL: FarmProduct;
  static readonly CARROT: FarmProduct;
  static readonly SUGAR_CANE: FarmProduct;
  static readonly ROSEMARY: FarmProduct;
  static readonly LAVENDER: FarmProduct;
  static readonly PUMPKIN: FarmProduct;

  static all(): FarmProduct[] {
    return [
      FarmProduct.WHEAT,
      FarmProduct.STRAWBERRY,
      FarmProduct.TOMATO,
      FarmProduct.POPPURI_PETAL,
      FarmProduct.CARROT,
      FarmProduct.SUGAR_CANE,
      FarmProduct.ROSEMARY,
      FarmProduct.LAVENDER,
      FarmProduct.PUMPKIN,
    ];
  }
}

(() => {
  const initial = [
    ["Wheat", 8, 22, 20, 2, 2],
    ["Strawberry", 18, 44, 40, 7, 2],
    ["Tomato", 77, 159, 150, 33, 6],
    ["Poppuri Petal", 226, 437, 420, 103, 10],
    ["Carrot", 855, 1379, 1320, 467, 30],
    ["Sugar Cane", 2145, 3149, 3000, 1269, 63],
    ["Rosemary", 3459, 4917, 4800, 2073, 94],
    ["Lavender", 7154, 9846, 9000, 4580, 176],
    ["Pumpkin", 12814, 17423, 15000, 8572, 774],
  ] as const;

  const cls: Record<string, FarmProduct> = FarmProduct as any;
  for (let id = 1; id <= initial.length; ++id) {
    const [name, price, wishPrice, duration, cost, exp] = initial[id - 1];
    const key = nameToPath(name).toUpperCase();
    cls[key] = new FarmProduct(id, name, price, wishPrice, exp, duration, cost);
  }
})();
