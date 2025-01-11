export const navItems = [
    {
        title: "About Me",
        link: "#aboutMe",
    },
    {
        title: "Work Experience",
        link: "#workExperience",
    },
    {
        title: "Projects",
        link: "#projects",
    },
];

export const aboutMe = {
    text: `Hi, I'm Prabhat, a Full Stack Developer with expertise in the MERN stack, TypeScript, and Socket.io. Experienced in building scalable web apps, with a focus on creating seamless user experiences and robust backend systems.`,
};

export const workExperience = [
    {
        id: 1,
        logo: "/teconico.png",
        title: "Full Stack Developer",
        company: "TecoNico Pvt. Ltd.",
        date: "July 2024 - December 2024",
        location: "Remote",
        type: "Internship",
        keyPoints: [
            "Worked on a EMR platform Robosensy, Optimized authentication system for various users by redesigning the login flow and enhanced API efficiency by 30% by optimizing database pipelines.",
            "Introduced new features such as prescriptions and invoice pdf generation, sending notifications, invoices, and prescriptions via WhatsApp.",
            "Generated documentation for backend API endpoints, which reduce development time by 20-30%.",
            "Node.js, Express.js, MongoDB, React.js, and Redux.",
        ],
    },
];

export const gridItems = [
    {
        id: 1,
        title: "Tech enthusiast with a passion for development.",
        description:
            "Experienced in building and maintaining web applications from concept to deployment. Skilled in both front-end and back-end technologies, including React, Node.js, and MongoDB. ",
        className: "row-span-1 md:row-span-2 col-span-2 md:col-span-1",
        imgClassName: "size-80",
        titleClassName: "justify-start",
        img: "/b1.svg",
    },
    {
        id: 2,
        title: "My Skills",
        description: "I constantly try to improve",
        // typescript, javascript, python, java, Node.js, Express.js, React.js, Next.js, MongoDB, MySQL, TailwindCSS, BootstrapCSS
        skills: [
            {
                skill: "TypeScript",
                icon: "/logo/typescript.svg",
            },
            {
                skill: "JavaScript",
                icon: "/logo/javascript.svg",
            },
            {
                skill: "Python",
                icon: "/logo/python.svg",
            },
            {
                skill: "Java",
                icon: "/logo/java.svg",
            },
            {
                skill: "Node.js",
                icon: "/logo/node-js.svg",
            },
            {
                skill: "Express.js",
                icon: "/logo/express.svg",
            },
            {
                skill: "React.js",
                icon: "/logo/react.svg",
            },
            {
                skill: "Next.js",
                icon: "/logo/next.svg",
            },
            {
                skill: "MongoDB",
                icon: "/logo/mongodb.svg",
            },
            {
                skill: "MySQL",
                icon: "/logo/mysql.svg",
            },
            {
                skill: "TailwindCSS",
                icon: "/logo/tailwind.svg",
            },
            {
                skill: "BootstrapCSS",
                icon: "/logo/bootstrap5.svg",
            },
        ],
        className: "row-span-2 col-span-2 md:col-span-2",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/grid.svg",
    },
];

export const projects = [
    {
        id: 5,
        title: "AiBooks - AI-generated books",
        des: "A collection of AI-generated books and python scripts for generating books for all genres.",
        img: "/project5.png",
        iconLists: [
            "/logo/golang.svg",
            "/logo/typescript.svg",
            "/logo/python.svg",
            "/logo/mongodb.svg",
            "/logo/next.svg",
            "/logo/tailwind.svg",
        ],
        github: "https://github.com/prabhatm8000/aibooks-backend",
        liveLink: "https://aibooks-frontend.vercel.app/",
    },
    {
        id: 4,
        title: "MernMedia - A Social-Media Web App",
        des: "MernMedia is a social media platform that offers seamless user authentication, personalized profiles, engaging posts, and real-time chats.",
        img: "/project4.png",
        iconLists: [
            "/logo/typescript.svg",
            "/logo/node-js.svg",
            "/logo/express.svg",
            "/logo/socket.svg",
            "/logo/mongodb.svg",
            "/logo/react.svg",
            "/logo/tailwind.svg",
        ],
        github: "https://github.com/prabhatm8000/mern-media",
        liveLink: "https://mern-media-9uwd.onrender.com",
    },
    {
        id: 3,
        title: "guessTheDrawing - Online Multi-Player Scribble Game",
        des: "guessTheDrawing is an interactive online multi-player game where players draw and guess images in real-time.",
        img: "/project3.png",
        iconLists: [
            "/logo/typescript.svg",
            "/logo/node-js.svg",
            "/logo/socket.svg",
            "/logo/react.svg",
            "/logo/tailwind.svg",
        ],
        github: "https://github.com/prabhatm8000/guessTheDrawing",
        liveLink: "https://guessthedrawing.vercel.app",
    },
    {
        id: 2,
        title: "MernHotel - Online Hotel Booking Web App",
        des: "MernHotel is a modern hotel management system, designed to streamline bookings, check-ins, and guest services.",
        img: "/project2.png",
        iconLists: [
            "/logo/typescript.svg",
            "/logo/node-js.svg",
            "/logo/express.svg",
            "/logo/mongodb.svg",
            "/logo/react.svg",
            "/logo/tailwind.svg",
        ],
        github: "https://github.com/prabhatm8000/mern-Hotel-app",
        liveLink: "https://mern-hotel-app-uz60.onrender.com",
    },
    {
        id: 1,
        title: "3D Solar System",
        des: "Explore the wonders of our solar system with this captivating 3D simulation of the sun, planets and asteroids using Three.js.",
        img: "/project1.png",
        iconLists: ["/logo/javascript.svg", "/logo/three.svg"],
        github: "https://github.com/prabhatm8000/solarThreeJS",
        liveLink: "https://solarthreejs.vercel.app",
    },
];
