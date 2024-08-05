"use client";

import { motion } from "framer-motion";

function WebpageSkeleton() {
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      whileTap="animate"
      className="group h-full w-full overflow-hidden bg-grid-white/15"
    >
      <motion.div
        variants={{
          initial: {
            y: "40%",
          },
          animate: {
            y: "5%",
            transition: {
              duration: 0.2,
            },
          },
        }}
        className="mx-auto h-52 w-3/4 space-y-2 rounded-md border border-muted-foreground bg-background p-2 md:w-1/2"
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
  );
}

export default WebpageSkeleton;
