import { cva } from "class-variance-authority";

const image = cva(["object-contain", "w-full", "h-full"], {
  variants: {
    radius: {
      none: ["rounded-none"],
      sm: ["rounded-sm"],
      base: ["rounded"],
      md: ["rounded-md"],
      lg: ["rounded-lg"],
      full: ["rounded-full"],
    },
  },
});

const avatarStyles = {
  image,
};

export { avatarStyles };
