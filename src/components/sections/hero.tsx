import { FaArrowDown } from "react-icons/fa6";
import CircleParagraph from "../circle-paragraph";
import Logo from "../logo/logo";
import { Vortex } from "../ui/vortex";

function HeroSection() {
  return (
    <Vortex
      backgroundColor="transparent"
      rangeY={400}
      particleCount={100}
      baseHue={220}
      containerClassName="overflow-x-hidden overflow-y-visible"
    >
      <section className="relative z-0 flex h-screen flex-col items-center justify-center gap-24">
        <h1 className="flex w-full max-w-[1200px] flex-col gap-5 font-secondary text-9xl font-black uppercase">
          <span className="flex gap-6">
            Code that <Logo />
          </span>
          <span className="text-stroke self-end text-transparent">
            sculpts your
          </span>
          <span>online success</span>
        </h1>

        <div className="flex w-full max-w-[950px] items-center justify-between gap-[125px]">
          <a className="group relative flex h-[140px] w-[140px] flex-shrink-0 items-center justify-center rounded-full border-4 border-primary bg-primary transition-transform hover:scale-110">
            <CircleParagraph className="absolute inset-0 h-full w-full animate-[spin_25s_linear_infinite] text-lg font-bold uppercase text-primary-foreground">
              Contact Us Contact Us
            </CircleParagraph>

            <div className="z-10 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-primary-foreground">
              <FaArrowDown className="-rotate-[135deg] text-2xl text-primary transition-transform group-hover:rotate-0" />
            </div>
          </a>

          <p className="text-lg text-muted-foreground">
            Partner with CodeSculpt to bring your vision to life. We deliver
            user-friendly, visually stunning websites that set you apart.
            Experience the difference of a website crafted with precision and
            passion, designed to drive engagement and growth for your business.
          </p>
        </div>
      </section>
    </Vortex>
  );
}

export default HeroSection;
