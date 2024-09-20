"use client";

import { navItems } from "@/data";
import { useState } from "react";
import ThemeBtn from "./ThemeBtn";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const NavBar = () => {
    const [showNavItem, setShowNavItem] = useState(false);
    return (
        <nav className="sticky z-20 top-0 flex flex-row-reverse md:flex-row gap-2 justify-between items-center px-4 py-2 2xl:px-6 bg-white/60 dark:bg-black/60 backdrop-blur-[2px]">
            <h2 className="text-4xl sm:text-5xl font-semibold">
                Prabhat Mishra
            </h2>

            <button
                className={`md:hidden ${
                    showNavItem ? "rotate-0" : "rotate-180"
                } transition-transform duration-500`}
                onClick={() => setShowNavItem(!showNavItem)}
            >
                {showNavItem ? (
                    <IoClose className="size-6" />
                ) : (
                    <GiHamburgerMenu className="size-6" />
                )}
            </button>

            <ul
                className={`flex gap-4 md:items-center flex-col md:flex-row absolute md:relative top-full left-0 bg-red md:bg-transparent w-full md:w-fit p-4 md:p-0 text-lg ${
                    showNavItem ? "translate-x-0" : "translate-x-[-98%]"
                } md:translate-x-0 transition-transform duration-300 z-20`}
            >
                {navItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link
                                className="md:hover:text-red"
                                href={item.link}
                                rel="noreferrer"
                            >
                                {item.title}
                            </Link>
                        </li>
                    );
                })}

                <li>
                    <ThemeBtn />
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
