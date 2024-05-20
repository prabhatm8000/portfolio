import { projects } from "@/data";
import React from "react";
import { ThreeDCard } from "./ui/ThreeDCard";

const RecentProjects = () => {
    return (
        <div className="pt-32 pb-10" id="projects">
            <h1 className="font-bold text-center text-[40px] md:text-5xl lg:text-6xl text-white">
                {"A small section of "}
                <span className="text-orange-200/90">recent projects.</span>
            </h1>

            <div className="grid xl:grid-cols-2 items-center justify-center p-4 text-white">
                {projects.map(
                    ({ id, title, des, img, iconLists, link, liveLink }) => {
                        return (
                            <div key={id} className="">
                                <ThreeDCard
                                    title={title}
                                    des={des}
                                    img={img}
                                    iconLists={iconLists}
                                    link={link}
                                    liveLink={liveLink}
                                />
                            </div>
                        );
                    }
                )}
            </div>
        </div>
    );
};

export default RecentProjects;
