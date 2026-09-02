"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import DashboardGallery from "./DashboardGallery";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:py-28 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Work"
            title={<><span style={{ color: '#D4C5A9' }}>Projects</span></>}
            description="See how we've helped businesses solve data challenges, automate workflows, and build intelligent systems."
            align="left"
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 90} className="h-full">
              <ProjectCard project={project} index={i} onOpen={setSelected} />
            </Reveal>
          ))}
        </div>

        <DashboardGallery />
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}

    </section>
  );
}
