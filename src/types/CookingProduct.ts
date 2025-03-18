import { nameToPath } from "../utils";
import { Product } from "./Product";
import { Skill } from "./Skill";

export class CookingProduct extends Product {
  constructor(id: number, name: string, price: number, wishPrice: number, duration: number, cost: number) {
    super(id, name, price, wishPrice, Skill.COOKING, duration, cost);
  }

  static readonly RYE_BREAD: CookingProduct;
  static readonly STRAWBERRY_JUICE: CookingProduct;
  static readonly APPLE_JUICE: CookingProduct;
  static readonly TOMATO_SALAD: CookingProduct;
  static readonly RAISIN_BREAD: CookingProduct;
  static readonly TOAST: CookingProduct;
  static readonly ORANGE_MARMALADE: CookingProduct;
  static readonly SCRAMBLE: CookingProduct;
  static readonly CARROT_STEW: CookingProduct;
  static readonly MAPLE_SYRUP: CookingProduct;
  static readonly SUGAR: CookingProduct;
  static readonly BOTTLED_PEACHES: CookingProduct;
  static readonly HERB_OIL: CookingProduct;
  static readonly ROSEMARY_TEA: CookingProduct;
  static readonly ROSEMARY_FOCACCIA: CookingProduct;
  static readonly CHERRY_JUICE: CookingProduct;
  static readonly LAVENDER_COOKIE: CookingProduct;

  static all(): CookingProduct[] {
    return [
      CookingProduct.RYE_BREAD,
      CookingProduct.STRAWBERRY_JUICE,
      CookingProduct.APPLE_JUICE,
      CookingProduct.TOMATO_SALAD,
      CookingProduct.RAISIN_BREAD,
      CookingProduct.TOAST,
      CookingProduct.ORANGE_MARMALADE,
      CookingProduct.SCRAMBLE,
      CookingProduct.CARROT_STEW,
      CookingProduct.MAPLE_SYRUP,
      CookingProduct.SUGAR,
      CookingProduct.BOTTLED_PEACHES,
      CookingProduct.HERB_OIL,
      CookingProduct.ROSEMARY_TEA,
      CookingProduct.ROSEMARY_FOCACCIA,
      CookingProduct.CHERRY_JUICE,
      CookingProduct.LAVENDER_COOKIE,
    ];
  }
}

(() => {
  const initial = [
    ["Rye Bread", 30, 4, 180, 30, 35, 175, 89],
    ["Strawberry Juice", 40, 7, 240, 53, 68, 340, 164],
    ["Apple Juice", 60, 10, 360, 75, 103, 515, 238],
    ["Tomato Salad", 150, 33, 900, 248, 282, 1410, 582],
    ["Raisin Bread", 210, 46, 1260, 345, 417, 2085, 832],
    ["Toast", 360, 81, 2160, 608, 704, 3520, 1404],
    ["Orange Marmalade", 480, 131, 2880, 983, 1334, 6670, 2505],
    ["Scramble", 840, 242, 5040, 1815, 2243, 11215, 3904],
    ["Carrot Stew", 1320, 467, 7920, 3503, 3761, 18805, 6062],
    ["Maple Syrup", 1680, 619, 10080, 4643, 6702, 33510, 10484],
    ["Sugar", 3000, 1269, 18000, 9518, 8265, 41325, 12130],
    ["Bottled Peaches", 3900, 1720, 23400, 12900, 11217, 56085, 16121],
    ["Herb Oil", 4800, 2073, 28800, 15548, 17924, 89620, 25476],
    ["Rosemary Tea", 6300, 2922, 37800, 21915, 22006, 110030, 30761],
    ["Rosemary Focaccia", 6600, 3165, 39600, 23738, 27778, 138890, 38703],
    ["Cherry Juice", 7500, 3690, 45000, 27675, 42787, 213935, 59279],
    ["Lavender Cookie", 9000, 4580, 54000, 34350, 47945, 239725, 65984],
  ] as const;
  const cls: Record<string, CookingProduct> = CookingProduct as any;
  for (let id = 1; id <= initial.length; ++id) {
    const [name, duration, cost, , , price, , wishPrice] = initial[id - 1];
    const key = nameToPath(name).toUpperCase();
    cls[key] = new CookingProduct(id, name, price, wishPrice, duration, cost);
  }
})();
