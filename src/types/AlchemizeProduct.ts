import { nameToPath } from "../utils";
import { Product } from "./Product";
import { Skill } from "./Skill";

export class AlchemizeProduct extends Product {
  constructor(
    id: number,
    name: string,
    price: number,
    wishPrice: number,
    wishExp: number,
    duration: number,
    cost: number,
  ) {
    super(id, name, price, wishPrice, wishExp, Skill.ALCHEMIZE, duration, cost);
  }

  static readonly SMALL_RED_POTION: AlchemizeProduct;
  static readonly SMALL_BLUE_POTION: AlchemizeProduct;
  static readonly FORESTS_MAGIC_POWDER: AlchemizeProduct;
  static readonly COLD_RESISTANCE_POTION: AlchemizeProduct;

  static readonly MEDIUM_RED_POTION: AlchemizeProduct;
  static readonly MEDIUM_BLUE_POTION: AlchemizeProduct;
  static readonly NATURES_MAGIC_POWDER: AlchemizeProduct;
  static readonly STURDY_POTION: AlchemizeProduct;

  static readonly CONCENTRATION_POTION: AlchemizeProduct;
  static readonly STICKY_HERB_LUMP: AlchemizeProduct;
  static readonly SPIRIT_SPRING_WATER: AlchemizeProduct;
  static readonly LARGE_RED_POTION: AlchemizeProduct;

  static readonly LARGE_BLUE_POTION: AlchemizeProduct;
  static readonly CRIMSON_FRAME_POTION: AlchemizeProduct;
  static readonly SILVER_ILLUSIOIN_POWDER: AlchemizeProduct;
  static readonly MAGIC_CATALYST: AlchemizeProduct;

  static readonly HEAVENLY_MAGIC_POWDER: AlchemizeProduct;

  static all(): AlchemizeProduct[] {
    return [
      AlchemizeProduct.SMALL_RED_POTION,
      AlchemizeProduct.SMALL_BLUE_POTION,
      AlchemizeProduct.FORESTS_MAGIC_POWDER,
      AlchemizeProduct.COLD_RESISTANCE_POTION,
      AlchemizeProduct.MEDIUM_RED_POTION,
      AlchemizeProduct.MEDIUM_BLUE_POTION,
      AlchemizeProduct.NATURES_MAGIC_POWDER,
      AlchemizeProduct.STURDY_POTION,
      AlchemizeProduct.CONCENTRATION_POTION,
      AlchemizeProduct.STICKY_HERB_LUMP,
      AlchemizeProduct.SPIRIT_SPRING_WATER,
      AlchemizeProduct.LARGE_RED_POTION,
      AlchemizeProduct.LARGE_BLUE_POTION,
      AlchemizeProduct.CRIMSON_FRAME_POTION,
      AlchemizeProduct.SILVER_ILLUSIOIN_POWDER,
      AlchemizeProduct.MAGIC_CATALYST,
      AlchemizeProduct.HEAVENLY_MAGIC_POWDER,
    ];
  }
}

(() => {
  const initial = [
    ["Small Red Potion", 120, 23, 720, 173, 129, 645, 276, 7],
    ["Small Blue Potion", 210, 46, 1260, 345, 415, 2075, 828, 13],
    ["Forest's Magic Powder", 420, 103, 2520, 773, 658, 3290, 1272, 17],
    ["Cold Resistance Potion", 720, 199, 4320, 1493, 1077, 5385, 1919, 26],
    ["Medium Red Potion", 960, 288, 5760, 2160, 1385, 6925, 2360, 33],
    ["Medium Blue Potion", 1200, 401, 7200, 3008, 2069, 10345, 3392, 44],
    ["Nature's Magic Powder", 2100, 707, 12600, 5303, 5102, 25510, 7878, 81],
    ["Sturdy Potion", 2400, 905, 14400, 6788, 5385, 26925, 8125, 90],
    ["Concentration Potion", 3300, 1410, 19800, 10575, 7491, 37455, 10911, 122],
    ["Sticky Herb Lump", 4200, 1892, 25200, 14190, 12432, 62160, 17764, 172],
    ["Spirit Spring Water", 6300, 2922, 37800, 21915, 20046, 100230, 28021, 252],
    ["Large Red Potion", 7800, 3973, 46800, 29798, 34436, 172180, 47593, 367],
    ["Large Blue Potion", 9900, 5249, 59400, 39368, 38026, 190130, 52153, 547],
    ["Crimson Flame Potion", 12600, 6776, 75600, 50820, 43179, 215895, 58914, 956],
    ["Silver Illusion Powder", 14400, 8094, 86400, 60705, 61202, 306010, 83276, 1539],
    ["Magic Catalyst", 16200, 9578, 97200, 71835, 68305, 341525, 0, 0],
    ["Heavenly Magic Powder", 18600, 11229, 111600, 84218, 79971, 399855, 0, 0],
  ] as const;

  const cls: Record<string, AlchemizeProduct> = AlchemizeProduct as any;
  for (let id = 1; id <= initial.length; ++id) {
    const [name, duration, cost, , , price, , wishPrice, exp] = initial[id - 1];
    const key = nameToPath(name).toUpperCase();
    cls[key] = new AlchemizeProduct(id, name, price, wishPrice, exp, duration, cost);
  }
})();
