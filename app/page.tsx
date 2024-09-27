"use client";

import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import WorkExp from "@/components/WorkExp";

export default function Home() {
    // const loading = useAppStore((state) => state.loading);
    return (
        <>
            {/* <Loading />
            {!loading && (
                <>
                    <NavBar />

                    <main className="flex flex-col overflow-hidden relative">
                        <AboutMe />
                        <WorkExp />
                        <Projects />
                        <Footer />
                    </main>
                </>
            )} */}

            <NavBar />

            <main className="flex flex-col overflow-hidden relative">
                <AboutMe />
                <WorkExp />
                <Projects />
                <Footer />
            </main>
        </>
    );
}
