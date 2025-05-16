// app/services/page.js
"use client";
import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import CategoryTabs from "@/components/molecules/CategoryTabs";
import Footer from "@/components/organisms/Footer";
import { services } from "@/data/content";
import TabMenu from "@/components/molecules/TabMenu";

export default function Page() {
  return (
    <Suspense fallback={<div>Cargando proyectos…</div>}>
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

  const handleTabChange = (newTab) => {
    router.push(`/services?category=${newTab.toLowerCase()}`);
  };

  // ─── Cálculo de prevTab y nextTab ───────────────────────────────────────────────
  const currentIndex = services.tabs.findIndex((t) => t === activeTab);
  const prevTab = currentIndex > 0 ? services.tabs[currentIndex - 1] : null;
  const nextTab =
    currentIndex < services.tabs.length - 1
      ? services.tabs[currentIndex + 1]
      : null;

  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen px-4 sm:px-6 lg:px-10 py-5 bg-primary font-primary text-secondary">
      {/* Category Tabs */}
      <TabMenu className="absolute w-full justify-end right-3" />
      <div className="w-full px-4 sm:px-6 lg:px-10 mt-10">
        <CategoryTabs
          categories={services.tabs}
          active={activeTab}
          onChange={handleTabChange}
        />
      </div>

      {/* Hero Image */}
      <div className="w-full mb-6 mt-10">
        {/* this inner div uses negative margin to cancel out the container’s px */}
        <div className="-mx-4 sm:-mx-6 lg:-mx-10 overflow-hidden">
          <img
            src={heroImg}
            alt={activeTab}
            className="w-screen max-h-96 object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Headline */}
      <div className="w-full mb-10">
        <div className="-mx-4 sm:-mx-6 lg:-mx-10 bg-secondary py-3 overflow-hidden">
          <div className="px-4 sm:px-6 lg:px-10">
            <h2 className="text-center font-bold text-primary text-base sm:text-xl md:text-2xl">
              {headline}
            </h2>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="w-full px-4 sm:px-6 lg:px-10 mb-20">
        <p className="max-w-4xl mx-auto text-sm sm:text-lg md:text-xl leading-loose text-justify [text-align-last:center]">
          {description}
        </p>
      </div>

      {/* Groups of Steps with Alternating Layout, 40/40 Width Responsive */}
      <div className="w-full px-4 sm:px-6 lg:px-10 space-y-24 md:w-5/6 md:mx-auto">
        {groups.map((group, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-12"
          >
            {idx % 2 === 1 ? (
              <>
                {/* Text first on odd rows */}
                <div className="w-full text-center space-y-6 md:justify-self-end">
                  {group.items.map((step) => (
                    <div key={step.number}>
                      <h3 className="flex text-lg sm:text-2xl md:text-3xl font-bold justify-between">
                        <span className="text-secondary mr-2">
                          {step.number}
                        </span>
                        {step.title}
                      </h3>
                      <p className="mt-4 text-sm sm:text-lg md:text-xl leading-loose text-justify">
                        {step.text}
                      </p>
                    </div>
                  ))}
                </div>
                {/* Image second */}
                <div className="w-full aspect-square md:justify-self-start">
                  <img
                    src={group.img}
                    alt={`Group ${idx + 1}`}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              </>
            ) : (
              <>
                {/* Image first on even rows */}
                <div className="w-full aspect-square md:justify-self-end">
                  <img
                    src={group.img}
                    alt={`Group ${idx + 1}`}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                {/* Text second */}
                <div className="w-full text-center space-y-6 md:justify-self-start">
                  {group.items.map((step) => (
                    <div key={step.number}>
                      <h3 className="flex text-lg sm:text-2xl md:text-3xl font-bold justify-between">
                        <span className="text-secondary mr-2">
                          {step.number}
                        </span>
                        {step.title}
                      </h3>
                      <p className="mt-4 text-sm sm:text-lg md:text-xl leading-loose text-justify">
                        {step.text}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* ─── BOTONES DE NAVEGACIÓN ENTRE TABS ───────────────────────────────── */}
      <div className="flex justify-center space-x-4 mt-8">
        {prevTab && (
          <button
            onClick={() => handleTabChange(prevTab)}
            className="px-4 py-2 bg-secondary text-primary rounded hover:bg-secondary/80 transition"
          >
            ← {prevTab}
          </button>
        )}
        <button
          onClick={() =>
            router.push(`/projects?category=${activeTab.toLowerCase()}`)
          }
          className="px-4 py-2 bg-secondary text-primary rounded hover:bg-secondary/80 transition"
        >
          Check out our {activeTab.toLowerCase()} projects
        </button>
        {nextTab && (
          <button
            onClick={() => handleTabChange(nextTab)}
            className="px-4 py-2 bg-secondary text-primary rounded hover:bg-secondary/80 transition"
          >
            {nextTab} →
          </button>
        )}
      </div>

      {/* Footer */}
      <Footer classname="w-full px-4 sm:px-6 lg:px-10 mt-12" />
    </div>
  );
}
