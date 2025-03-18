import { nameToPath } from "../utils";
import { Product } from "./Product";
import { Skill } from "./Skill";

export class TreeFarmProduct extends Product {
  constructor(id: number, name: string, price: number, wishPrice: number, duration: number, cost: number) {
    super(id, name, price, wishPrice, Skill.TREE_FARM, duration, cost);
  }

  static readonly APPLE: TreeFarmProduct;
  static readonly GRAPE: TreeFarmProduct;
  static readonly ORANGE: TreeFarmProduct;
  static readonly MAPPLE_SAP: TreeFarmProduct;
  static readonly PEACH: TreeFarmProduct;
  static readonly CHERRY: TreeFarmProduct;

  static all(): TreeFarmProduct[] {
    return [
      TreeFarmProduct.APPLE,
      TreeFarmProduct.GRAPE,
      TreeFarmProduct.ORANGE,
      TreeFarmProduct.MAPPLE_SAP,
      TreeFarmProduct.PEACH,
      TreeFarmProduct.CHERRY,
    ];
  }
}

(() => {
  const initial = [
    ["Apple", 28, 65, 60, 10],
    ["Grape", 108, 216, 210, 46],
    ["Orange", 272, 511, 480, 131],
    ["Mapple Sap", 1111, 1738, 1680, 619],
    ["Peach", 2853, 4101, 3900, 1720],
    ["Cherry", 5844, 8097, 7500, 3690],
  ] as const;

  const cls: Record<string, TreeFarmProduct> = TreeFarmProduct as any;
  for (let id = 1; id <= initial.length; ++id) {
    const [name, price, wishPrice, duration, cost] = initial[id - 1];
    const key = nameToPath(name).toUpperCase();
    cls[key] = new TreeFarmProduct(id, name, price, wishPrice, duration, cost);
  }
})();
