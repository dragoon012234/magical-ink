import { nameToPath } from "../utils";
import { Resource } from "./Resource";
import { Skill } from "./Skill";

export class NatureItem extends Resource {
  constructor(id: number, name: string, price: number, wishPrice: number, wishExp: number) {
    super(id, name, price, wishPrice, wishExp, Skill.NATURE_CIRCULATION);
  }

  static readonly PEBBLE: NatureItem;
  static readonly BRANCH: NatureItem;
  static readonly BOULDER: NatureItem;
  static readonly LOG: NatureItem;
  static readonly HERB: NatureItem;

  static all(): NatureItem[] {
    return [NatureItem.PEBBLE, NatureItem.BRANCH, NatureItem.BOULDER, NatureItem.LOG, NatureItem.HERB];
  }
}

(() => {
  const initial = [
    ["Pebble", 7, 22, 1],
    ["Branch", 7, 22, 1],
    ["Boulder", 7, 22, 1],
    ["Log", 7, 22, 1],
    ["Herb", 7, 22, 1],
  ] as const;

  const cls: Record<string, NatureItem> = NatureItem as any;
  for (let id = 1; id <= initial.length; ++id) {
    const [name, price, wishPrice, exp] = initial[id - 1];
    const key = nameToPath(name).toUpperCase();
    cls[key] = new NatureItem(id, name, price, wishPrice, exp);
  }
})();
