import type { Product } from "../types";

export function isProduct(o: any): o is Product {
  return !!o.ingredient;
}
