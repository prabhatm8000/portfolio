import { socialMedia } from "@/data";
import Image from "next/image";
import { AuroraBackground } from "./ui/AuroraBackground";

const Footer = () => {
    return (
        <AuroraBackground className="w-screen h-fit">
            <footer className="w-full p-10 h-full" id="contact">
                <div className=" flex flex-col items-center gap-10">
                    <h1 className="font-bold text-center text-[40px] md:text-5xl lg:text-6xl text-orange-50">
                        Contact <span className="text-orange-200/90">Me</span>
                    </h1>

                    <p className="text-white/70 text-sm text-center">
                        Feel free to reach out to me for any inquiries,
                        collaborations, or opportunities. I&apos;m always open to
                        discussing new projects, sharing knowledge, and
                        connecting with fellow professionals in the tech
                        community. Whether you have a question, a proposal, or
                        just want to say hello, don&apos;t hesitate to get in touch.
                        You can contact me via email, LinkedIn, or Twitter (X).
                        I look forward to hearing from you!
                    </p>
                </div>

                <div className="flex mt-20 flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white-200">
                    <div className="text-sm font-light text-white/70 flex flex-col items-center md:items-start">
                        <span>Copyright © 2024 Prabhat Mishra</span>
                        <span>
                            Build with:{" "}
                            <a
                                href="https://ui.aceternity.com/"
                                target="_blank"
                            >
                                Aceternity UI
                            </a>
                        </span>
                    </div>

                    <div className="flex items-center gap-6 md:gap-3">
                        {socialMedia.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className="w-10 h-10 cursor-pointer justify-center items-center"
                                >
                                    <Image
                                        src={item.img}
                                        alt={item.img}
                                        className=""
                                        width={20}
                                        height={20}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </footer>
        </AuroraBackground>
    );
};

export default Footer;
