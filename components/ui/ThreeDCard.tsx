"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { TextGenerateEffect } from "./TextGenerateEffect";

export function ThreeDCard({
    title,
    des,
    img,
    iconLists,
    link,
    liveLink,
}: {
    title: string;
    des: string;
    img: string;
    iconLists: string[];
    link: string;
    liveLink: string;
}) {
    return (
        <CardContainer className="inter-var">
            <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white"
                >
                    {title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-sm max-w-sm mt-2 text-neutral-300"
                >
                    {des}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src={img}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <CardItem translateZ="60" className="w-full mt-8 flex justify-start items-center gap-2">
                    {iconLists.map((item, index) => {
                        return (
                            <Image
                                key={index}
                                src={item}
                                height="30"
                                width="30"
                                className="size-[25px] md:size-[30px] object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="logo"
                            />
                        );
                    })}
                </CardItem>
                <div className="flex justify-between items-center mt-6">
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href={liveLink}
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                    >
                        Live →
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href={link}
                        target="__blank"
                        className="px-2 py-1 rounded-md bg-white text-black text-sm font-bold flex items-center gap-2"
                    >
                        <FaGithub className="size-6" />
                        <span>GitHub</span>
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
