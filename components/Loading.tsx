"use client";

import { useAppStore } from "@/store";
import { useEffect, useState } from "react";

const Loading = () => {
    const loading = useAppStore((state) => state.loading);
    const setLoading = useAppStore((state) => state.setLoading);

    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                const increment = Math.floor(Math.random() * 20);

                if (prev + increment <= 100) {
                    return prev + increment;
                }

                setLoading(false);
                return prev;
            });
        }, 100);

        const timeout = setTimeout(() => {
            clearInterval(interval);
        }, 2000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <div
            className={`relative text-black dark:text-white bg-white dark:bg-black h-screen w-full ${
                loading ? "" : "hidden"
            }`}
        >
            <div
                className="bg-red bottom-0"
                style={{
                    height: `${progress}vh`,
                }}
            >
                <div className="absolute right-0 m-6 text-3xl md:text-4xl lg:text-5xl">
                    <span>{"Loading "}</span>
                    <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                        {progress}
                    </span>
                    <span>%</span>
                </div>
            </div>
        </div>
    );
};

export default Loading;
