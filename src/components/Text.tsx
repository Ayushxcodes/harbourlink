import { HTMLAttributes } from "react";
import clsx from "clsx";

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;  // Allows for custom class names
}

const Text: React.FC<TextProps> = ({ className, children, ...otherProps }) => {
  // Base styles: Always black text and medium font weight
  const baseStyles = 'text-black font-medium';

  return (
    <span
      className={clsx(baseStyles, className)} // Apply base styles + any custom className
      {...otherProps}
    >
      {children}
    </span>
  );
};

export default Text;