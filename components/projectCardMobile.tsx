    import { useRef } from "react";
    import Image from "next/image";
    import { motion, useScroll, useTransform } from "framer-motion";
    import { ProjectType } from "@/lib/types";
    import { PortableText } from "@portabletext/react";
    import Link from "next/link";

    export default function ProjectCardMobile({ project }: { project: ProjectType }) {
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
            className="bg-white dark:bg-gray-800 p-4 mb-8 rounded-lg shadow-md mx-4 sm:mx-auto">
            <Link href={`/projects/${project.slug}`}>
            <div className="flex flex-col items-center justify-center h-full">
    
            <h3 className="mt-4 text-2xl font-semibold text-center text-gray-900 dark:text-white">
                {project.name}
            </h3>
            <div className="w-full h-64 my-4 hover:h-full transition-all duration-500 overflow-hidden flex justify-center">
                <Image
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={400}
                    // width={1080}
                    // height={1080}
                    // layout="responsive"
                    // objectFit="cover"
                    quality={95}
                    priority
                    className="transition-all duration-500 transform hover:scale-110 rounded-lg"
                />
                </div>

            <div className="mt-4 text-gray-700 dark:text-white/70 text-center overflow-hidden line-clamp-3">
                <PortableText value={project.description} />
            </div>
    
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
            
            <h1 
                className="mt-4 block underline text-center text-gray-900 dark:text-white pb-1"
                // href={`/projects/${project.slug}`}
            >
                View Project
            </h1>
    
            </div>
            </Link>
        </motion.div>
        );
    }
