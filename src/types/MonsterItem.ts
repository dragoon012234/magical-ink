import { nameToPath } from "../utils";
import { Resource } from "./Resource";
import { Skill } from "./Skill";

export class MonsterItem extends Resource {
  constructor(id: number, name: string, price: number, wishPrice: number, wishExp: number) {
    super(id, name, price, wishPrice, wishExp, Skill.COMBAT);
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
  static readonly STARFRUIT: MonsterItem;
  static readonly MOSS: MonsterItem;
  static readonly TOTEM_PIECE: MonsterItem;

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
      MonsterItem.STARFRUIT,
      MonsterItem.MOSS,
      MonsterItem.TOTEM_PIECE,
    ];
  }
}

(() => {
  const initial = [
    ["Frosty Ice Grass", 226, 437, 10],
    ["Cold Crytal", 272, 511, 12],
    ["Aurora Mushroom", 753, 1235, 27],
    ["Cactus Thorn", 1605, 2422, 49],
    ["Palm Fruit", 1802, 2692, 54],
    ["Sunlight Gold Dust", 2145, 3149, 63],
    ["Grave Robber's Sack", 2145, 3149, 63],
    ["Mana-Permeated Thorn", 3741, 5292, 100],
    ["Golden Fruit", 5406, 7510, 138],
    ["Ancient Gold Coin", 6214, 8589, 156],
    ["Starfruit", 8078, 11079, 252],
    ["Moss", 9221, 12611, 366],
    ["Totem Piece", 12169, 16558, 687],
  ] as const;

  const cls: Record<string, MonsterItem> = MonsterItem as any;
  for (let id = 1; id <= initial.length; ++id) {
    const [name, price, wishPrice, exp] = initial[id - 1];
    const key = nameToPath(name).toUpperCase();
    cls[key] = new MonsterItem(id, name, price, wishPrice, exp);
  }
})();
