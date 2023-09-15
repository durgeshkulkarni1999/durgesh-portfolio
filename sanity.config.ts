import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "ebng80me",
    dataset: "production",
    apiVersion: "2021-10-21",
    title: "Portolio Studio",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas },
    });

export default config;