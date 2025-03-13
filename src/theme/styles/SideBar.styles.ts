import { cva } from "class-variance-authority";

const base = cva(
  [
    "antialiased",
    "transition-width",
    "ease-in-out",
    "duration-300",
    "flex",
    "flex-col",
    "fixed",
    "top-0",
    "left-0",
    "bottom-0",
    "z-10",
  ],
  {
    variants: {
      color: {
        white: ["bg-white", "text-gray-700", "border-r", "border-gray-100", "shadow-gray-300"],
        gray: ["bg-gray-50", "text-gray-800", "border-r", "border-gray-200", "shadow-gray-300"],
        dark: ["bg-gray-900", "text-gray-200", "shadow-gray-950"],
        slate: ["bg-slate-900", "text-slate-200", "shadow-slate-950"],
        zinc: ["bg-zinc-900", "text-zinc-200", "shadow-zinc-950"],
      },
      shadow: {
        none: ["shadow-none"],
        sm: ["shadow-sm"],
        base: ["shadow"],
        md: ["shadow-md"],
        lg: ["shadow-lg"],
        xl: ["shadow-xl"],
      },
      expanded: {
        true: ["md:min-w-[16rem]"],
        false: [],
      },
      hovered: {
        true: ["md:min-w-[16rem]"],
        false: [],
      },
      mobile: {
        true: ["w-[16rem]", "overflow-y-auto", "md:overflow-y-visible"],
        false: ["w-0"],
      },
    },
    compoundVariants: [
      {
        expanded: false,
        hovered: false,
        className: ["md:min-w-[4.5rem]"],
      },
    ],
  },
);

const sidebarStyles = {
  base,
};

export { sidebarStyles };
