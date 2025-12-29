/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#D11243', // Vyapar Red
                    hover: '#b00e36',
                    light: '#fff0f3',
                },
                secondary: {
                    DEFAULT: '#1c1c1c',
                    light: '#4a4a4a',
                },
                accent: {
                    DEFAULT: '#ffa000', // Amber/Gold often used for CTAs or focus
                    light: '#ffc107',
                },
                success: '#00b050',
                background: {
                    default: '#ffffff',
                    soft: '#f9f9f9',
                },
                text: {
                    primary: '#1c1c1c',
                    secondary: '#555555',
                    muted: '#888888',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Manrope', 'sans-serif'], // Vyapar uses a clean modern sans similar to Manrope/Inter
            },
            backgroundImage: {
                'gradient-hero': 'linear-gradient(180deg, #fff0f3 0%, #ffffff 100%)',
            },
            boxShadow: {
                'soft': '0 2px 10px rgba(0, 0, 0, 0.05)',
                'card': '0 0 20px rgba(0, 0, 0, 0.08)',
                'float': '0 10px 30px rgba(209, 18, 67, 0.15)',
            },
        },
    },
    plugins: [],
}
