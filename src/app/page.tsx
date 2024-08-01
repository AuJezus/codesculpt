"use client";

import CircleParagraph from "@/components/circle-paragraph";
import Logo from "@/components/logo/logo";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Vortex } from "@/components/ui/vortex";
import { FaArrowDown } from "react-icons/fa6";
import { motion } from "framer-motion";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { Illustration } from "@/components/ui/glowing-stars";
import { useState } from "react";
import {
  BiCart,
  BiCheese,
  BiCoffee,
  BiCreditCard,
  BiHeadphone,
  BiSpa,
  BiSushi,
} from "react-icons/bi";
import dynamic from "next/dynamic";

const globeConfig = {
  pointSize: 4,
  globeColor: "#3a0657",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#3a0657",
  emissiveIntensity: 0.2,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#38bdf8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};
const colors = ["#7C3AED", "#976de0", "#6366f1"];
const sampleArcs = [
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 1,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -1.303396,
    endLng: 36.852443,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 2,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 2,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 2,
    startLat: -15.785493,
    startLng: -47.909029,
    endLat: 36.162809,
    endLng: -115.119411,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 3,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 3,
    startLat: 21.3099,
    startLng: -157.8581,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 3,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 4,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 4,
    startLat: -34.6037,
    startLng: -58.3816,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 4,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 5,
    startLat: 14.5995,
    startLng: 120.9842,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 5,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -33.8688,
    endLng: 151.2093,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 5,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 6,
    startLat: -15.432563,
    startLng: 28.315853,
    endLat: 1.094136,
    endLng: -63.34546,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 6,
    startLat: 37.5665,
    startLng: 126.978,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 6,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 7,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 7,
    startLat: 48.8566,
    startLng: -2.3522,
    endLat: 52.52,
    endLng: 13.405,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 7,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 8,
    startLat: -8.833221,
    startLng: 13.264837,
    endLat: -33.936138,
    endLng: 18.436529,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 8,
    startLat: 49.2827,
    startLng: -123.1207,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 8,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 9,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 9,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 9,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 10,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: 28.6139,
    endLng: 77.209,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 10,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 10,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 11,
    startLat: 41.9028,
    startLng: 12.4964,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 11,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 11,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 12,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 12,
    startLat: 35.6762,
    startLng: 139.6503,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 12,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 13,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 13,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 13,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
  {
    order: 14,
    startLat: -33.936138,
    startLng: 18.436529,
    endLat: 21.395643,
    endLng: 39.883798,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]!,
  },
];

const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  {
    ssr: false,
  },
);

