import { Resource } from "./Resource";
import { Skill } from "./Skill";

export class WorldMonsterItem extends Resource {
  constructor(id: number, name: string, price: number, wishPrice: number) {
    super(id, name, price, wishPrice, Skill.BANISH);
  }

  static readonly MILK = new WorldMonsterItem(1, "Milk", 187, 373);
  static readonly EGG = new WorldMonsterItem(2, "Egg", 489, 852);
  static readonly HONEY = new WorldMonsterItem(3, "Honey", 1111, 1738);
  static readonly GELATIN = new WorldMonsterItem(4, "Gelatin", 1605, 2422);
}
