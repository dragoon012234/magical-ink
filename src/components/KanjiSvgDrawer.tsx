import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { useEffect, useMemo, useRef } from "react";
import type { Ref, RefObject } from "react";

import type { KanjiSvg } from "../types/Kanji";

export type KanjiSvgDrawerRef = {
  /** Start animation drawing all strokes. */
  play(): void;
  /** Pause the current animation. */
  pause(): void;
  /** Continue current animation. */
  resume(): void;
  /** Stop the current animation and set the drawer to the undrawn state. */
  clear(): void;
  /** Finish drawing instantly. */
  complete(includeOrder: boolean): void;
  /** Draw the next stroke, returning a boolean value indicating whether it is complete or not. */
  next(): boolean;
};

type PrivateKanjiSvgDrawerRef = {
  currentAnimation?: gsap.core.Timeline;
  currentStroke: number;
  _clearAnimation(): void;
} & KanjiSvgDrawerRef;

type Props = {
  /** Auto start animation. Default is `true`. */
  autoplay?: boolean;
  kanji: KanjiSvg;
  strokeWidth?: number;
  ref?: Ref<KanjiSvgDrawerRef>;
} & SvgProps;

type Stroke = { path: SVGPathElement; text: SVGTextElement };

export default function KanjiSvgDrawer(props: Props) {
  const { autoplay = true, kanji, strokeWidth = 3, size = 128, className } = props;
  const _size = `${size}px`;

  const self = useRef<PrivateKanjiSvgDrawerRef>({} as any);
  useEffect(() => {
    if (props.ref) {
      if (typeof props.ref === "function") props.ref(self.current);
      else props.ref.current = self.current;
    }
  }, [props.ref]);

  const scopeRef = useRef<SVGSVGElement>(null as unknown as any);
  const ref = useRef<Stroke[]>([]);

  const [lines, texts] = useMemo(() => {
    const lines = [];
    const texts = [];
    const paths = kanji.getPaths();
    ref.current.length = 0;
    for (let i = 0; i < paths.length; ++i) {
      ref.current.push({} as unknown as any);
      const path = paths[i];
      const color = ColorPool.next();
      lines.push(
        <path
          key={`path_${i}`}
          ref={(ele) => {
            if (ele) ref.current[i].path = ele;
          }}
          d={path.d}
          stroke={color}
          style={{ strokeDasharray: "100% 0%" }}
        />,
      );
      texts.push(
        <text
          key={`text_${i}`}
          ref={(ele) => {
            if (ele) ref.current[i].text = ele;
          }}
          x={path.x}
          y={path.y}
          stroke={color}
          style={{ opacity: 0 }}
        >
          {path.order}
        </text>,
      );
    }
    return [lines, texts];
  }, [kanji]);

  useGSAP(
    () => {
      createController(self, ref);
      if (autoplay) self.current.play();
    },
    { scope: scopeRef, revertOnUpdate: true },
  );

  return (
    <svg
      ref={scopeRef}
      width={_size}
      height={_size}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 109 109'
      className={className}
    >
      <g fill='none' stroke='#000' strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round'>
        {lines}
      </g>
      <g fontSize={8}>{texts}</g>
    </svg>
  );
}

const ColorPool = {
  _list: [
    "#00FFFF",
    "#8A2BE2",
    "#A52A2A",
    "#D2691E",
    "#DC143C",
    "#006400",
    "#00008B",
    "#FF8C00",
    "#9400D3",
    "#228B22",
    "#FFD700",
    "#4B0082",
    "#800000",
    "#00FA9A",
    "#FF4500",
    "#008080",
  ],
  _curIndex: 0,
  next() {
    this._curIndex = (this._curIndex + 1) % this._list.length;
    return this._list[this._curIndex];
  },
};

function createController(controllerRef: RefObject<PrivateKanjiSvgDrawerRef>, strokesRef: RefObject<Stroke[]>) {
  const _: PrivateKanjiSvgDrawerRef = {
    currentAnimation: undefined,
    currentStroke: -1,

    play() {
      this.clear();

      const l = strokesRef.current.length;
      const timeline = gsap.timeline();
      for (let i = 0; i < l; ++i) {
        const { path, text } = strokesRef.current[i];
        timeline.add(
          gsap.fromTo(text, { opacity: 0 }, { opacity: 1, duration: 0.3 }).eventCallback("onStart", () => {
            this.currentStroke = i;
          }),
        );
        const lengthPath = DrawSVGPlugin.getLength(path);
        timeline.add(
          gsap
            .fromTo(path, { drawSVG: "0%" }, { drawSVG: "100%", duration: lengthPath / 100 })
            .eventCallback("onStart", () => {
              path.style.opacity = "1";
            }),
        );
      }

      this.currentAnimation = timeline;
      timeline.eventCallback("onComplete", () => this._clearAnimation());
    },

    pause() {
      if (this.currentAnimation) this.currentAnimation.pause();
    },

    resume() {
      if (this.currentAnimation) this.currentAnimation.resume();
    },

    clear() {
      if (this.currentAnimation) this.currentAnimation.kill();
      this.currentAnimation = undefined;
      this.currentStroke = -1;

      for (let i = 0; i < strokesRef.current.length; ++i) {
        const { path, text } = strokesRef.current[i];
        text.style.opacity = "0";
        path.style.opacity = "0";
        path.style.strokeDasharray = "0% 100%";
      }
    },

    complete(includeOrder: boolean) {
      if (this.currentAnimation) this.currentAnimation.kill();
      this.currentAnimation = undefined;
      this.currentStroke = strokesRef.current.length - 1;

      const textOpacity = includeOrder ? "1" : "0";
      for (let i = 0; i < strokesRef.current.length; ++i) {
        const { path, text } = strokesRef.current[i];
        text.style.opacity = textOpacity;
        path.style.opacity = "1";
        path.style.strokeDasharray = "100% 0%";
      }
    },

    next() {
      const l = strokesRef.current.length;
      // Skip if running animation
      if (this.currentAnimation) return this.currentStroke === l - 1;
      // Already done
      if (this.currentStroke === l - 1) return true;

      const timeline = gsap.timeline();
      const i = ++this.currentStroke;
      const { path, text } = strokesRef.current[i];
      timeline.add(gsap.fromTo(text, { opacity: 0 }, { opacity: 1, duration: 0.3 }));
      const lengthPath = DrawSVGPlugin.getLength(path);
      timeline.add(
        gsap
          .fromTo(path, { drawSVG: "0%" }, { drawSVG: "100%", duration: lengthPath / 100 })
          .eventCallback("onStart", () => {
            path.style.opacity = "1";
          }),
      );

      timeline.eventCallback("onComplete", () => this._clearAnimation());
      this.currentAnimation = timeline;

      return this.currentStroke === l - 1;
    },

    _clearAnimation() {
      this.currentAnimation = undefined;
    },
  };

  Object.assign(controllerRef.current, _);
}
