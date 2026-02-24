"use client";

import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-secondary font-600 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-navy)] text-white rounded-[32px] hover:bg-[var(--color-blue-accent)] hover:text-[var(--color-navy)] active:scale-[0.98]",
        secondary:
          "bg-transparent text-[var(--color-navy)] border border-[var(--color-navy)] rounded-[16px] hover:bg-[var(--color-blue-accent)] hover:text-[var(--color-navy)] hover:border-[var(--color-blue-accent)] active:scale-[0.98]",
        ghost:
          "bg-transparent text-[var(--color-navy)] hover:bg-[var(--color-beige)] rounded-[16px]",
        outline:
          "bg-white text-[var(--color-navy)] border border-[var(--color-border)] rounded-[16px] hover:border-[var(--color-navy)]",
        beige:
          "bg-[var(--color-beige)] !text-[var(--color-navy)] rounded-[32px] hover:bg-[var(--color-beige-dark)] active:scale-[0.98]",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
        xl: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
      shadow: {
        true: "[box-shadow:rgba(0,0,0,0.07)_0px_36px_67px_0px,rgba(0,0,0,0.05)_0px_13.141px_24.456px_0px,rgba(0,0,0,0.04)_0px_6.38px_11.873px_0px,rgba(0,0,0,0.03)_0px_3.127px_5.82px_0px,rgba(0,0,0,0.02)_0px_1.237px_2.301px_0px]",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      shadow: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shadow, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, shadow, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
