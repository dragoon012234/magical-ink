import { BasicObject } from "./BasicObject";
import type { Skill } from "./Skill";

export class Resource extends BasicObject {
  price: number;
  wishPrice: number;
  category: Skill;

  layer: number = 0;

  constructor(id: number, name: string, price: number, wishPrice: number, category: Skill) {
    super(id, name);
    this.price = price;
    this.wishPrice = wishPrice;
    this.category = category;
  }

  get img(): string {
    return `${process.env.PUBLIC_URL}/imgs/items/${this.category.filename.substring(1)}/${this.filename}.png`;
  }
}
