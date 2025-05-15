'use client'
import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Footer from "@/components/organisms/Footer";
import CategoryTabs from "@/components/molecules/CategoryTabs";
import ProjectsGrid from "@/components/molecules/ProjectsGrid";
import {projects} from "@/data/content";


export default function Page() {
  return (
    <Suspense fallback={<div>Cargando proyectos…</div>}>
      <ProjectGallery />
    </Suspense>
  )
}

function ProjectGallery() {
  const router       = useRouter();
  const searchParams = useSearchParams();
  const rawCategory  = searchParams.get("category") || "";

  const matched   = projects.categories.find(cat => cat.toLowerCase() === rawCategory.toLowerCase());
  const activeTab = matched ?? "Commercial";

  const filtered = projects.allProjects.filter(p => p.category === activeTab);

  const handleTabChange = (cat) => {
    router.push(`/projects?category=${cat.toLowerCase()}`);
  };

  const currentIndex = projects.categories.findIndex(cat => cat === activeTab);
  const prevTab      = currentIndex > 0 ? projects.categories[currentIndex - 1] : null;
  const nextTab      = currentIndex < projects.categories.length - 1 ? projects.categories[currentIndex + 1] : null;

  return (
    <div className="relative flex flex-col items-center min-h-screen px-4 sm:px-6 lg:px-20 py-5">
      <section className="py-8 w-full">
        <CategoryTabs
          categories={projects.categories}
          active={activeTab}
          onChange={handleTabChange}
        />

        <hr className="border-t border-gray-300 mb-10" />

        <ProjectsGrid projects={filtered} />

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
          {nextTab && (
            <button
              onClick={() => handleTabChange(nextTab)}
              className="px-4 py-2 bg-secondary text-primary rounded hover:bg-secondary/80 transition"
            >
              {nextTab} →
            </button>
          )}
        </div>
      </section>

      <Footer classname="w-full" />
    </div>
  );
}
