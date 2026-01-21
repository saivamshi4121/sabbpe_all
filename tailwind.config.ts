import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "hsl(222, 47%, 6%)",
                foreground: "hsl(210, 40%, 98%)",
                primary: {
                    DEFAULT: "hsl(217, 91%, 60%)",
                    foreground: "hsl(222, 47%, 6%)",
                },
                secondary: {
                    DEFAULT: "hsl(222, 47%, 12%)",
                    foreground: "hsl(210, 40%, 98%)",
                },
                muted: {
                    DEFAULT: "hsl(222, 47%, 15%)",
                    foreground: "hsl(215, 20%, 65%)",
                },
                accent: {
                    DEFAULT: "hsl(192, 91%, 55%)",
                    foreground: "hsl(222, 47%, 6%)",
                },
                sabbpe: {
                    navy: {
                        DEFAULT: "#0E1A2B",
                        light: "#14233C",
                        dark: "#050A10",
                    },
                    blue: {
                        DEFAULT: "#2563EB",
                        light: "#60A5FA",
                    },
                    cyan: "#2EE6D6",
                    teal: "#14B8A6", // Keeping teal for legacy if needed, or remove if strict
                    green: "#22C55E",
                    yellow: "#EAB308",
                    pastel: "#7C83FF",
                    border: "rgba(255, 255, 255, 0.06)",
                    text: {
                        secondary: "rgba(255, 255, 255, 0.72)",
                        tertiary: "rgba(255, 255, 255, 0.45)",
                    }
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                '4xl': '2rem',
            },
            backdropBlur: {
                xs: '2px',
            },
            keyframes: {
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'slide-in': {
                    '0%': { opacity: '0', transform: 'translateX(-20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                pulse: {
                    '0%, 100%': { opacity: '0.4' },
                    '50%': { opacity: '1' },
                },
                'glow-pulse': {
                    '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
                    '50%': { opacity: '1', transform: 'scale(1.05)' },
                },
                blob: {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                },
            },
            animation: {
                'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
                'slide-in': 'slide-in 0.5s ease-out forwards',
                float: 'float 4s ease-in-out infinite',
                'pulse-slow': 'pulse 3s ease-in-out infinite',
                'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
                blob: 'blob 7s ease-in-out infinite',
            },
        },
    },
    plugins: [],
} satisfies Config;
