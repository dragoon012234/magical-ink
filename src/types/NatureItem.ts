import { Resource } from "./Resource";
import { Skill } from "./Skill";

export class NatureItem extends Resource {
  constructor(id: number, name: string, price: number, wishPrice: number) {
    super(id, name, price, wishPrice, Skill.NATURE_CIRCULATION);
  }

  static readonly PEBBLE = new NatureItem(1, "Pebble", 7, 22);
  static readonly BRANCH = new NatureItem(1, "Branch", 7, 22);
  static readonly BOULDER = new NatureItem(1, "Boulder", 7, 22);
  static readonly LOG = new NatureItem(1, "Log", 7, 22);
  static readonly HERB = new NatureItem(1, "Herb", 7, 22);
}
