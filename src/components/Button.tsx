import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import clsx from "clsx";

const classes = cva(
  'border h-12 rounded-full px-6 font-medium',
  {
    variants: {
      variant: {
        primary: 'bg-blue-400 text-white border-blue-700 hover:bg-blue-500 active:bg-blue-600 transition-colors duration-200',
        secondary: 'border-black/30 text-black bg-transparent',
      },
      size:{
        sm:"h-10",
      }
    },
  }
);

export default function Button(
  props: { variant: "primary" | "secondary";
    size?:"sm";
   } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { variant, className,size, ...otherProps } = props;

  return (
    <button
      className={clsx(classes({ variant }), className,size)}
      {...otherProps}
    />
  );
}
