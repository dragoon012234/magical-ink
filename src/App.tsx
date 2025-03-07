import { LGraph, LGraphCanvas, LiteGraph } from "litegraph.js";
import { useEffect, useRef } from "react";

import type { ProductNode } from "./litegraph";
import { CookingProduct, FarmProduct } from "./types";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(undefined as any);
  const graphRef = useRef<LGraph>(undefined as any);
  const graphCanvasRef = useRef<LGraphCanvas>(undefined as any);

  useEffect(() => {
    const graph = (graphRef.current = new LGraph());
    const canvas = (graphCanvasRef.current = new LGraphCanvas(canvasRef.current, graph));
    canvas.allow_reconnect_links = false;
    canvas.resize();

    const wheat = LiteGraph.createNode("magicalink/product", "", { info: FarmProduct.WHEAT }) as ProductNode;
    wheat.pos = [200, 200];
    graph.add(wheat);

    const ryeBread = LiteGraph.createNode("magicalink/product", "", { info: CookingProduct.RYE_BREAD }) as ProductNode;
    ryeBread.pos = [400, 300];
    wheat.connect(0, ryeBread, wheat._info.name);
    graph.add(ryeBread);

    graph.start();
  }, []);

  return <canvas ref={canvasRef} className='absolute-fill' />;
}

export default App;
