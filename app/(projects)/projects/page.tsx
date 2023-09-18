"use client";

import { useState, useEffect } from "react";
import ProjectCardMobile from "@/components/projectCardMobile";
import SectionHeading from "@/components/section-heading";
import { getProjects } from "@/sanity/sanity-utils";
import Link from "next/link";
import { FaHome, FaSearch } from "react-icons/fa";
import { ProjectType } from "@/lib/types";

export const metadata = {
  title: "Akash | Projects",
  description: "Akash's personal portfolio website. Used to showcase my projects, experience and skills.",
};

export default function AllProjects() {
  const [projectsData, setProjectsData] = useState<ProjectType[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getProjects().then(data => setProjectsData(data));
  }, []);

  const filteredProjects = projectsData.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-center items-center space-x-4">
        <Link href="/" className="inline-flex items-center p-2 rounded-full text-white bg-blue-500 hover:bg-blue-600 mb-8">
          <FaHome className="mr-2" />
          Home
        </Link>
        <SectionHeading>My projects</SectionHeading>
      </div>

      <div className="flex justify-center items-center space-x-4 mb-4">
        <FaSearch />
        <input
          type="text"
          placeholder="Search projects"
          onChange={event => setSearchTerm(event.target.value)}
          className="w-full sm:w-1/2 lg:w-1/3 p-2 rounded border dark:bg-gray-800 dark:text-white"
        />
      </div>

      <section className="flex flex-col items-center px-4 sm:px-0 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <div key={project._id}>
                <ProjectCardMobile project={project} />
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center place-content-center">
              <p className="text-gray-900 dark:text-white">No results found</p>
            </div>
          )}
        </div>

      </section>
    </>
  );
}
