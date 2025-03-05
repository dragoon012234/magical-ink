import { Resource } from "./Resource";
import { Skill } from "./Skill";

export class NatureItem extends Resource {
  constructor(id: number, name: string, price: number, wishPrice: number) {
    super(id, name, price, wishPrice, Skill.NATURE_CIRCULATION);
  }

  static readonly FROSTY_ICE_GRASS = new NatureItem(1, "Frosty Ice Grass", 226, 437);
  static readonly COLD_CRYTAL = new NatureItem(2, "Cold Crytal", 272, 511);
  static readonly AURORA_MUSHROOM = new NatureItem(3, "Aurora Mushroom", 753, 1235);
  static readonly CACTUS_THORN = new NatureItem(4, "Cactus Thorn", 1605, 2422);
  static readonly PALM_FRUIT = new NatureItem(5, "Palm Fruit", 1802, 2692);
  static readonly SUNLIGHT_GOLD_DUST = new NatureItem(6, "Sunlight Gold Dust", 2145, 3149);
  static readonly GRAVE_ROBBERS_SACK = new NatureItem(7, "Grave Robber's Sack", 2145, 3149);
  static readonly MANA_PERMEATED_THORN = new NatureItem(8, "Mana-Permeated Thorn", 3741, 5292);
  static readonly GOLDEN_FRUIT = new NatureItem(9, "Golden Fruit", 5406, 7510);
  static readonly ANCIENT_GOLD_COIN = new NatureItem(10, "Ancient Gold Coin", 6214, 8589);
}
