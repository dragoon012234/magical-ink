import { LGraphNode, LiteGraph } from "litegraph.js";

import type { Product, Resource } from "../types";

export class ProductNode extends LGraphNode {
  _info!: Product | Resource;
  _image!: HTMLImageElement;
  _imageLoaded = false;

  constructor(title?: string) {
    super(title);

    this.resizable = false;
    this.flags.collapsed = true;
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

  set info(v: Product | Resource) {
    this._info = v;
    this.title = v.name;
    this.addOutput("", "number");
    const img = (this._image = new Image());
    img.src = v.img;
    img.onload = this._onImageLoaded.bind(this);
    if ((v as Product).ingredient)
      for (const { ingredient } of (v as Product).ingredient) {
        this.addInput(`${ingredient.name}`, "number");
      }

    this.addReadonlyWidget("Price", v.price.toString());
    this.addReadonlyWidget("Wish Price", v.wishPrice.toString());
    if ((v as Product).ingredient) {
      this.addTitleWidget("Production");
      this.addReadonlyWidget("Duration", (v as Product).duration.toString());
      this.addReadonlyWidget("Cost", (v as Product).cost.toString());
      this.addReadonlyWidget("Duration (x5)", (v as Product).durationx5.toString());
      this.addReadonlyWidget("Cost (x5)", (v as Product).costx5.toString());
      for (const { ingredient, count } of (v as Product).ingredient) {
        this.addReadonlyWidget(ingredient.name, count.toString());
      }
    }
    this.setSize(this.computeSize());
  }

  _onImageLoaded() {
    this._imageLoaded = true;
  }

  addReadonlyWidget(name: string, value: string) {
    this.addCustomWidget({
      name,
      value,
      draw(ctx, node, width, posY, height) {
        const H = height;
        const outline_color = "#666";
        const background_color = "#222";
        const text_color = "#DDD";
        const secondary_text_color = "#999";
        const margin = 15;
        const y = posY;
        const widget_width = width;

        ctx.strokeStyle = outline_color;
        ctx.fillStyle = background_color;
        ctx.beginPath();
        ctx.roundRect(margin, y, widget_width - margin * 2, H, [H * 0.5]);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = secondary_text_color;
        ctx.textAlign = "left";
        ctx.fillText(this.name, margin + 10, y + H * 0.7);

        ctx.fillStyle = text_color;
        ctx.textAlign = "right";
        ctx.fillText(value, widget_width - margin - 10, y + H * 0.7);
      },
      computeSize(width) {
        return [width, 20];
      },
    });
  }

  addTitleWidget(name: string) {
    this.addCustomWidget({
      name,
      value: "",
      draw(ctx, node, width, posY, height) {
        const H = height;
        const text_color = "#DDD";
        const margin = 15;
        const y = posY;

        ctx.fillStyle = text_color;
        ctx.textAlign = "left";
        ctx.fillText(this.name, margin, y + H * 0.7);
      },
      computeSize(width) {
        return [width, 20];
      },
    });
  }
}

LiteGraph.registerNodeType("magicalink/product", ProductNode);
