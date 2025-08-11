"use client";
import React, { Suspense, Fragment } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import CategoryTabs from "@/components/molecules/CategoryTabs";
import Footer from "@/components/organisms/Footer";
import { services } from "@/data/content";
import TabMenu from "@/components/molecules/TabMenu";
import ServicesSteps from "@/components/organisms/ServicesSteps";
import NavButtons from "@/components/molecules/NavButtons";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading Services..</div>}>
      <ServicesPage />
    </Suspense>
  );
}

function ServicesPage() {
  const router = useRouter();
  const params = useSearchParams();
  const rawCategory = params.get("category") || "";
  const matched = services.tabs.find(
    (t) => t.toLowerCase() === rawCategory.toLowerCase()
  );
  const activeTab = matched ?? services.tabs[0];
  const { heroImg, headline, description, groups } =
    services.servicesData[activeTab];
  const paragraphs = description.split("\n\n");

  const handleTabChange = (newTab) => {
    router.push(`/services?category=${newTab.toLowerCase()}`);
  };

  const currentIndex = services.tabs.findIndex((t) => t === activeTab);
  const prevTab = currentIndex > 0 ? services.tabs[currentIndex - 1] : null;
  const nextTab =
    currentIndex < services.tabs.length - 1
      ? services.tabs[currentIndex + 1]
      : null;

  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen py-8 bg-primary font-primary text-secondary">
      <div className="absolute top-4 right-4">
        <TabMenu />
      </div>
      <div className="w-full max-w-4xl my-5 md:my-10 lg:my-12">
        <CategoryTabs
          categories={services.tabs}
          active={activeTab}
          onChange={handleTabChange}
        />
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        className="w-full overflow-hidden rounded-lg hidden md:block"
      >
        <img
          src={heroImg}
          alt={activeTab}
          className="w-full h-fit object-cover object-center max-h-[60vh]"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        className="w-full overflow-hidden mt-8"
      >
        <div className="bg-secondary py-3 px-6 text-center">
          <h2 className="font-bold text-primary text-sm sm:text-lg">
            {headline}
          </h2>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        className="w-full max-w-3xl mt-16 px-10 md:px-0 space-y-6"
      >
        {paragraphs.map((text, idx) => (
          <Fragment key={idx}>
            <p className="text-xs sm:text-base leading-relaxed text-justify [text-align-last:center]">
              {text}
            </p>
            {idx === 1 && (
              <img
                src={heroImg}
                alt={activeTab}
                className="block md:hidden w-full rounded-lg object-cover object-center"
              />
            )}
          </Fragment>
        ))}
      </motion.div>
      <div className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-[80%] mt-16">
        <ServicesSteps groups={groups} />
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        className="w-full"
      >
        <NavButtons
          prevTab={prevTab}
          nextTab={nextTab}
          activeTab={activeTab}
          handleTabChange={handleTabChange}
          router={router}
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        className="w-full mt-2"
      >
        <Footer classname="w-full px-4 sm:px-6 lg:px-12" />
      </motion.div>
    </div>
  );
}
