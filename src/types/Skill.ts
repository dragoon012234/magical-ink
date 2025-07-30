import { nameToPath } from "../utils";
import { BasicObject } from "./BasicObject";

export class Skill extends BasicObject {
  supportReduceTime: boolean = true;
  currentReduceTime: number = 0;

  get img(): string {
    return `${process.env.PUBLIC_URL}/imgs/skills/${this.filename}.png`;
  }

  static readonly NATURE_CIRCULATION: Skill;
  static readonly BANISH: Skill;
  static readonly COMBAT: Skill;

  static readonly FARM: Skill;
  static readonly TREE_FARM: Skill;

  static readonly COOKING: Skill;
  static readonly ALCHEMIZE: Skill;
  static readonly MATERIALS_AND_TOOLS_PRODUCTION: Skill;
  static readonly ORE_GENERATION: Skill;
  static readonly FURNITURE_PRODUCTION: Skill;
  static readonly TAILORING: Skill;
  static readonly ENGRAVING: Skill;
}

(() => {
  const initial = [
    ["Nature Circulation"],
    ["Banish"],
    ["Combat"],
    ["Farm"],
    ["Tree Farm"],
    ["Cooking"],
    ["Alchemize"],
    ["Materials and Tools Production"],
    ["Ore Generation"],
    ["Furniture Production"],
    ["Tailoring"],
    ["Engraving"],
  ] as const;

  const cls: Record<string, Skill> = Skill as any;
  for (let id = 1; id <= initial.length; ++id) {
    const [name] = initial[id - 1];
    const key = nameToPath(name).toUpperCase();
    cls[key] = new Skill(id, name);
  }
})();
