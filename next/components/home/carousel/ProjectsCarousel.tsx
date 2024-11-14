"use client";

import React from "react";
import CarouselBase from "@/components/scrollers/CarouselBase";
import ProjectCard from "@/components/home/carousel/ProjectCard";
import { ProjectType } from "@/schemas/collection/Project";
import { useModal } from "@/components/modal/ModalContextProvider";
import ProjectModal from "@/components/projects/ProjectModal";
import { getLargestImageUrl } from "@/util/image";

type ProjectsCarouselProps = {
  projects: ProjectType[];
}

export default function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const { open } = useModal();

  const openModalForProject = (project: ProjectType) => {
    open(
      <ProjectModal
        title={project.title}
        description={project.Description}
        imageUrl={getLargestImageUrl(project.image)}
      />
    );
  };

  return (
    <div className="bg-white bg-opacity-50">
      <div className="overflow-hidden ml-20 mr-20">
        <CarouselBase
          wrapperClass="flex mt-8 mb-32 py-8 w-full"
          innerClass="gap-8"
        >
          {projects.map((project, i) => (
            <div key={i} onClick={() => openModalForProject(project)}>
              <ProjectCard
                name={project.title}
                date={project.Date}
                img={project.image}
              />
            </div>
          ))}
        </CarouselBase>
      </div>
    </div>
  );
};
