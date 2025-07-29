import { nameToPath } from "../utils";
import { Product } from "./Product";
import { Skill } from "./Skill";

export class CookingProduct extends Product {
  constructor(
    id: number,
    name: string,
    price: number,
    wishPrice: number,
    wishExp: number,
    duration: number,
    cost: number,
  ) {
    super(id, name, price, wishPrice, wishExp, Skill.COOKING, duration, cost);
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
  static readonly CHEESE: CookingProduct;
  static readonly CHERRY_CUPCAKE: CookingProduct;
  static readonly FRUIT_TEA: CookingProduct;

  static readonly PUMPKIN_SOUP: CookingProduct;
  static readonly PUMPKIN_PIE: CookingProduct;

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
      CookingProduct.CHEESE,
      CookingProduct.CHERRY_CUPCAKE,
      CookingProduct.FRUIT_TEA,
      CookingProduct.PUMPKIN_SOUP,
      CookingProduct.PUMPKIN_PIE,
    ];
  }
}

(() => {
  const initial = [
    ["Rye Bread", 30, 4, 180, 30, 35, 175, 89, 3],
    ["Strawberry Juice", 40, 7, 240, 53, 68, 340, 189, 4],
    ["Apple Juice", 60, 10, 360, 75, 103, 515, 289, 5],
    ["Tomato Salad", 150, 33, 900, 248, 282, 1410, 589, 10],
    ["Raisin Bread", 210, 46, 1260, 345, 417, 2085, 889, 13],
    ["Toast", 360, 81, 2160, 608, 704, 3520, 1489, 17],
    ["Orange Marmalade", 480, 131, 2880, 983, 1334, 6670, 2589, 26],
    ["Scramble", 840, 242, 5040, 1815, 2243, 11215, 3989, 40],
    ["Carrot Stew", 1320, 467, 7920, 3503, 3761, 18805, 6089, 62],
    ["Maple Syrup", 1680, 619, 10080, 4643, 6702, 33510, 10489, 89],
    ["Sugar", 3000, 1269, 18000, 9518, 8265, 41325, 12189, 124],
    ["Bottled Peaches", 3900, 1720, 23400, 12900, 11217, 56085, 16189, 159],
    ["Herb Oil", 4800, 2073, 28800, 15548, 17924, 89620, 25489, 213],
    ["Rosemary Tea", 6300, 2922, 37800, 21915, 22006, 110030, 30789, 264],
    ["Rosemary Focaccia", 6600, 3165, 39600, 23738, 27778, 138890, 38789, 305],
    ["Cherry Juice", 7500, 3690, 45000, 27675, 42787, 213935, 59289, 399],
    ["Lavender Cookie", 9000, 4580, 54000, 34350, 47945, 239725, 65989, 454],
    ["Cheese", 10800, 5605, 64800, 42038, 49780, 248900, 68189, 746],
    ["Cherry Cupcake", 12000, 6370, 72000, 47775, 56089, 280445, 76689, 1000],
    ["Fruit Tea", 13800, 7637, 82800, 57278, 59026, 295130, 80389, 1371],
    ["Pumpkin Soup", 15000, 8572, 90000, 64290, 70712, 353560, 96189, 1819],
    ["Pumpkin Pie", 18000, 10660, 108000, 79950, 81468, 407389, 0, 0],
  ] as const;
  const cls: Record<string, CookingProduct> = CookingProduct as any;
  for (let id = 1; id <= initial.length; ++id) {
    const [name, duration, cost, , , price, , wishPrice, exp] = initial[id - 1];
    const key = nameToPath(name).toUpperCase();
    cls[key] = new CookingProduct(id, name, price, wishPrice, exp, duration, cost);
  }
})();
