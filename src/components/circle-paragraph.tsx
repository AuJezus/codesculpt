import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const CircleParagraph = forwardRef(
  (
    props: React.HTMLAttributes<HTMLParagraphElement> & {
      children: string;
      initialRotation?: number;
    },
    ref: React.Ref<HTMLParagraphElement>,
  ) => {
    const string = props.children + " ";

    return (
      <p
        {...props}
        ref={ref}
        className={cn(
          "relative h-[150px] w-[150px] rounded-full text-center",
          props.className,
        )}
      >
        {string.split("").map((char, i) => (
          <span
            key={char + i}
            className="absolute left-0 top-0 inline-block h-full w-full transition-all"
            style={{
              transform: `rotate(${(360 / string.length) * i + (props.initialRotation ?? 0)}deg)`,
            }}
          >
            {char}
          </span>
        ))}
      </p>
    );
  },
);
CircleParagraph.displayName = "CircleParagraph";

export default CircleParagraph;
