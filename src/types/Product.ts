import type { Ingredient } from "./Ingredient";
import { Resource } from "./Resource";
import type { Skill } from "./Skill";

export class Product extends Resource {
  duration: number;
  cost: number;

  ingredient: Ingredient[];

  constructor(
    id: number,
    name: string,
    price: number,
    wishPrice: number,
    wishExp: number,
    category: Skill,
    duration: number,
    cost: number,
  ) {
    super(id, name, price, wishPrice, wishExp, category);
    this.duration = duration;
    this.cost = cost;

    this.ingredient = [];
  }

  get durationx5(): number {
    return this.duration * 6;
  }

  get costx5(): number {
    return Math.floor((this.cost * 15 + 1) / 2);
  }
}
