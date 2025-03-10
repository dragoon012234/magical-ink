import { LGraphNode, LiteGraph } from "litegraph.js";

import type { Skill } from "../types";

export class SkillNode extends LGraphNode {
  _info!: Skill;
  _image!: HTMLImageElement;
  _imageLoaded = false;

  constructor(title?: string) {
    super(title);
    this.resizable = false;
  }

  onDrawTitle(ctx: CanvasRenderingContext2D): void {
    if (this._imageLoaded && this._image) {
      const w = this._image.width;
      const h = this._image.height;
      let dx = 2;
      let dy = -28;
      let dH = 26;
      let dW = 26;
      if (w < h) {
        dW *= w / h;
        dx += (dH - dW) / 2;
      } else {
        dH *= h / w;
        dy += (dW - dH) / 2;
      }
      ctx.drawImage(this._image, dx, dy, dW, dH);
    }
  }

  set info(v: Skill) {
    this._info = v;
    this.title = v.name;
    const img = (this._image = new Image());
    img.src = v.img;
    img.onload = this._onImageLoaded.bind(this);

    this.addWidget("number", "Deduce", 0, undefined, {
      min: 0,
      max: 1,
      step: 0.001,
      precision: 3,
    });
    this.setSize(this.computeSize());
  }

  _onImageLoaded() {
    this._imageLoaded = true;
  }
}

LiteGraph.registerNodeType("magicalink/skill", SkillNode);
