type Props = {
  /**
   * 2 element array, like [width, height]
   * @default [200, 200]
   */
  size?: [number, number];
  /**
   * 4 element array, defining the curve control in normalization.
   * @see {@link https://cubic-bezier.com/|Cubic Bezier}
   * @default [0.4, 0, 1, 0.6], // easeIn
   */
  value?: [number, number, number, number];
  strokeWidth?: number;
} & Pick<SvgProps, "className">;

const defaultProps: Required<Props> = {
  size: [200, 200],
  strokeWidth: 2,
  value: [0.4, 0, 1, 0.6], // easeIn
  className: "stroke-black",
};

export function BezierCurve(props: Props) {
  const {
    value = defaultProps.value,
    size = defaultProps.size,
    strokeWidth = defaultProps.strokeWidth,
    className = defaultProps.className,
  } = props;
  const [width, height] = size;
  const { startCoordinate, endCoordinate, startBezierHandle, endBezierHandle } = bezierCurveParamsFrom(size, value);

  const svgWidth = width + strokeWidth * 2;
  const svgHeight = height + strokeWidth * 2;

  return (
    <svg className={className} fill='none' width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
      <g transform={`translate(${strokeWidth}, ${strokeWidth})`}>
        <path
          strokeWidth={strokeWidth}
          strokeLinecap='round'
          d={`M${startCoordinate} C${startBezierHandle} ${endBezierHandle} ${endCoordinate}`}
        />
      </g>
    </svg>
  );
}

function bezierCurveParamsFrom(size: [number, number], value: [number, number, number, number]) {
  const [width, height] = size;

  const startCoordinate = [0, height];
  const endCoordinate = [width, 0];
  const startBezierHandle = [width * value[0], height * (1 - value[1])];
  const endBezierHandle = [width * value[2], height * (1 - value[3])];

  return {
    startCoordinate,
    endCoordinate,
    startBezierHandle,
    endBezierHandle,
  };
}
