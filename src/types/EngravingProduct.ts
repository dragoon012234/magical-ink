import { nameToPath } from "../utils";
import { Product } from "./Product";
import { Skill } from "./Skill";

export class EngravingrProduct extends Product {
  constructor(
    id: number,
    name: string,
    price: number,
    wishPrice: number,
    wishExp: number,
    duration: number,
    cost: number,
  ) {
    super(id, name, price, wishPrice, wishExp, Skill.SPARKLING_PRODUCTION, duration, cost);
  }

  static readonly SILVER_RING: EngravingrProduct;
  static readonly GOLD_RING: EngravingrProduct;
  static readonly SILVER_DECORATION: EngravingrProduct;

  static all(): EngravingrProduct[] {
    return [EngravingrProduct.SILVER_RING, EngravingrProduct.GOLD_RING, EngravingrProduct.SILVER_DECORATION];
  }
}

(() => {
  const initial = [
    ["Silver Ring", 15600, 9064, 93600, 67980, 67636, 338180, 91900, 1950],
    ["Gold Ring", 18000, 10660, 108000, 79950, 89785, 448925, 0, 0],
    ["Silver Decoration", 20400, 12432, 122400, 93240, 130016, 650080, 0, 0],
  ] as const;
  const cls: Record<string, EngravingrProduct> = EngravingrProduct as any;
  for (let id = 1; id <= initial.length; ++id) {
    const [name, duration, cost, , , price, , wishPrice, exp] = initial[id - 1];
    const key = nameToPath(name).toUpperCase();
    cls[key] = new EngravingrProduct(id, name, price, wishPrice, exp, duration, cost);
  }
})();
