import { FaPaperPlane } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
    return (
        <div className="py-40" id="home">
            <div>
                <Spotlight
                    className="top-0 left-0 h-[800px] w-[500px]"
                    fill="purple"
                />
            </div>
            <div className="h-screen w-full bg-black-100 bg-grid-white/[0.1] flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"></p> */}
            </div>
            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center">
                    <a
                        href="/"
                        className="text-sm uppercase tracking-widest text-center text-blue-100 max-w-80"
                    >
                        My Portfolio
                    </a>

                    <TextGenerateEffect
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                        words="Crafting Seamless and Responsive Web Applications."
                    />

                    <TextGenerateEffect
                        className="text-center md:tracking-wider mb-4 text-sm font-light md:text-lg lg:text-2xl"
                        words={"Hi, I'm Prabhat, a Full Stack Web Developer."}
                    />

                    {/* <p>{"Hi, I'm Prabhat, a Full Stack Web Developer"}</p> */}

                    <a href="/prabhat_mishra_resume.pdf">
                        <MagicButton
                            icon={<FaPaperPlane />}
                            position="right"
                            title={"My Resume"}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
