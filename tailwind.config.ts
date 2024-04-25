import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontSize: {
            sm: "0.625rem",
            md: "0.750rem",
            lg: "0.875rem",
        },
        extend: {
            screens: {
                phone: "480px",
                tablet: "640px",
                laptop: "768px",
            },
        },
    },
    plugins: [],
};
export default config;
