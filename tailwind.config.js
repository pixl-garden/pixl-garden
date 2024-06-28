// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "pg-background": "#E9F8EA",
                "pg-green": "#739786",
                "pg-green-dark": "#384442",
            },
            fontFamily: {
                alagard: ["alagard", "monospace"],
                paskowy: ["Paskowy", "monospace"],
                autopilot: ["AutoPilot", "monospace"],
            },
        },
    },
    plugins: [],
};
