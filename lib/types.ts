import { links } from "./data";
import { PortableTextBlock } from 'sanity';

export type SectionName = (typeof links)[number]["name"];

export type ExperienceType = {
    _id: string;
    description: PortableTextBlock[];
    icon: string;
    location: string;
    title: string;
    date: string;
};

export type ProjectType = {
    _id: string;
    name: string;
    description: PortableTextBlock[];
    tags: string[];
    image: string;
    front: string;
    slug: string;
    liveUrl: string;
    githubUrl: string;
  };

export type PageType = {
    _id: string;
    intro: PortableTextBlock[];
    about: PortableTextBlock[];
    githubLink: string;
    linkedInLink: string;
    profileImage: string;
    skills: string[];
    contact: PortableTextBlock[];
    cvLink: string;
    portfolio: string;
    // resumePDF: string;
};