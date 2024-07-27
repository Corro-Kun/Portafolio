import type Colors from "./Colors.type";

export default interface Project {
    title: string;
    description: string;
    platform: number;
    icon: string;
    appColor: string;
    repo: string;
    tools: string;
    colors: Colors;
    video: string;
}