import { cn } from "@/utils/cn";
import Image from "next/image";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid auto-rows-[16rem] md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    id,
    img,
    imgClassName,
    titleClassName,
    skills,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    skills?: {
        skill: string;
        icon: string;
    }[];
}) => {
    return (
        <div
            className={cn(
                "relative rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-none p-4 border border-white/[0.2] flex flex-col",
                className
            )}
            style={{
                background:
                    id === 2
                        ? "rgb(13,13,13) url(/bg.png) no-repeat"
                        : "rgb(13,13,13)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(13,13,13,1) 0%, rgba(191,191,255,1) 100%, rgba(0,212,255,1) 100%)",
            }}
        >
            <div className={``}>
                <div
                    className={`absolute ${
                        id === 1
                            ? "right-0 bottom-0 opacity-20 md:opacity-50 lg:opacity-70"
                            : ""
                    }`}
                >
                    {img && (
                        <Image
                            src={img}
                            alt={img}
                            width={1000}
                            height={1000}
                            className={cn(
                                imgClassName,
                                "object-cover object-center"
                            )}
                        />
                    )}
                </div>
            </div>

            <div
                className={cn(
                    titleClassName,
                    "group-hover/bento:translate-y-2 md:group-hover/bento:translate-x-2 transition duration-200 relative flex flex-col px-5 p-5 lg:p-10 max-w-[700px]"
                )}
            >
                <div className="font-sans text-sm md:text-md lg:text-base z-10 text-white/55">
                    {description}
                </div>
                <div className="font-sans font-bold text-neutral-200 text-2xl md:text-3xl max-w-96 z-10">
                    {title}
                </div>
            </div>

            {skills && skills.length > 0 && (
                <div className="grid grid-cols-3 gap-4">
                    {skills.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-col justify-center items-center gap-1.5 hover:scale-110 transition duration-200"
                            >
                                <Image
                                    src={item.icon}
                                    alt={item.skill}
                                    width={80}
                                    height={80}
                                    className="size-14 md:size-20 object-cover"
                                />
                                <span className="text-white/60 font-extralight text-xs">
                                    {item.skill}
                                </span>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
