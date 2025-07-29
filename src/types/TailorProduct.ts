import { nameToPath } from "../utils";
import { Product } from "./Product";
import { Skill } from "./Skill";

export class TailorProduct extends Product {
  constructor(
    id: number,
    name: string,
    price: number,
    wishPrice: number,
    wishExp: number,
    duration: number,
    cost: number,
  ) {
    super(id, name, price, wishPrice, wishExp, Skill.TAILORING, duration, cost);
  }

  static readonly FAIRY_CLOTH: TailorProduct;
  static readonly SMALL_HAT: TailorProduct;
  static readonly SMALL_CLOTHES: TailorProduct;
  static readonly FUR_BALL: TailorProduct;

  static all(): TailorProduct[] {
    return [TailorProduct.FAIRY_CLOTH, TailorProduct.SMALL_HAT, TailorProduct.SMALL_CLOTHES, TailorProduct.FUR_BALL];
  }
}

(() => {
  const initial = [
    ["Fairy Cloth", 11400, 5981, 68400, 44858, 43425, 217125, 59388, 794],
    ["Small Hat", 13200, 7198, 79200, 53985, 46633, 233165, 73353, 1102],
    ["Small Clothes", 14400, 8094, 86400, 60705, 66936, 334680, 91078, 1609],
    ["Fur Ball", 17400, 10109, 104400, 75818, 77986, 389930, 0, 0],
  ] as const;
  const cls: Record<string, TailorProduct> = TailorProduct as any;
  for (let id = 1; id <= initial.length; ++id) {
    const [name, duration, cost, , , price, , wishPrice, exp] = initial[id - 1];
    const key = nameToPath(name).toUpperCase();
    cls[key] = new TailorProduct(id, name, price, wishPrice, exp, duration, cost);
  }
})();
