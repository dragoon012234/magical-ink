import { BasicObject } from "./BasicObject";

export class Skill extends BasicObject {
  get img(): string {
    return `${process.env.PUBLIC_URL}/imgs/skills/${this.filename}.png`;
  }

  static readonly FARM = new Skill(1, "Farm");
  static readonly TREE_FARM = new Skill(2, "Tree Farm");
  static readonly COOKING = new Skill(3, "Cooking");
  static readonly ALCHEMIZE = new Skill(4, "Alchemize");
  static readonly MATERIALS_AND_TOOLS_PRODUCTION = new Skill(5, "Materials and Tools Production");
  static readonly ORE_GENERATION = new Skill(6, "Ore Generation");
  static readonly FURNITURE_PRODUCTION = new Skill(7, "Furniture Production");
}
