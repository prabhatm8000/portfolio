/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
        "./data/**/*.{ts,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                black: "#111111",
                white: "#F5F5F5",
                red: "#FF6B6B",
                blue: "#0A84FF",
            },
        },
    },
};
