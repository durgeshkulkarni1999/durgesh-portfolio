import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

type Props = {
  params: {
      project: string,
  }
}

export const metadata = {
  title: "Akash | Projects",
  description: "Akash's personal portfolio website. Used to showcase my projects, experience and skills.",
};

const IndProject = async ({params}: Props ) => {

  const slug = params.project;

  const project = await getProject(slug);

return (
  <>
      <div className="px-4 py-8 max-w-3xl mx-auto">
        
      <div className="flex justify-center gap-4 mb-10">
          <Link href="/" className="flex items-center bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md dark:bg-gray-700 dark:text-gray-100">
              <FaHome className="text-blue-500 hover:text-blue-700 mr-2"/>
              Home
          </Link>
          <Link href="/projects" className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md dark:bg-gray-700 dark:text-gray-100">
              All Projects
          </Link>
      </div>


        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 text-center">{project.name}</h1>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {project.tags.map(tag => (
            <span key={tag} className="bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-100">
              {tag}
            </span>  
          ))}
        </div>
      <div className="mt-8">
        <Image 
          src={project.image}
          quality={95}
          alt="Project image" 
          className="w-full rounded-md"
          width={1920}
          height={1080} 
        />   
      </div>

      <div className="mt-8 space-y-4 text-center">
        <PortableText value={project.description} />
      </div>

      <div className="mt-8 flex flex-col gap-4 items-center">
        {project.liveUrl && <a href={project.liveUrl}  
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Live Project  
        </a>}
        {project.githubUrl && <a href={project.githubUrl} 
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-200 px-4 py-2 rounded-md dark:bg-gray-700 dark:text-gray-100">
          Source Code
        </a>}    
      </div>
    </div>
  </>
)
}

export default IndProject;


