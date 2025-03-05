import { Resource } from "./Resource";
import type { Skill } from "./Skill";

export class Product extends Resource {
  duration: number;
  cost: number;

  constructor(
    id: number,
    name: string,
    price: number,
    wishPrice: number,
    category: Skill,
    duration: number,
    cost: number,
  ) {
    super(id, name, price, wishPrice, category);
    this.duration = duration;
    this.cost = cost;
  }

  get durationx5(): number {
    return this.duration * 6;
  }

  get costx5(): number {
    return Math.floor((this.cost * 15 + 1) / 2);
  }
}
