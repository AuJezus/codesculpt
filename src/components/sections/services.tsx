import {
  BiCart,
  BiCheese,
  BiCoffee,
  BiCreditCard,
  BiHeadphone,
  BiSpa,
  BiSushi,
} from "react-icons/bi";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { EvervaultCard } from "../ui/evervault-card";
import { Illustration } from "../ui/glowing-stars";
import WebpageSkeleton from "../skeletons/webpage";
import Heading from "../heading";
import { Section, SectionParagraph } from "./section";

function ServicesSection() {
  return (
    <Section id="services">
      <Heading as="h2">We take care of everything</Heading>
      <SectionParagraph>
        Need anything web-related? We&apos;ve got you covered! Our services and
        expertise can fulfill your every business need. From custom web design
        to responsive development, and from e-commerce solutions to SEO
        optimization, we ensure your online presence is powerful and effective.
      </SectionParagraph>

      <BentoGrid>
        <BentoGridItem
          header={
            <div className="group relative flex h-full w-full flex-col items-center justify-center text-muted-foreground bg-dot-white/15">
              <BiCart className="text-7xl transition-all group-hover:rotate-[12deg]" />

              <BiSushi className="absolute left-1/2 top-1/2 scale-0 text-2xl opacity-0 transition-all group-hover:left-[60%] group-hover:top-[85%] group-hover:rotate-[-32deg] group-hover:scale-100 group-hover:opacity-100" />
              <BiCoffee className="absolute left-1/2 top-1/2 scale-0 text-2xl opacity-0 transition-all group-hover:left-[12%] group-hover:top-[85%] group-hover:rotate-[22deg] group-hover:scale-100 group-hover:opacity-100" />
              <BiCheese className="absolute left-1/2 top-1/2 scale-0 text-2xl opacity-0 transition-all group-hover:left-[3%] group-hover:top-[13%] group-hover:rotate-[-27deg] group-hover:scale-100 group-hover:opacity-100" />
              <BiCreditCard className="absolute left-1/2 top-1/2 scale-0 text-2xl opacity-0 transition-all group-hover:left-[80%] group-hover:top-[5%] group-hover:rotate-[16deg] group-hover:scale-100 group-hover:opacity-100" />
              <BiSpa className="absolute left-1/2 top-1/2 scale-0 text-2xl opacity-0 transition-all group-hover:left-[87%] group-hover:top-[48%] group-hover:rotate-[-29deg] group-hover:scale-100 group-hover:opacity-100" />
              <BiHeadphone className="absolute left-1/2 top-1/2 scale-0 text-2xl opacity-0 transition-all group-hover:left-[30%] group-hover:top-[55%] group-hover:rotate-[37deg] group-hover:scale-100 group-hover:opacity-100" />
            </div>
          }
          title="eCommerce"
          description="Make your online shop next level. We offer reliable and fast solutions."
        />

        <BentoGridItem
          className="md:col-span-2"
          header={
            <div className="group relative h-full font-mono">
              <EvervaultCard>
                <span className="text-rose-700">{"<div> "}</span>
                <span className="text-muted-foreground transition-colors group-hover:text-foreground">
                  Hello world!
                </span>
                <span className="text-rose-700">{" </div>"}</span>
              </EvervaultCard>
            </div>
          }
          title="Web development"
          description="At CodeSculpt, we don’t just build websites, we work a little magic! We’ve got the skills to make your digital dreams come true."
        />

        <BentoGridItem
          className="md:col-span-2"
          header={<WebpageSkeleton />}
          title="UI/UX Design"
          description="Our designs are user-centric, reflecting your brand’s identity while ensuring seamless and engaging interactions."
        />

        <BentoGridItem
          header={
            <div className="h-full">
              <Illustration />
            </div>
          }
          title="Custom Solutions"
          description="Have an idea for an uncommon feature or a system? That's the thing that excites us."
        />
      </BentoGrid>
    </Section>
  );
}

export default ServicesSection;
