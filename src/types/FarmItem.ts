import { Item } from "./Item";
import { Skill } from "./Skill";

export class FarmItem extends Item {
  constructor(id: number, name: string, price: number, wishPrice: number) {
    super(id, name, price, wishPrice, Skill.FARM);
  }

  static readonly WHEAT = new FarmItem(1, "Wheat", 8, 22);
}
