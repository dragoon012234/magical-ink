import { BasicObject } from "./BasicObject";
import type { Product } from "./Product";
import type { Skill } from "./Skill";

export class Resource extends BasicObject {
  price: number;
  wishPrice: number;
  category: Skill;

  ingredientFor: Product[];
  layer: number = 0;
  isLastChainProduct: boolean = true;

  constructor(id: number, name: string, price: number, wishPrice: number, category: Skill) {
    super(id, name);
    this.price = price;
    this.wishPrice = wishPrice;
    this.category = category;

    this.ingredientFor = [];
  }

  get img(): string {
    return `${process.env.PUBLIC_URL}/imgs/items/${this.category.filename.substring(1)}/${this.filename}.png`;
  }
}
