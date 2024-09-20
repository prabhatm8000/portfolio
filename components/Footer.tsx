import Socials from "./Socials";

const Footer = () => {
    return (
        <div className="bg-blue">
            <div className="flex justify-between items-center p-4 container mx-auto max-w-6xl">
                <Socials />
                <div className="text-black">
                    <span>Prabhat Mishra @ 2024</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
