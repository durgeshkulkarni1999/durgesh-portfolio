  "use client";

  import { useRef } from "react";
  import Image from "next/image";
  import { motion, useScroll, useTransform } from "framer-motion";
  import { ProjectType } from "@/lib/types";
  import { PortableText } from "@portabletext/react";
  import Link from "next/link";

  export default function Project({
    project
  } : { project: ProjectType}) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
        className="group mb-3 sm:mb-8 last:mb-0"
      >
        <Link href={`/projects/${project.slug}`}> 
        <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{project.name}</h3>
            <div className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 overflow-hidden line-clamp-4">
            <PortableText value={project.description} />
            {/* <BlockContent blocks={project.description} /> */}
            </ div>
              
            {/* <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {project.tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul> */}
            <div className="mt-4 text-center w-3/4 mx-auto overflow-hidden line-clamp-2">
                {project.tags.map((tag, index) => (
                <span 
                    key={index}
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 mr-2 inline-block overflow-hidden text-overflow-ellipsis max-w-[10rem]"
                >
                    {tag}
                </span>
                ))}
            </div>
            <div className="flex justify-center">
              <h1 
                className="mt-4 block underline text-center text-gray-900 dark:text-white"
                // href={`/projects/${project.slug}`}
              >
                View Project
              </h1>
            </div>
          </div>
          {project.image && 
          <Image
            src={project.image}
            alt= {project.name}
            priority
            quality={95}
            width={1080}
            height={1080}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
          transition 
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2

          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2

          group-even:right-[initial] group-even:-left-40"
          />}
        </section>
      </Link>
      </motion.div>
    );
  }