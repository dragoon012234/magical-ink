import { Product } from "./Product";
import { Skill } from "./Skill";

export class FarmProduct extends Product {
  constructor(id: number, name: string, price: number, wishPrice: number, duration: number, cost: number) {
    super(id, name, price, wishPrice, Skill.FARM, duration, cost);
  }

  static readonly WHEAT = new FarmProduct(1, "Wheat", 8, 22, 20, 2);
  static readonly STRAWBERRY = new FarmProduct(2, "Strawberry", 18, 44, 40, 7);
  static readonly TOMATO = new FarmProduct(3, "Tomato", 77, 159, 150, 33);
  static readonly POPPURI_PETAL = new FarmProduct(4, "Poppuri Petal", 226, 437, 420, 103);
  static readonly CARROT = new FarmProduct(5, "Carrot", 855, 1379, 1320, 467);
  static readonly SUGAR_CANE = new FarmProduct(6, "Sugar Cane", 2145, 3149, 3000, 1269);
  static readonly ROSEMARY = new FarmProduct(7, "Rosemary", 3459, 4917, 4800, 2073);
  static readonly LAVENDER = new FarmProduct(8, "Lavender", 7154, 9846, 9000, 4580);
}
