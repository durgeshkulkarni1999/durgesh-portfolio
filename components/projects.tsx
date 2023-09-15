"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { ProjectType } from "@/lib/types";
import { HiOutlineEye } from "react-icons/hi";
// import Link from "next/link";


export default function Projects({ projectsData} : { projectsData: ProjectType[] }) {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project: ProjectType) => (
          project.front == "y" && <React.Fragment key={project._id}>
             <Project project={project} />
          </React.Fragment>
        ))} 
      </div>
      <div className="flex justify-center mt-4">
        <a
          href="https://github.com/akashm99"
          target="_blank"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 inline-flex"
        >
          View More{" "}
          <HiOutlineEye className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
      </div>


    </section>
  );
}