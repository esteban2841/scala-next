"use client";

import ProjectsGrid from "@/components/molecules/ProjectsGrid";
import TabMenu from "@/components/molecules/TabMenu";
import Footer from "@/components/organisms/Footer";
import { blog } from "@/data/content";
export default function Blog() {
  return (
    <div className="bg-primary text-secondary min-h-screen px-4 sm:px-6 lg:px-20 py-5">

      <TabMenu className="absolute w-full justify-end right-3"/>
      {/* Title Section */}
      <section className="my-16">
        <section className="mb-8">
          <div className="flex items-center">
            <span className="text-3xl sm:text-5xl font-bold mr-4 leading-none">
              ■
            </span>
            <h1 className="text-4xl sm:text-6xl font-medium">Blog</h1>
            <hr className="ml-6 flex-1 border-t-2 border-secondary" />
          </div>
        </section>
        <ProjectsGrid projects={blog.allProjects} />
      </section>

      <Footer classname="w-full" />
    </div>
  );
}
