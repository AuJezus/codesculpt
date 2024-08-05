import { FaArrowDown } from "react-icons/fa6";
import Logo from "../logo/logo";
import { Vortex } from "../ui/vortex";
import Heading from "../heading";
import { Section } from "./section";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

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

function HeroSection() {
  return (
    <Vortex
      backgroundColor="transparent"
      rangeY={400}
      particleCount={100}
      baseHue={220}
      containerClassName="overflow-x-hidden overflow-y-visible"
    >
      <Section className="relative z-0 mb-12 flex min-h-screen flex-col items-center justify-center gap-10 sm:gap-14 md:gap-24">
        <Heading
          as="h1"
          className="flex w-full max-w-[1200px] flex-col gap-2 text-center sm:text-left md:gap-5"
        >
          <span className="gap-2 sm:flex lg:gap-6">
            Code that <Logo className="hidden sm:block" />
          </span>
          <span className="lg:text-stroke-[4px] md:text-stroke-[3px] text-stroke-[1px] text-stroke-foreground text-transparent sm:self-end">
            sculpts your
          </span>
          <span>online success</span>
        </Heading>

        <div className="flex w-full max-w-[950px] flex-col-reverse items-center justify-between gap-10 sm:gap-14 md:flex-row md:gap-20 lg:gap-[125px]">
          <a className="group relative flex h-[120px] w-[120px] flex-shrink-0 items-center justify-center rounded-full border-4 border-primary bg-primary transition-transform hover:scale-110 md:h-[140px] md:w-[140px]">
            <CircleParagraph className="absolute inset-0 h-full w-full animate-[spin_25s_linear_infinite] font-bold uppercase text-primary-foreground md:text-lg">
              Contact Us Contact Us
            </CircleParagraph>

            <div className="z-10 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-primary-foreground md:h-[50px] md:w-[50px]">
              <FaArrowDown className="-rotate-[135deg] text-2xl text-primary transition-transform group-hover:rotate-0" />
            </div>
          </a>

          <p className="text-center text-sm text-muted-foreground sm:text-base md:text-left md:text-lg">
            Partner with CodeSculpt to bring your vision to life. We deliver
            user-friendly, visually stunning websites that set you apart.
            Experience the difference of a website crafted with precision and
            passion, designed to drive engagement and growth for your business.
          </p>
        </div>
      </Section>
    </Vortex>
  );
}

export default HeroSection;
