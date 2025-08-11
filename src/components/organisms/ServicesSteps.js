import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ServicesSteps({ groups }) {
  // Calculate which index is the “middle” one
  const centerIndex = Math.floor(groups.length / 2);

  return (
    <div className="w-full mt-16">
      {groups.map((group, idx) => {
        const isCenter = idx === centerIndex;
        // Animate from left for first & last, from right for center
        const textInitialX = isCenter ? 100 : -100;

        return (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-2 gap-16 mb-12 items-start px-4 sm:px-6 lg:px-12"
          >
            {/* Text block with horizontal slide */}
            <motion.div
              className={`space-y-3 text-left flex flex-col justify-evenly h-full order-1 ${isCenter ? "sm:order-2" : "sm:order-1"}`}
              initial={{ opacity: 0, x: textInitialX }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {group.items.map((step) => (
                <div key={step.number}>
                  <h3 className="flex items-baseline text-sm sm:text-base font-bold">
                    <span className="text-secondary mr-2">{step.number}</span>
                    <span className="truncate">{step.title}</span>
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm leading-snug">
                    {step.text}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Image block */}
            <div className={`overflow-hidden rounded-lg max-h-[50vh] order-2 ${isCenter ? "sm:order-1" : "sm:order-2"}`}>
              <img
                src={group.img}
                alt={`Group ${idx + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
