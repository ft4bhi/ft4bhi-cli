import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "./cn";

// Define base styles and variants for the button
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-blue-500 text-white hover:bg-blue-600",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        ghost: "bg-transparent hover:bg-gray-100",
        link: "text-blue-500 underline hover:text-blue-600",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 py-1",
        lg: "h-12 px-6 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Create a forwardRef component without TypeScript types
const Button = React.forwardRef((props, ref) => {
  const { variant, size, className, ...rest } = props;
  return (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...rest}
    />
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
