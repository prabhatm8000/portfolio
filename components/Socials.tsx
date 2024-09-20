import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Socials = () => {
    return (
        <div className="flex gap-4 justify-between items-center w-fit text-black dark:text-black">
            <a href="mailto:prabhatm8000@gmail.com" className="hover:scale-110 hover:animate-pulse duration-100">
                <BiLogoGmail className="size-8" />
            </a>
            <a href="https://github.com/prabhatm8000" className="hover:scale-110 hover:animate-pulse duration-100">
                <BsGithub className="size-8" />
            </a>
            <a href="https://www.linkedin.com/in/prabhatm8000" className="hover:scale-110 hover:animate-pulse duration-100">
                <FaLinkedinIn className="size-8" />
            </a>
        </div>
    );
};

export default Socials;
