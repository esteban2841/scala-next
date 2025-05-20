import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ServicesSteps({ groups }) {
  return (
    <div className="w-full mt-16">
      {groups.map((group, idx) => (
        <motion.div
          key={idx}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          className="grid grid-cols-1 sm:grid-cols-2 gap-16 mb-12 items-start px-4 sm:px-6 lg:px-12"
        >
          {/* Conditional order */}
          {idx % 2 === 0 ? (
            <>
              <div className="overflow-hidden rounded-lg max-h-[50vh]">
                <img
                  src={group.img}
                  alt={`Group ${idx + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="space-y-3 text-left items-center flex flex-col justify-evenly h-full">
                {group.items.map((step) => (
                  <div key={step.number}>
                    <h3 className="flex items-baseline text-sm sm:text-base font-bold">
                      <span className="text-secondary mr-2">
                        {step.number}
                      </span>
                      <span className="truncate">{step.title}</span>
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm leading-snug">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="space-y-3 text-left items-center flex flex-col justify-evenly h-full">
                {group.items.map((step) => (
                  <div key={step.number}>
                    <h3 className="flex items-baseline text-sm sm:text-base font-bold">
                      <span className="text-secondary mr-2">
                        {step.number}
                      </span>
                      <span className="truncate">{step.title}</span>
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm leading-snug">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
              <div className="overflow-hidden rounded-lg max-h-fit">
                <img
                  src={group.img}
                  alt={`Group ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </>
          )}
        </motion.div>
      ))}
    </div>
  );
}