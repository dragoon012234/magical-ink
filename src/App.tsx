import { LGraph, LGraphCanvas } from "litegraph.js";
import { useEffect, useRef } from "react";

import { items, skills } from "./types";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(undefined as any);
  const graphRef = useRef<LGraph>(undefined as any);
  const graphCanvasRef = useRef<LGraphCanvas>(undefined as any);

  useEffect(() => {
    const graph = (graphRef.current = new LGraph());
    const canvas = (graphCanvasRef.current = new LGraphCanvas(canvasRef.current, graph));
    canvas.allow_reconnect_links = false;
    canvas.resize();

    for (const skill of skills) graph.add(skill.node);
    for (const item of items) graph.add(item.node);

    graph.start();
  }, []);

  return <canvas ref={canvasRef} className='absolute-fill' />;
}

export default App;
