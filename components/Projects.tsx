import { projects } from "@/data";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
import BG2 from "./BG2";

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
                {projects.map((item) => (
                    <div
                        key={item.id}
                        className="container mx-auto max-w-6xl p-6 space-y-6 bg-black/85 text-white dark:bg-white/85 dark:text-black border border-black/10 dark:border-white/10 rounded-2xl hover:shadow-2xl shadow-black/30 dark:shadow-white/10"
                    >
                        <div className="flex flex-col gap-2">
                            <h4 className="text-xl font-semibold">
                                {item.title}
                            </h4>
                            <div>{item.des}</div>
                        </div>

                        <div className=" ">
                            <Image
                                src={item.img}
                                alt={item.title}
                                width={1100}
                                height={600}
                                className="object-cover rounded-md w-full"
                            />
                        </div>

                        <div className="flex gap-4">
                            <a
                                href={item.github}
                                className="flex gap-2 px-3 py-2 w-fit rounded-md bg-white text-black dark:bg-black dark:text-white"
                            >
                                <FaGithub className="size-6" />
                                <span className="font-semibold">Github</span>
                            </a>
                            <a
                                href={item.liveLink}
                                className="flex gap-2 px-3 py-2 w-fit"
                            >
                                <span className="">Live</span>
                                <MdArrowRightAlt className="size-6" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
