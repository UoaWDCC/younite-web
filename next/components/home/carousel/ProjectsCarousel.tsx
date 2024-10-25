"use client";

import React from "react";
import CarouselBase from "@/components/scrollers/CarouselBase";
import ProjectCard from "@/components/home/carousel/ProjectCard";
import { ProjectType } from "@/schemas/collection/Project";
import { useModal } from "@/components/modal/ModalContextProvider";
import ProjectModal from "@/components/projects/ProjectModal";
import { getLargestImageUrl } from "@/util/image";
import Link from "next/link";

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
      <div className="text-blue-800 font-semibold text-4xl pr-6 pt-28 flex flex-col sm:flex-row justify-between">
        <p className="text-center text-center ml-16 md:text-left md:mb-0">Recent Projects</p>
        <Link
        href="projects/active"
        className="text-[14px] px-4 mr-16 border border-blue-800 rounded-full hover:bg-[#92E0FE] hover:border-[#92E0FE]">
          See More
        </Link>
      </div>
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
