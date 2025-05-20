"use client";
import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Footer from "@/components/organisms/Footer";
import CategoryTabs from "@/components/molecules/CategoryTabs";
import ProjectsGrid from "@/components/molecules/ProjectsGrid";
import { projects } from "@/data/content";
import TabMenu from "@/components/molecules/TabMenu";
import Image from "next/image";
import NavButtons from "@/components/molecules/NavButtons";

export default function Page() {
  return (
    <Suspense fallback={<div>Cargando proyectos…</div>}>
      <ProjectGallery />
    </Suspense>
  );
}

function ProjectGallery() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawCategory = searchParams.get("category") || "";

  const matched = projects.categories.find(
    (cat) => cat.toLowerCase() === rawCategory.toLowerCase()
  );
  const activeTab = matched ?? "Commercial";

  const filtered = projects.allProjects.filter((p) => p.category === activeTab);

  const handleTabChange = (cat) => {
    router.push(`/projects?category=${cat.toLowerCase()}`);
  };

  const currentIndex = projects.categories.findIndex(
    (cat) => cat === activeTab
  );
  const prevTab =
    currentIndex > 0 ? projects.categories[currentIndex - 1] : null;
  const nextTab =
    currentIndex < projects.categories.length - 1
      ? projects.categories[currentIndex + 1]
      : null;

  return (
    <div className="relative flex flex-col items-center min-h-screen px-4 sm:px-6 lg:px-20 py-5">
      <Image
        src="/assets/logos/scala_logo_v1_black.svg"
        alt="Scala Logo"
        className="absolute top-3 left-5 w-auto h-14 sm:left-10 sm:h-26"
        width={64}
        height={64}
      />
      <TabMenu className="absolute w-full justify-end right-3" />
      <section className="py-8 w-full mt-10">
        <CategoryTabs
          categories={projects.categories}
          active={activeTab}
          onChange={handleTabChange}
        />

        <hr className="border-t border-gray-300 mb-10" />
        <div className="flex items-center justify-center w-full mb-10 ">
          <ProjectsGrid projects={filtered} />
        </div>

        {/* ─── BOTONES DE NAVEGACIÓN ENTRE TABS ───────────────────────────────── */}
        <NavButtons
          prevTab={prevTab}
          nextTab={nextTab}
          activeTab={activeTab}
          handleTabChange={handleTabChange}
          router={router}
        />
      </section>
      <Footer classname="w-full" />
    </div>
  );
}
