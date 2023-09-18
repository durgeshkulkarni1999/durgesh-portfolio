
import { ProjectType, PageType, ExperienceType } from "@/lib/types";
import { createClient, groq } from "next-sanity";
import { clientConfig } from "./config/client-config";

export async function getPage(): Promise<PageType[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "page"]{
            _id,
            intro,
            about,
            githubLink,
            linkedInLink,
            "profileImage": profileImage.asset->url,
            skills,
            contact,
            cvLink,
            portfolio,
        }`
    );
}

export async function getExperience(): Promise<ExperienceType[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "experience"]{
            _id,
            title,
            description,
            icon,
            location,
            date,
        }`
    );
}

export async function getProjects(): Promise<ProjectType[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            front,
            description,
            tags,
            "image": image.asset->url,
            "slug": slug.current,
            liveUrl,
            githubUrl,
        }`
    );
}

export async function getProject(slug: string): Promise<ProjectType> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            front,
            description,
            tags,
            "image": image.asset->url,
            "slug": slug.current,
            liveUrl,
            githubUrl,
        }`,
        { slug }
    );
}