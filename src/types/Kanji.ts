export class Kanji {
  level: number;
  kanji: string;
  code: string;
  mean: string[];
  detail: string;
  stroke: number;
  kun: string[];
  on: string[];
  svg: KanjiSvg;
  constructor(obj: Record<string, any>) {
    this.level = obj.level;
    this.kanji = obj.kanji;
    this.code = obj.code;
    this.mean = obj.mean;
    this.detail = obj.detail;
    this.stroke = obj.stroke;
    this.kun = obj.kun;
    this.on = obj.on;
    this.svg = new KanjiSvg(obj.svg);
  }
}

export class KanjiSvg {
  info: G;
  constructor(obj: Record<string, any>) {
    this.info = new G(obj);
  }
  getPaths() {
    return this.info.getPaths();
  }
}

export class G {
  element?: string;
  original?: string;
  position?: string;
  children: (G | Path)[];
  constructor(obj: Record<string, any>) {
    if (obj.element) this.element = obj.element;
    if (obj.original) this.original = obj.original;
    if (obj.position) this.position = obj.position;
    this.children = obj.children.map((_obj: Record<string, any>) => (_obj.type === "g" ? new G(_obj) : new Path(_obj)));
  }
  getPaths(): Path[] {
    return this.children.flatMap((child) => (child instanceof G ? child.getPaths() : child));
  }
}

export class Path {
  d: string;
  order: number;
  x: number;
  y: number;
  constructor(obj: Record<string, any>) {
    this.d = obj.d;
    this.order = obj.order;
    this.x = obj.x;
    this.y = obj.y;
  }
}