export default function HomePage() {
  const [enter, setEnter] = useState(false);

  return (
    <main>
      <Vortex
        backgroundColor="transparent"
        rangeY={400}
        particleCount={100}
        baseHue={220}
        containerClassName="mb-24"
      >
        <section className="relative z-0 flex h-screen flex-col items-center justify-center gap-24">
          <h1 className="font-secondary flex w-full max-w-[1200px] flex-col gap-5 text-9xl font-black uppercase">
            <span className="flex gap-6">
              Code that <Logo />
            </span>
            <span className="text-stroke self-end text-transparent">
              sculpts your
            </span>
            <span>online success</span>
          </h1>

          <div className="flex w-full max-w-[950px] items-center justify-between gap-[125px]">
            <a className="bg-primary border-primary group relative flex h-[140px] w-[140px] flex-shrink-0 items-center justify-center rounded-full border-4 transition-transform hover:scale-110">
              <CircleParagraph className="text-primary-foreground absolute inset-0 h-full w-full animate-[spin_25s_linear_infinite] text-lg font-bold uppercase">
                Contact Us Contact Us
              </CircleParagraph>

              <div className="bg-primary-foreground z-10 flex h-[50px] w-[50px] items-center justify-center rounded-full">
                <FaArrowDown className="text-primary -rotate-[135deg] text-2xl transition-transform group-hover:rotate-0" />
              </div>
            </a>

            <p className="text-muted-foreground text-lg">
              Partner with CodeSculpt to bring your vision to life. We deliver
              user-friendly, visually stunning websites that set you apart.
              Experience the difference of a website crafted with precision and
              passion, designed to drive engagement and growth for your
              business.
            </p>
          </div>
        </section>
      </Vortex>

      <section id="services" className="mx-auto mb-44 max-w-[1200px]">
        <h2 className="font-secondary mb-4 text-center text-6xl font-semibold">
          We take care of everything
        </h2>
        <p className="text-muted-foreground mx-auto mb-12 max-w-5xl text-center text-lg">
          Need anything web-related? We&apos;ve got you covered! Our services
          and expertise can fulfill your every business need. From custom web
          design to responsive development, and from e-commerce solutions to SEO
          optimization, we ensure your online presence is powerful and
          effective.
        </p>

        <BentoGrid>
          <BentoGridItem
            header={
              <div className="text-muted-foreground bg-dot-white/15 group relative flex h-full flex-col items-center justify-center">
                <BiCart className="text-7xl transition-all group-hover:rotate-[12deg]" />

                <BiSushi className="absolute left-1/2 top-1/2 scale-0 text-2xl opacity-0 transition-all group-hover:translate-x-10 group-hover:translate-y-12 group-hover:rotate-[-32deg] group-hover:scale-100 group-hover:opacity-100" />
                <BiCoffee className="absolute left-1/2 top-1/2 scale-0 text-2xl opacity-0 transition-all group-hover:-translate-x-32 group-hover:translate-y-16 group-hover:rotate-[22deg] group-hover:scale-100 group-hover:opacity-100" />
                <BiCheese className="absolute left-1/2 top-1/2 scale-0 text-2xl opacity-0 transition-all group-hover:-translate-x-44 group-hover:-translate-y-14 group-hover:rotate-[-27deg] group-hover:scale-100 group-hover:opacity-100" />
                <BiCreditCard className="absolute left-1/2 top-1/2 scale-0 text-2xl opacity-0 transition-all group-hover:-translate-y-20 group-hover:translate-x-24 group-hover:rotate-[16deg] group-hover:scale-100 group-hover:opacity-100" />
                <BiSpa className="absolute left-1/2 top-1/2 scale-0 text-2xl opacity-0 transition-all group-hover:-translate-y-2 group-hover:translate-x-32 group-hover:rotate-[-29deg] group-hover:scale-100 group-hover:opacity-100" />
                <BiHeadphone className="absolute left-1/2 top-1/2 scale-0 text-2xl opacity-0 transition-all group-hover:-translate-x-16 group-hover:translate-y-2 group-hover:rotate-[37deg] group-hover:scale-100 group-hover:opacity-100" />
              </div>
            }
            title="eCommerce"
            description="Make your online shop next level. We offer reliable and fast solutions."
          />

          <BentoGridItem
            className="col-span-2"
            header={
              <div className="group relative h-full font-mono">
                <EvervaultCard>
                  <span className="text-rose-700">{"<div> "}</span>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
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
            className="col-span-2"
            header={
              <motion.div
                initial="initial"
                whileHover="animate"
                className="bg-grid-white/15 h-full w-full overflow-hidden"
              >
                <motion.div
                  variants={{
                    initial: {
                      y: 80,
                    },
                    animate: {
                      y: 10,
                      transition: {
                        duration: 0.2,
                      },
                    },
                  }}
                  className="border-muted-foreground bg-background group mx-auto h-52 w-1/2 space-y-2 rounded-md border p-2"
                >
                  <div className="flex justify-between border-inherit">
                    <div className="h-4 w-1/3 rounded-md border border-inherit" />
                    <div className="h-3 w-3 rounded-full border border-inherit" />
                  </div>

                  <div className="h-6 w-full rounded-md border border-inherit" />

                  <div className="flex items-center gap-2 border-inherit">
                    <div className="h-20 w-1/2 rounded-md border border-inherit" />
                    <div className="w-full space-y-2 border-inherit">
                      <div className="h-4 w-full rounded-md border border-inherit" />
                      <div className="h-4 w-full rounded-md border border-inherit" />
                      <div className="h-4 w-full rounded-md border border-inherit" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            }
            title="UI/UX Design"
            description="Our designs are user-centric, reflecting your brand’s identity while ensuring seamless and engaging interactions."
          />

          <BentoGridItem
            header={
              <div
                className="h-full"
                onMouseEnter={() => setEnter(true)}
                onMouseLeave={() => setEnter(false)}
              >
                <Illustration mouseEnter={enter} />
              </div>
            }
            title="Custom Solutions"
            description="Have an idea for an uncommon feature or a system? That's the thing that excites us."
          />
        </BentoGrid>
      </section>

      <section
        id="benefits"
        className="relative z-0 mx-auto mb-44 max-w-[1200px] overflow-hidden"
      >
        <h2 className="font-secondary mb-4 text-center text-6xl font-semibold">
          Let your idea be known
        </h2>
        <p className="text-muted-foreground mx-auto mb-12 max-w-5xl text-center text-lg">
          Ready to be the star of the web? With CodeSculpt&apos;s SEO and online
          presence magic, we’ll boost your site to the top of search results and
          draw in the crowds. From snazzy keywords to irresistible content, we
          make sure your big idea gets all the attention it deserves.
        </p>

        <div className="pointer-events-none h-[700px]">
          <div className="to-background inset-0 z-10 h-full w-full bg-gradient-to-b from-transparent to-[99%]"></div>
          <div className="absolute left-1/2 top-24 -z-10 aspect-square h-full -translate-x-1/2">
            <World data={sampleArcs} globeConfig={globeConfig} />
          </div>
        </div>
      </section>
    </main>
  );
}
