import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

const levels = {
  1: "font-black uppercase text-5xl sm:text-7xl md:text-8xl lg:text-9xl",
  2: "mb-4 md:text-6xl text-5xl font-semibold text-center",
};

const headingVariants = cva("font-secondary", {
  variants: {
    level: levels,
  },
});

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as: `h${keyof typeof levels}`;
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, className, as = "h2", ...props }, ref) => {
    const HeadingEl = as;
    const level = Number(as[1]) as keyof typeof levels;

    return (
      <HeadingEl
        ref={ref}
        className={cn(headingVariants({ level }), className)}
        {...props}
      >
        {children}
      </HeadingEl>
    );
  },
);
Heading.displayName = "Heading";

export default Heading;
