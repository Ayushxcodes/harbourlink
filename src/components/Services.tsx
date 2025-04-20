"use client";

import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Fragment } from "react";

// ✅ Define the type locally
type Integration = {
  name: string;
  description: string;
};

export default function IntegrationColumn(props: {
  integrations: Integration[];
  className?: string;
  reverse?: boolean;
}) {
  const { integrations, className, reverse } = props;

  return (
    <motion.div
      initial={{
        y: reverse ? "-50%" : 0,
      }}
      animate={{
        y: reverse ? 0 : "-50%",
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      className={twMerge("flex flex-col gap-4 pb-4", className)}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <Fragment key={i}>
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="bg-gray-300 border border-black/10 rounded-3xl p-6"
            >
              <div className="flex justify-center">{/* Optional content */}</div>
              <h3 className="text-3xl text-center mt-6">{integration.name}</h3>
              <p className="text-center text-black/50 mt-2">
                {integration.description}
              </p>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  );
}
