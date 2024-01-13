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
            lg: "8px",
            xl: "16px",
            xls: "20px",
            full: "9999px",
        },
        extend: {
            colors: {
                black: {
                    light: "#0E1C26",
                    night: "#121212",
                    dark: "#000000",
                },
                gray: {
                    light: "#999999",
                    charcoal: "#374151",
                    dark: "#262A2F",
                    clear: '#71767B'
                },
                silver: "#557C93",
                "majorelle-blue": "#645BF0",
                pumpkin: "#E3792D",
                blue: {
                    light: "#4A92FE",
                    dark: "#0E1028",
                    prussian: "#1E293B",
                },
                red: {
                    'fire-engine': '#CE3124'
                },
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
                5.5: "22px",
                18: "72px",
                sm: "576px",
                md: "768px",
                lg: "1024px",
                xl: "1440px",
            },
            height: {
                4.5: '18px',
                10.5: "42px",
                18: "72px",
            },
            gridTemplateColumns: {
                authentication: "repeat(20, minmax(0, 280px))",
            },
            fontSize: {
                'xsm': '13px'
            }
        },
    },
    plugins: [],
};
