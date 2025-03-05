import { nameToPath } from "../utils";

export class BasicObject {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  get filename(): string {
    return `i${this.id}_${nameToPath(this.name)}`;
  }
}
