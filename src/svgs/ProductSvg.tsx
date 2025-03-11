export function ProductSvg(props: SvgProps) {
  const { size = 24, className } = props;
  const _size = `${size}px`;
  return (
    <svg
      width={_size}
      height={_size}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      stroke='currentColor'
      className={className}
    >
      <g fill='none' fillRule='evenodd' strokeWidth={1}>
        <polygon points='22 7 12 2 2 7 2 17 12 22 22 17' strokeLinejoin='round' strokeWidth={1.5} />
      </g>
      <g strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5}>
        <line x1={2} x2={12} y1={7} y2={12} />
        <line x1={12} x2={12} y1={22} y2={12} />
        <line x1={22} x2={12} y1={7} y2={12} />
        <line x1={17} x2={7} y1={4.5} y2={9.5} />
      </g>
    </svg>
  );
}
