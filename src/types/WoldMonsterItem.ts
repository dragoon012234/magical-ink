import { nameToPath } from "../utils";
import { Resource } from "./Resource";
import { Skill } from "./Skill";

export class WorldMonsterItem extends Resource {
  constructor(id: number, name: string, price: number, wishPrice: number, wishExp: number) {
    super(id, name, price, wishPrice, wishExp, Skill.BANISH);
  }

  static readonly MILK: WorldMonsterItem;
  static readonly EGG: WorldMonsterItem;
  static readonly HONEY: WorldMonsterItem;
  static readonly GELATIN: WorldMonsterItem;
  static readonly MUSHROOM: WorldMonsterItem;
  static readonly WHITE_FUR: WorldMonsterItem;

  static all(): WorldMonsterItem[] {
    return [
      WorldMonsterItem.MILK,
      WorldMonsterItem.EGG,
      WorldMonsterItem.HONEY,
      WorldMonsterItem.GELATIN,
      WorldMonsterItem.MUSHROOM,
      WorldMonsterItem.WHITE_FUR,
    ];
  }
}

(() => {
  const initial = [
    ["Milk", 187, 373, 9],
    ["Egg", 489, 852, 19],
    ["Honey", 1111, 1738, 37],
    ["Gelatin", 1605, 2422, 49],
    ["Mushroom", 8679, 11886, 312],
    ["White Fur", 14156, 19223, 976],
  ] as const;

  const cls: Record<string, WorldMonsterItem> = WorldMonsterItem as any;
  for (let id = 1; id <= initial.length; ++id) {
    const [name, price, wishPrice, exp] = initial[id - 1];
    const key = nameToPath(name).toUpperCase();
    cls[key] = new WorldMonsterItem(id, name, price, wishPrice, exp);
  }
})();
