/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "576px",
            md: "768px",
            lg: "1024px",
            xl: "1440px",
        },
        fontFamily: {
            "archivo-black": ["Archivo Black", "sans-serif"],
            roboto: ["Roboto", "sans-serif"],
            monoton: ["Monoton", "sans-serif"],
        },
        borderRadius: {
            none: "0",
            sm: "2px",
            md: "5px",
            lg: "10px",
            xl: "15px",
            xls: "20px",
            full: "9999px",
        },
        extend: {
            colors: {
                black: {
                    light: "#0E1C26",
                    dark: "#000000",
                },
                gray: {
                    light: "#999999",
                    charcoal: "#374151",
                    dark: "#262A2F",
                },
                silver: "#557C93",
                purple: "#645BF0",
                orange: "#E3792D",
                blue: "#4A92FE",
                red: "#CE3124",
                turquoise: "#6EE2F5",
            },
            margin: {
                7.5: "30px",
                25: "100px",
            },
            gap: {
                12.5: "50px",
            },
            width: {
                5.5: '22px',
                50: "200px",
            },
            height: {
                10.5: "42px",
            },
        },
    },
    plugins: [],
};
