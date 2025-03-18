import { nameToPath } from "../utils";
import { Resource } from "./Resource";
import { Skill } from "./Skill";

export class MonsterItem extends Resource {
  constructor(id: number, name: string, price: number, wishPrice: number) {
    super(id, name, price, wishPrice, Skill.COMBAT);
  }

  static readonly FROSTY_ICE_GRASS: MonsterItem;
  static readonly COLD_CRYTAL: MonsterItem;
  static readonly AURORA_MUSHROOM: MonsterItem;
  static readonly CACTUS_THORN: MonsterItem;
  static readonly PALM_FRUIT: MonsterItem;
  static readonly SUNLIGHT_GOLD_DUST: MonsterItem;
  static readonly GRAVE_ROBBERS_SACK: MonsterItem;
  static readonly MANA_PERMEATED_THORN: MonsterItem;
  static readonly GOLDEN_FRUIT: MonsterItem;
  static readonly ANCIENT_GOLD_COIN: MonsterItem;

  static all(): MonsterItem[] {
    return [
      MonsterItem.FROSTY_ICE_GRASS,
      MonsterItem.COLD_CRYTAL,
      MonsterItem.AURORA_MUSHROOM,
      MonsterItem.CACTUS_THORN,
      MonsterItem.PALM_FRUIT,
      MonsterItem.SUNLIGHT_GOLD_DUST,
      MonsterItem.GRAVE_ROBBERS_SACK,
      MonsterItem.MANA_PERMEATED_THORN,
      MonsterItem.GOLDEN_FRUIT,
      MonsterItem.ANCIENT_GOLD_COIN,
    ];
  }
}

(() => {
  const initial = [
    ["Frosty Ice Grass", 226, 437],
    ["Cold Crytal", 272, 511],
    ["Aurora Mushroom", 753, 1235],
    ["Cactus Thorn", 1605, 2422],
    ["Palm Fruit", 1802, 2692],
    ["Sunlight Gold Dust", 2145, 3149],
    ["Grave Robber's Sack", 2145, 3149],
    ["Mana-Permeated Thorn", 3741, 5292],
    ["Golden Fruit", 5406, 7510],
    ["Ancient Gold Coin", 6214, 8589],
  ] as const;

  const cls: Record<string, MonsterItem> = MonsterItem as any;
  for (let id = 1; id <= initial.length; ++id) {
    const [name, price, wishPrice] = initial[id - 1];
    const key = nameToPath(name).toUpperCase();
    cls[key] = new MonsterItem(id, name, price, wishPrice);
  }
})();
