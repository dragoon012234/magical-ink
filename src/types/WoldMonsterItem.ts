import { Resource } from "./Resource";
import { Skill } from "./Skill";

export class NatureItem extends Resource {
  constructor(id: number, name: string, price: number, wishPrice: number) {
    super(id, name, price, wishPrice, Skill.NATURE_CIRCULATION);
  }

  static readonly MILK = new NatureItem(1, "Milk", 187, 373);
  static readonly EGG = new NatureItem(2, "Egg", 489, 852);
  static readonly HONEY = new NatureItem(3, "Honey", 1111, 1738);
  static readonly GELATIN = new NatureItem(4, "Gelatin", 1605, 2422);
}
