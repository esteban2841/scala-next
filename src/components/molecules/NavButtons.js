import React from "react";

export default function NavButtons({
  prevTab,
  nextTab,
  activeTab,
  handleTabChange,
  router,
}) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 sm:gap-6 px-2 sm:px-8 md:px-12 mt-2 w-full">
      {prevTab && (
        <button
          onClick={() => handleTabChange(prevTab)}
          className="px-4 py-2 bg-secondary text-primary rounded transition hover:bg-secondary/80 text-sm sm:text-base"
        >
          ← {prevTab}
        </button>
      )}
      <button
        onClick={() =>
          router.push(`/projects?category=${activeTab.toLowerCase()}`)
        }
        className="px-4 py-2 bg-secondary text-primary rounded transition hover:bg-secondary/80 text-sm sm:text-base flex-1 sm:flex-none"
      >
        Ver proyectos de {activeTab.toLowerCase()}
      </button>
      {nextTab && (
        <button
          onClick={() => handleTabChange(nextTab)}
          className="px-4 py-2 bg-secondary text-primary rounded transition hover:bg-secondary/80 text-sm sm:text-base"
        >
          {nextTab} →
        </button>
      )}
    </div>
  );
}
