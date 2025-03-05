import { Resource } from "./Resource";
import type { Skill } from "./Skill";

export class Item extends Resource {
  price: number;
  wishPrice: number;
  category: Skill;

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
