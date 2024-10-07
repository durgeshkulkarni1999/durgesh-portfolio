import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "w7tun5va",
    dataset: "production",
    apiVersion: "2021-10-21",
    title: "Portolio Studio",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas },
    });

export default config;
