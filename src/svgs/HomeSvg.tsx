import { twMerge } from "tailwind-merge";

export function HomeSvg(props: SvgProps) {
  const { size = 24, className } = props;
  const _size = `${size}px`;
  return (
    <svg
      width={_size}
      height={_size}
      viewBox='2 2 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      stroke='currentColor'
      className={twMerge(className, "stroke-2")}
    >
      <path d='M5 12.76c0-1.358 0-2.037.274-2.634.275-.597.79-1.038 1.821-1.922l1-.857C9.96 5.75 10.89 4.95 12 4.95s2.041.799 3.905 2.396l1 .857c1.03.884 1.546 1.325 1.82 1.922.275.597.275 1.276.275 2.634V17c0 1.886 0 2.828-.586 3.414S16.886 21 15 21H9c-1.886 0-2.828 0-3.414-.586S5 18.886 5 17z' />
      <path d='M14.5 21v-5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v5' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}
