import { workExperience } from "@/data";
import Image from "next/image";

const WorkExp = () => {
    return (
        <div id="workExperience" className="relative my-20 flex flex-col">
            {/* min-h-[calc(100vh-65px-65px)]  */}
            <div className="space-y-4 container mx-auto max-w-6xl px-4">
                <h3 className="text-3xl font-semibold border-b-4 border-red w-fit">
                    Work Experience
                </h3>
            </div>

            <div>
                {workExperience.map((item) => (
                    <div
                        key={item.id}
                        className="container mx-auto max-w-6xl p-4 md:space-y-2"
                    >
                        <div className="grid grid-cols-[auto_1fr] gap-4">
                            <div className="bg-white p-2 h-fit w-fit">
                                <Image
                                    src={item.logo}
                                    alt={item.company}
                                    className="size-12 object-cover "
                                    width={200}
                                    height={200}
                                />
                            </div>

                            <div className="flex flex-col md:flex-row justify-between w-full">
                                <div>
                                    <h3 className="text-2xl font-semibold">
                                        {item.title}
                                    </h3>
                                    <p className="text-lg">{item.company}</p>
                                    <p className="text-lg">{item.type}</p>
                                </div>

                                <div className="flex flex-col md:items-end opacity-60">
                                    <p className="text-lg">{item.date}</p>
                                    <p className="text-lg">{item.location}</p>
                                </div>
                            </div>
                        </div>

                        <ul className="list-disc ms-5">
                            {item.keyPoints.map((keyPoint, index) => (
                                <li key={index} className="">
                                    {keyPoint}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkExp;
