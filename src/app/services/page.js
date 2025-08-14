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
      : services.tabs[0];

  return (
    <div className="relative flex flex-col w-full  items-center justify-start min-h-screen py-8 bg-[#FCFBF6] font-primary text-secondary">
      <div className="flex w-full max-w-[1400px] ">
        <TabMenu />
      </div>
      <div className="w-full max-w-[1400px] ">
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
        className="w-full overflow-hidden p-4 mt-14 flex items-center justify-center"
      >
        <div className="text-center w-full max-w-[1000px] text-wrap flex items-center justify-center">
          <h2 className="font-600 text-black text-xl sm:text-4xl uppercase tracking-widest">
            {headline}
          </h2>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        className="w-full max-w-[900px] my-16 p-4 md:px-0 space-y-6"
      >
        {paragraphs.map((text, idx) => (
          <Fragment key={idx}>
            <p className="text-xs font-medium sm:text-base leading-relaxed text-justify [text-align-last:center]">
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

      {/* {'main image in the view'} */}
     { <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        className="w-full max-w-[1200px] overflow-hidden hidden md:block"
      >
        <img
          src={heroImg}
          alt={activeTab}
          className="w-full h-fit object-cover object-center max-h-[60vh]"
        />
      </motion.div>}


      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        className="w-full"
      >
        <NavButtons
          isHeaderNav={true}
          activeTab={activeTab}
          handleTabChange={handleTabChange}
          router={router}
        />
      </motion.div>

      <div className="w-full mt-16">
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
