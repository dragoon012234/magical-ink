import { LGraph, LGraphCanvas, LGraphNode, LiteGraph } from "litegraph.js";
import { useEffect, useRef } from "react";

import { FarmProduct } from "./types";
import type { Product } from "./types/Product";

class ProductNode extends LGraphNode {
  _info!: Product;
  _image!: HTMLImageElement;

  constructor(title?: string) {
    super(title);

    this.resizable = false;
  }

  onDrawForeground(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {}

  set info(v: Product) {
    this._info = v;
    this.title = v.name;
    this.addOutput("", "number");
    this._image = new Image();
  }
}

LiteGraph.registerNodeType("magicalink/product", ProductNode);

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const graphRef = useRef(new LGraph());
  const graphCanvasRef = useRef<LGraphCanvas>(null);

  useEffect(() => {
    const graph = graphRef.current;
    // eslint-disable-next-line no-multi-assign
    const canvas = (graphCanvasRef.current = new LGraphCanvas(canvasRef.current!, graph));
    canvas.allow_reconnect_links = false;
    canvas.resize();

    const wheat = LiteGraph.createNode("magicalink/product", "", { info: FarmProduct.WHEAT });
    wheat.pos = [200, 200];
    graph.add(wheat);

    graph.start();
  }, []);

  return <canvas ref={canvasRef} className='absolute-fill' />;
}

export default App;
