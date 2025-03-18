import { nameToPath } from "../utils";
import { Resource } from "./Resource";
import { Skill } from "./Skill";

export class WorldMonsterItem extends Resource {
  constructor(id: number, name: string, price: number, wishPrice: number) {
    super(id, name, price, wishPrice, Skill.BANISH);
  }

  static readonly MILK: WorldMonsterItem;
  static readonly EGG: WorldMonsterItem;
  static readonly HONEY: WorldMonsterItem;
  static readonly GELATIN: WorldMonsterItem;

  static all(): WorldMonsterItem[] {
    return [WorldMonsterItem.MILK, WorldMonsterItem.EGG, WorldMonsterItem.HONEY, WorldMonsterItem.GELATIN];
  }
}

(() => {
  const initial = [
    ["Milk", 187, 373],
    ["Egg", 489, 852],
    ["Honey", 1111, 1738],
    ["Gelatin", 1605, 2422],
  ] as const;

  const cls: Record<string, WorldMonsterItem> = WorldMonsterItem as any;
  for (let id = 1; id <= initial.length; ++id) {
    const [name, price, wishPrice] = initial[id - 1];
    const key = nameToPath(name).toUpperCase();
    cls[key] = new WorldMonsterItem(id, name, price, wishPrice);
  }
})();
