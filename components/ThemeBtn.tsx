"use client";

import { useAppStore } from "@/store";
import { useEffect, useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

const ThemeBtn = () => {
    const [theme, setTheme] = useState<string | null>(null);
    const setThemeInStore = useAppStore((state) => state.setTheme);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setTheme(storedTheme);
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            setThemeInStore(theme);
            localStorage.setItem("theme", "dark");
        } else if (theme === "light") {
            document.documentElement.classList.remove("dark");
            setThemeInStore(theme);
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    return (
        <div
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`cursor-pointer w-fit border border-black dark:border-white rounded-full p-0.5 flex items-center gap-2`}
        >
            <span
                className={`size-5 bg-black dark:bg-white rounded-full ${
                    theme === "dark" ? "translate-x-[140%]" : "translate-x-0"
                } transition-all duration-500`}
            />

            <span
                className={`${
                    theme === "dark" ? "translate-x-[-140%]" : "translate-x-0"
                } transition-transform duration-500`}
            >
                {theme === "dark" ? (
                    <BsSunFill className={"size-5 ps-1"} />
                ) : (
                    <FaMoon className={"size-5 pe-1"} />
                )}
            </span>
        </div>
    );
};

export default ThemeBtn;
