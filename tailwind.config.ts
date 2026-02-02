import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            'xs': '375px',   // Extra small - iPhone SE, small phones
            'sm': '640px',   // Small - Large phones (landscape)
            'md': '768px',   // Medium - Tablets (portrait)
            'lg': '1024px',  // Large - Laptops
            'xl': '1280px',  // Extra Large - Desktops
            '2xl': '1536px', // 2X Large - Large desktops
        },
        extend: {
            colors: {
                background: "#F8FAFF", // Light Fintech Background
                foreground: "#0F172A", // Slate 900
                card: {
                    DEFAULT: "#FFFFFF",
                    foreground: "#0F172A",
                },
                popover: {
                    DEFAULT: "#FFFFFF",
                    foreground: "#0F172A",
                },
                primary: {
                    DEFAULT: "#2563EB", // Vivid Blue
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#EAF0FF", // Light Blue Tint
                    foreground: "#2563EB",
                },
                muted: {
                    DEFAULT: "#F1F5F9", // Slate 100
                    foreground: "#64748B", // Slate 500
                },
                accent: {
                    DEFAULT: "#2EE6D6", // Turquoise
                    foreground: "#0F2F3A",
                },
                destructive: {
                    DEFAULT: "hsl(0, 84%, 60%)",
                    foreground: "hsl(210, 40%, 98%)",
                },
                border: "#E2E8F0", // Slate 200
                input: "#CBD5E1", // Slate 300
                ring: "#2563EB",
                sabbpe: {
                    navy: {
                        DEFAULT: "#0F2F3A", // Keep for reference/dark sections
                        light: "#163F4D",
                        dark: "#050A10",
                    },
                    blue: {
                        DEFAULT: "#2563EB",
                        light: "#60A5FA",
                    },
                    cyan: "#2EE6D6",
                    teal: "#14B8A6",
                    green: "#22C55E",
                    yellow: "#EAB308",
                    pastel: "#7C83FF",
                    border: "#E2E8F0",
                    text: {
                        secondary: "#475569", // Slate 600
                        tertiary: "#94A3B8", // Slate 400
                    }
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
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
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
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
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                float: 'float 4s ease-in-out infinite',
                'pulse-slow': 'pulse 3s ease-in-out infinite',
                'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
                blob: 'blob 7s ease-in-out infinite',
            },
        },
    },
    plugins: [],
} satisfies Config;
