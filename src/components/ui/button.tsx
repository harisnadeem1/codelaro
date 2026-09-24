import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `
    group inline-flex items-center justify-center gap-2
    whitespace-nowrap rounded-md text-sm font-medium
    transition-colors
    focus-visible:outline-none
    focus-visible:ring-1
    focus-visible:ring-ring
    disabled:pointer-events-none
    disabled:opacity-50
    [&_svg]:pointer-events-none
    [&_svg]:size-4
    [&_svg]:shrink-0
  `,
  {
    variants: {
      variant: {
        // Existing variants — unchanged
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",

        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",

        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",

        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",

        ghost:
          "hover:bg-accent hover:text-accent-foreground",

        link:
          "text-primary underline-offset-4 hover:underline",

        // Codelaro brand variants
        brand: `
          rounded-lg
          bg-brand text-white
          font-display font-semibold
          shadow-lg shadow-brand/20
          transition-all duration-300

          hover:-translate-y-0.5
          hover:bg-brand-600
          hover:shadow-brand/30

          active:translate-y-0
          active:scale-[0.98]
        `,

        brandOutline: `
          rounded-xl
          border border-slate-200/80
          bg-white text-navy
          font-display font-semibold
          shadow-sm
          transition-all duration-300

          hover:border-slate-300
          hover:bg-slate-50
        `,

        brandText: `
          rounded-none
          bg-transparent
          px-0
          text-navy
          font-display font-semibold
          shadow-none
          transition-colors duration-300

          hover:bg-transparent
          hover:text-brand
        `,
      },

      size: {
        // Existing sizes — unchanged
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",

        // Codelaro sizes
        brandSm: "h-10 px-4 text-sm",
        brandMd: "h-11 px-5 text-base",
        brandLg: "h-12 px-7 text-base",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;

  icon?: LucideIcon | null;

  iconPosition?: "left" | "right";

  animateIcon?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      icon: Icon,
      iconPosition = "right",
      animateIcon = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const isBrandText = variant === "brandText";

    const renderIcon = () => {
      if (!Icon) return null;

      const iconElement = (
        <Icon
          aria-hidden="true"
          strokeWidth={2}
          className={cn(
            "h-4 w-4 shrink-0 transition-transform duration-300",

            animateIcon && [
              "group-hover:translate-x-0.5",
              "group-hover:-translate-y-0.5",
              "motion-reduce:transform-none",
            ],

            variant === "brandOutline" &&
              "group-hover:text-brand"
          )}
        />
      );

      if (!isBrandText) {
        return iconElement;
      }

      return (
        <span
          className="
            grid h-10 w-10 shrink-0
            place-items-center
            rounded-full
            border border-slate-300
            text-navy
            transition-all duration-300

            group-hover:border-brand
            group-hover:bg-brand
            group-hover:text-white
          "
        >
          {iconElement}
        </span>
      );
    };

    const content = (
      <>
        {Icon && iconPosition === "left" && renderIcon()}

        <span>{children}</span>

        {Icon && iconPosition === "right" && renderIcon()}
      </>
    );

    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            className,
          })
        )}
        ref={ref}
        {...props}
      >
        {content}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };