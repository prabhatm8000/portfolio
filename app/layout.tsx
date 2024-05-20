import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Prabhat's Portfolio",
    description:
        "Hi, I'm Prabhat, a Full Stack Web Developer with a passion for crafting seamless and responsive web applications. With expertise in front-end technologies like React.js, and back-end development using Node.js, Express.js and MongoDB, I create dynamic and user-friendly solutions. I have a strong background in API development and deployment on cloud platforms like Render and Vercel. My projects showcase my ability to integrate modern frameworks, optimize performance, and deliver robust applications that meet client needs. Explore my portfolio to see the work I've done.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
