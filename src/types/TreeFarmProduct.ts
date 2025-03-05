import { Product } from "./Product";
import { Skill } from "./Skill";

export class TreeFarmProduct extends Product {
  constructor(id: number, name: string, price: number, wishPrice: number, duration: number, cost: number) {
    super(id, name, price, wishPrice, Skill.TREE_FARM, duration, cost);
  }

  static readonly APPLE = new TreeFarmProduct(1, "Apple", 28, 65, 60, 10);
  static readonly GRAPE = new TreeFarmProduct(2, "Grape", 108, 216, 210, 46);
  static readonly ORANGE = new TreeFarmProduct(3, "Orange", 272, 511, 480, 131);
  static readonly MAPPLE_SAP = new TreeFarmProduct(4, "Mapple Sap", 1111, 1738, 1680, 619);
  static readonly PEACH = new TreeFarmProduct(5, "Peach", 2853, 4101, 3900, 1720);
  static readonly CHERRY = new TreeFarmProduct(6, "Cherry", 5844, 8097, 7500, 3690);
}
