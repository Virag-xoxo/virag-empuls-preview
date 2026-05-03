import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:   "bg-blue-200 text-white hover:bg-blue-300",
        secondary: "bg-light-100 text-dark-300 border border-light-300 hover:bg-light-200",
        outline:   "border border-light-300 bg-white text-dark-300 hover:bg-light-100",
        ghost:     "text-dark-200 hover:bg-light-100 hover:text-dark-300",
        link:      "text-blue-200 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm:      "h-8 rounded-md px-3 text-xs",
        lg:      "h-12 rounded-xl px-7 text-base",
        icon:    "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
