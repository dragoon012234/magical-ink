import { isProduct } from "../utils";
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

  public calRawIngredients(): Ingredient[];
  public calRawIngredients(arr: Ingredient[]): undefined;
  calRawIngredients(arr?: Ingredient[]): Ingredient[] | undefined {
    const merge = !arr;
    arr ??= [];
    for (const ingre of this.ingredient) {
      if (isProduct(ingre.ingredient) && ingre.ingredient.ingredient.length !== 0) {
        ingre.ingredient.calRawIngredients(arr);
      } else {
        arr.push(ingre);
      }
    }

    if (merge) return mergeIngredients(arr);
  }
}

function mergeIngredients(arr: Ingredient[]) {
  const dic: Record<string, Ingredient> = {};
  for (const { ingredient, count } of arr) {
    const key = ingredient.filename;
    if (!dic[key]) {
      dic[key] = {
        ingredient,
        count,
      };
    } else {
      dic[key].count += count;
    }
  }
  return Object.values(dic);
}
