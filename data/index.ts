export const navItems = [
    { name: "Home", link: "#home" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
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
                icon: "/logo/Java.svg",
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
        id: 1,
        title: "MernMedia - A Social-Media Web App",
        des: "MernMedia is a social media platform that offers seamless user authentication, personalized profiles, engaging posts, and real-time chats.",
        img: "/p1.png",
        iconLists: [
            "/logo/typescript.svg",
            "/logo/node-js.svg",
            "/logo/express.svg",
            "/logo/socket.svg",
            "/logo/mongodb.svg",
            "/logo/react.svg",
            "/logo/tailwind.svg",
        ],
        link: "https://github.com/teleport-1254/mern-media",
        liveLink: "",
    },
    {
        id: 2,
        title: "guessTheDrawing - Online Multi-Player Scribble Game",
        des: "guessTheDrawing is an interactive online multi-player game where players draw and guess images in real-time.",
        img: "/p2.png",
        iconLists: [
            "/logo/typescript.svg",
            "/logo/node-js.svg",
            "/logo/socket.svg",
            "/logo/react.svg",
            "/logo/tailwind.svg",
        ],
        link: "https://github.com/teleport-1254/guessTheDrawing",
        liveLink: "",
    },
    {
        id: 3,
        title: "MernHotel - Online Hotel Booking Web App",
        des: "MernHotel is a modern hotel management system, designed to streamline bookings, check-ins, and guest services.",
        img: "/p3.png",
        iconLists: [
            "/logo/typescript.svg",
            "/logo/node-js.svg",
            "/logo/express.svg",
            "/logo/mongodb.svg",
            "/logo/react.svg",
            "/logo/tailwind.svg",
        ],
        link: "https://github.com/teleport-1254/mern-Hotel-app",
        liveLink: "",
    },
    {
        id: 4,
        title: "3D Solar System",
        des: "Explore the wonders of our solar system with this captivating 3D simulation of the sun, planets and asteroids using Three.js.",
        img: "/p4.png",
        iconLists: ["/logo/javascript.svg", "/logo/three.svg"],
        link: "https://github.com/teleport-1254/solarThreeJS",
        liveLink: "",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/logo/gmail.svg",
        link: "",
    },
    {
        id: 2,
        img: "/logo/github.svg",
        link: "",
    },
    {
        id: 3,
        img: "/logo/twitter.svg",
        link: "",
    },
    {
        id: 4,
        img: "/logo/linkedin.svg",
        link: "",
    },
];
