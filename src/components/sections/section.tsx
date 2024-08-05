import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export const Section = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn(
      "mx-auto mb-36 max-w-[1200px] px-2 sm:px-3 xl:px-0",
      className,
    )}
    {...props}
  >
    {children}
  </section>
));
Section.displayName = "Section";

export const SectionParagraph = forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(
        "mx-auto mb-12 max-w-5xl text-center text-sm text-muted-foreground sm:text-base md:text-lg",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
});

SectionParagraph.displayName = "SectionParagraph";
