import { projects } from "@/data";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
import BG2 from "./BG2";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <div
            id="projects"
            className="relative my-40 flex justify-center flex-col gap-4"
        >
            {/* h-[calc(100vh-65px-65px)]  */}
            <BG2 className="absolute -z-50 overflow-hidden" />

            <div className="space-y-4 container mx-auto max-w-6xl px-4">
                <h3 className="text-3xl font-semibold border-b-4 border-red w-fit">
                    Projects
                </h3>
            </div>

            <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-20 p-4 lg:p-6">
                {projects.map((item, index) => (
                    <ProjectCard item={item} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
