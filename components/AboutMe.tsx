import { aboutMe } from "@/data";
import BG1 from "./BG1";
import Socials from "./Socials";

const AboutMe = () => {
    return (
        <div
            id="aboutMe"
            className="relative my-40 flex justify-center flex-col gap-10"
        >
            {/* h-[calc(100vh-65px-65px)] */}
            <BG1 className="absolute -z-50 h-screen overflow-hidden" />

            <div className="space-y-4 container mx-auto max-w-6xl px-4">
                <h3 className="text-3xl font-semibold border-b-4 border-red w-fit">
                    About Me
                </h3>
                <p className="max-w-3xl text-left text-lg">{aboutMe.text}</p>
            </div>

            <div className="bg-red">
                <div className="p-4 container mx-auto max-w-6xl">
                    <Socials />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
