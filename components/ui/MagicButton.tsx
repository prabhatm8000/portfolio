import React from "react";

const MagicButton = ({
    title,
    icon,
    position,
    handleClick,
    otherClasses,
}: {
    title: string;
    icon: React.ReactNode;
    position: "left" | "right";
    handleClick?: () => void;
    otherClasses?: string;
}) => {
    return (
        <button className="relative inline-flex h-12 w-full hover:scale-105 overflow-hidden rounded-lg p-[0px] hover:p-[1.5px] border border-white/70 hover:border-none transition-all duration-200 focus:outline-none md:w-60 md:mt-10">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span
                className={`inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-black-100 px-6 text-lg font-medium text-white backdrop-blur-3xl ${otherClasses}`}
            >
                {position === "left" && icon}
                {title}
                {position === "right" && icon}
            </span>
        </button>
    );
};

export default MagicButton;
