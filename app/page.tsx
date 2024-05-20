import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNavBar } from "@/components/ui/FloatingNavBar";
import { navItems } from "@/data";

export default function Home() {
    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">
            {/* <TracingBeam> */}
            <div className="max-w-7xl w-full sm:px-10 px-5">
                <FloatingNavBar navItems={navItems} />
                <Hero />
                <Grid />
                <RecentProjects />
            </div>
            <Footer />
            {/* </TracingBeam> */}
        </main>
    );
}
