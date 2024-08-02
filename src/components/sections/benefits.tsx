import { BiCloud, BiCode, BiDesktop } from "react-icons/bi";
import { TextRevealCard } from "../ui/text-reveal-card";
import { SparklesCore } from "../ui/sparkles";
import { FaHandHolding, FaHeart } from "react-icons/fa6";
import { TechSkeleton, TechSkeletonContainer } from "../skeletons/tech";
import Heading from "../heading";
import { Section, SectionParagraph } from "./section";

function BenefitsSection() {
  return (
    <Section>
      <Heading as="h2">Why You&apos;ll Love CodeSculpt</Heading>
      <SectionParagraph>
        Partnering with CodeSculpt means getting the best in web development
        with none of the hassle. We&apos;re here to make your digital journey
        smooth, fun, and totally worth it. Here&apos;s why choosing us is a
        no-brainer:
      </SectionParagraph>

      <div className="grid auto-rows-[20rem] grid-cols-3 gap-4">
        <div className="relative col-span-2 h-full w-full overflow-hidden rounded-xl border to-background">
          <div className="relative h-full w-full">
            <TextRevealCard
              className="mx-auto w-[37rem] border-none"
              text="You know the business"
              revealText="We know the code"
            ></TextRevealCard>
          </div>

          <div className="pointer-events-none absolute bottom-5 left-10 right-10 h-[6.26rem]">
            <h3 className="mb-2 font-secondary text-3xl font-semibold">
              Expert team
            </h3>
            <p className="text-lg text-muted-foreground">
              Our team of pros is passionate about turning your ideas into
              reality.
            </p>
          </div>
        </div>

        <div className="group relative z-0 h-full w-full overflow-hidden rounded-xl border bg-gradient-to-b from-transparent from-60% to-background">
          <div className="relative -z-10 h-full w-full">
            <div className="absolute left-1/2 top-[30px] aspect-square w-[150%] -translate-x-1/2 rotate-[-23deg] rounded-full border-2 transition-transform duration-500 ease-in-out group-hover:rotate-0">
              <BiDesktop className="absolute left-1/2 top-0 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 bg-background p-1 text-muted-foreground transition-colors duration-500 group-hover:text-red-500" />
            </div>

            <div className="absolute left-1/2 top-[90px] aspect-square w-[150%] -translate-x-1/2 rotate-[2deg] rounded-full border-2 transition-transform duration-500 ease-in-out group-hover:rotate-0">
              <BiCode className="absolute left-1/2 top-0 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 bg-background p-1 text-muted-foreground transition-colors duration-500 group-hover:text-yellow-500" />
            </div>

            <div className="absolute left-1/2 top-[150px] aspect-square w-[150%] -translate-x-1/2 rotate-[25deg] rounded-full border-2 transition-transform duration-500 ease-in-out group-hover:rotate-0">
              <BiCloud className="absolute left-1/2 top-0 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 bg-background p-1 text-muted-foreground transition-colors duration-500 group-hover:text-green-500" />
            </div>
          </div>

          <div className="absolute bottom-5 left-10 right-10 h-[6.26rem]">
            <h3 className="mb-2 font-secondary text-3xl font-semibold">
              All in one
            </h3>
            <p className="text-lg text-muted-foreground">
              From design to production, we handle it all so you don&apos;t have
              to.
            </p>
          </div>
        </div>

        <div className="group relative z-0 h-full w-full overflow-hidden rounded-xl border bg-gradient-to-b from-transparent from-60% to-background">
          <div className="relative -z-10 h-full w-full text-muted-foreground">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={150}
              className="h-full w-full !opacity-0 duration-500 group-hover:!opacity-100"
              particleColor="#FFFFFF"
            />
            <FaHandHolding className="absolute bottom-12 left-1/2 -translate-x-1/2 text-9xl opacity-0 transition-all duration-500 group-hover:bottom-28 group-hover:opacity-100" />
            <FaHeart className="absolute bottom-32 left-1/2 -translate-x-1/2 scale-50 text-9xl transition-all duration-500 group-hover:bottom-44 group-hover:scale-100 group-hover:text-red-500" />
          </div>

          <div className="absolute bottom-5 left-10 right-10 h-[6.26rem]">
            <h3 className="mb-2 font-secondary text-3xl font-semibold">
              Long-term Support
            </h3>
            <p className="text-lg text-muted-foreground">
              We provide support after completion to keep your site running like
              a dream.
            </p>
          </div>
        </div>

        <div className="group relative col-span-2 h-full w-full overflow-hidden rounded-xl border bg-gradient-to-b from-transparent from-60% to-background">
          <div className="group relative h-full w-full text-muted-foreground">
            <TechSkeletonContainer className="-translate-y-5">
              <TechSkeleton />
            </TechSkeletonContainer>
          </div>

          <div className="absolute bottom-5 left-10 right-10 h-[6.26rem]">
            <h3 className="mb-2 font-secondary text-3xl font-semibold">
              Latest Tech
            </h3>
            <p className="text-lg text-muted-foreground">
              Leverage the power of the latest technology to keep your site
              fast, secure, and ahead of the curve.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default BenefitsSection;
