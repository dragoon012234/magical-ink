import { nameToPath } from "../utils";
import { Product } from "./Product";
import { Skill } from "./Skill";

export class FarmProduct extends Product {
  constructor(id: number, name: string, price: number, wishPrice: number, duration: number, cost: number) {
    super(id, name, price, wishPrice, Skill.FARM, duration, cost);
  }

  static readonly WHEAT: FarmProduct;
  static readonly STRAWBERRY: FarmProduct;
  static readonly TOMATO: FarmProduct;
  static readonly POPPURI_PETAL: FarmProduct;
  static readonly CARROT: FarmProduct;
  static readonly SUGAR_CANE: FarmProduct;
  static readonly ROSEMARY: FarmProduct;
  static readonly LAVENDER: FarmProduct;

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
    ];
  }
}

(() => {
  const initial = [
    ["Wheat", 8, 22, 20, 2],
    ["Strawberry", 18, 44, 40, 7],
    ["Tomato", 77, 159, 150, 33],
    ["Poppuri Petal", 226, 437, 420, 103],
    ["Carrot", 855, 1379, 1320, 467],
    ["Sugar Cane", 2145, 3149, 3000, 1269],
    ["Rosemary", 3459, 4917, 4800, 2073],
    ["Lavender", 7154, 9846, 9000, 4580],
  ] as const;

  const cls: Record<string, FarmProduct> = FarmProduct as any;
  for (let id = 1; id <= initial.length; ++id) {
    const [name, price, wishPrice, duration, cost] = initial[id - 1];
    const key = nameToPath(name).toUpperCase();
    cls[key] = new FarmProduct(id, name, price, wishPrice, duration, cost);
  }
})();
