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
    <div className="w-full mt-16 flex flex-col items-center justify-center ">
      {groups.map((group, idx) => {
        const isCenter = idx === centerIndex;
        // Animate from left for first & last, from right for center
        const textInitialX = isCenter ? 100 : -100;

        return (
          <div className={`w-full flex justify-center  ${idx % 2 === 0 ?  "bg-[#BBB8B4]" : "]"}`} key={idx}>

            <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
            className={`w-full grid max-w-[1400px] grid-cols-1 sm:grid-cols-2 gap-16 mb-12 items-center justify-center px-4 sm:px-6 lg:px-12 py-20`} 
          >
            {/* Text block with horizontal slide */}
            <motion.div
              className={`space-y-3 w-full text-left flex flex-col gap-6  justify-evenly h-full  order-1 ${isCenter ? "sm:order-2" : "sm:order-1"}`}
              initial={{ opacity: 0, x: textInitialX }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {group.items.map((step) => (
                <div key={step.number} className="w-full h-full">
                  <div className="border relative border-[#7F7A7A] mb-4 w-12 h-12 flex items-center justify-center">
                    {/* {'here is the square'} */}
                    <div className=" border absolute top-[-8px] bg-[#7F7A7A] right-[-8px] border-[#7F7A7A] w-4 h-4">

                    </div>
                    <h3 className="text-[#7F7A7A] text-sm sm:text-base font-bold">{step.number}</h3>
                  </div>
                  <div className="w-full">
                    <h3 className="uppercase text-lg sm:text-2xl font-bold">{step.title}</h3>
                    <p className="mt-1 text-xs sm:text-sm leading-snug">
                      {step.text}
                    </p>
                  </div>
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
          </div>
          
        );
      })}
    </div>
  );
}
