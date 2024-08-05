import { BiCopyright, BiEnvelope, BiMap } from "react-icons/bi";
import Heading from "../heading";
import { Section, SectionParagraph } from "./section";

import LogoName from "../logo/logo-name";
import { BackgroundBeams } from "../ui/background-beams";
import ContactForm from "../contact-form";

function ContactSection() {
  return (
    <div className="relative border-t-2 py-4">
      <BackgroundBeams className="hidden md:block" />
      <Section
        id="contact"
        className="relative !mb-0 grid grid-cols-1 gap-x-16 py-4 md:grid-cols-2 lg:p-12 xl:p-12"
      >
        <div className="order-1">
          <Heading as="h2" className="text-left">
            Let&apos;s talk
          </Heading>

          <SectionParagraph className="mb-4 text-left md:mb-0">
            Have a project in mind or just want to chat? We’re here for you!
            Reach out to the CodeSculpt team and let’s talk about how we can
            turn your ideas into an amazing website.
          </SectionParagraph>
        </div>

        <LogoName className="order-3 mx-auto h-full w-full pb-8 sm:w-2/3 md:mx-0 md:w-full md:pb-0 lg:w-[450px]" />

        <div className="order-4 flex flex-wrap gap-x-6 gap-y-4 text-lg text-muted-foreground sm:justify-around md:flex-col md:justify-end md:gap-4">
          <a
            href="mailto:info@codesculpt.org"
            className="flex items-center gap-2"
          >
            <BiEnvelope /> info@codesculpt.org
          </a>

          <p className="flex items-center gap-2">
            <BiMap /> Vilnius, Lithuania
          </p>

          <p className="flex items-center gap-2">
            <BiCopyright /> Copyright 2024 - CodeSculpt
          </p>
        </div>

        <ContactForm className="order-2 row-span-3 mb-14 md:mb-0" />
      </Section>
    </div>
  );
}

export default ContactSection;
