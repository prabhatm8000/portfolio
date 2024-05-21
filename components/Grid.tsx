import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
    return (
        <section id="skills" className="h-full">
            <BentoGrid>
                {gridItems.map(
                    (
                        {
                            className,
                            description,
                            id,
                            img,
                            imgClassName,
                            title,
                            titleClassName,
                            skills
                        },
                        idx
                    ) => (
                        <BentoGridItem
                            key={idx}
                            title={title}
                            description={description}
                            id={id}
                            className={className}
                            img={img}
                            imgClassName={imgClassName}
                            titleClassName={titleClassName}
                            skills={skills}
                        />
                    )
                )}
            </BentoGrid>
        </section>
    );
};

export default Grid;
