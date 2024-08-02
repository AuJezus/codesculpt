import { BiCopyright, BiEnvelope, BiLocationPlus } from "react-icons/bi";
import Heading from "../heading";
import { Section, SectionParagraph } from "./section";

import LogoName from "../logo/logo-name";
import { BackgroundBeams } from "../ui/background-beams";
import ContactForm from "../contact-form";

function ContactSection() {
  return (
    <div className="relative border-t-2 py-4">
      <BackgroundBeams />
      <Section
        id="contact"
        className="relative mb-0 grid grid-cols-2 gap-x-16 p-12"
      >
        <div className="flex h-full flex-col justify-between">
          <div>
            <Heading as="h2" className="text-left">
              Let&apos;s talk
            </Heading>

            <SectionParagraph className="mb-0 text-left">
              Have a project in mind or just want to chat? We’re here for you!
              Reach out to the CodeSculpt team and let’s talk about how we can
              turn your ideas into an amazing website.
            </SectionParagraph>
          </div>

          <div className="text-[450px]">
            <LogoName />
          </div>

          <div className="flex flex-col gap-4 text-lg text-muted-foreground">
            <p className="flex items-center gap-2">
              <BiEnvelope /> augustasv16@gmail.com
            </p>

            <p className="flex items-center gap-2">
              <BiLocationPlus /> Vilnius, Lithuania
            </p>

            <p className="flex items-center gap-2">
              <BiCopyright /> Copyright 2024 - CodeSculpt
            </p>
          </div>
        </div>

        <ContactForm />
      </Section>
    </div>
  );
}

export default ContactSection;
