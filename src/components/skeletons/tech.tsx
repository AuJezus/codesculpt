"use client";

import { cn } from "@/lib/utils";
import { motion, animate, type AnimationSequence } from "framer-motion";
import { useEffect, useState } from "react";
import { BiLogoFigma, BiLogoReact, BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs, SiPostgresql } from "react-icons/si";

const scale = [1, 1.1, 1];
const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
const sequence = [
  [
    ".circle-3",
    {
      scale,
      transform,
    },
    { duration: 0.9 },
  ],
  [
    ".circle-4",
    {
      scale,
      transform,
    },
    { duration: 0.9 },
  ],
  [
    ".circle-5",
    {
      scale,
      transform,
    },
    { duration: 0.9 },
  ],
  [
    ".circle-1",
    {
      scale,
      transform,
    },
    { duration: 0.9 },
  ],

  [
    ".circle-2",
    {
      scale,
      transform,
    },
    { duration: 0.9 },
  ],
];

export const TechSkeleton = () => {
  useEffect(() => {
    void animate(sequence as AnimationSequence, {
      repeat: Infinity,
      repeatDelay: 0.5,
    });
  }, []);
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden p-8">
      <div className="flex flex-shrink-0 flex-row items-center justify-center gap-4">
        <Container className="circle-1 h-10 w-10">
          <BiLogoFigma className="h-6 w-6 transition-colors duration-500 group-hover:text-red-500" />
        </Container>
        <Container className="circle-2 h-14 w-14">
          <BiLogoReact className="h-8 w-8 transition-colors duration-500 group-hover:text-cyan-500" />
        </Container>
        <Container className="circle-3 h-20 w-20">
          <BiLogoTypescript className="h-12 w-12 transition-colors duration-500 group-hover:text-blue-500" />
        </Container>
        <Container className="circle-4 h-14 w-14">
          <SiNextdotjs className="h-8 w-8 transition-colors duration-500 group-hover:text-white" />
        </Container>
        <Container className="circle-5 h-10 w-10">
          <SiPostgresql className="h-6 w-6 transition-colors duration-500 group-hover:text-sky-500" />
        </Container>
      </div>

      <div className="animate-move absolute top-20 z-40 m-auto h-40 w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent">
        <div className="absolute -left-10 top-1/2 h-32 w-10 -translate-y-1/2">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};

export const TechSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "z-40 h-[15rem] rounded-xl md:h-[20rem]",
        className,
        showGradient &&
          "bg-neutral-300 [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)] dark:bg-[rgba(40,40,40,0.70)]",
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]`,
        className,
      )}
    >
      {children}
    </div>
  );
};

const Sparkles = () => {
  const [randomMove, setRandomMove] = useState<() => number>();
  const [randomOpacity, setRandomOpacity] = useState<() => number>();
  const [random, setRandom] = useState<() => number>();

  useEffect(() => {
    setRandomMove(() => () => Math.random() * 4 - 2);
    setRandomOpacity(() => () => Math.random());
    setRandom(() => () => Math.random());
  }, []);

  if (!randomMove || !randomOpacity || !random) return <span />;

  return (
    <div className="absolute inset-0">
      {[...Array.from({ length: 12 })].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        ></motion.span>
      ))}
    </div>
  );
};
