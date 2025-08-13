import React from "react";
import ButtonRedirect from "../atoms/ButtonRedirect";

export default function NavButtons({
  prevTab,
  nextTab,
  activeTab,
  handleTabChange,
  router,
}) {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center sm:items-center gap-4 sm:gap-6 px-2 sm:px-8 md:px-12 mt-10 w-full">
      {prevTab && (
        <ButtonRedirect
          onClick={() => handleTabChange(prevTab)}
          label={"← " + prevTab}
          className="px-12 py-2 border-black  transition text-sm sm:text-base"
        >
        </ButtonRedirect>
      )}
      <ButtonRedirect
        onClick={() =>
          router.push(`/projects?category=${activeTab.toLowerCase()}`)
        }
        className="px-12 py-2  border-black  transition text-sm sm:text-base flex-1 sm:flex-none"
        label={`Go to ${activeTab.toLowerCase()} projects`}
        borderColor={'#000'}
      
      >
        
      </ButtonRedirect>
      {nextTab && (
        <ButtonRedirect
          onClick={() => handleTabChange(nextTab)}
          className="px-12 py-2 border-black  transition text-sm sm:text-base"
          label={nextTab + " →"}
        >
        </ButtonRedirect>
      )}
    </div>
  );
}
