/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                display: ['var(--font-playfair)', 'serif'],
            },
            colors: {
                hero: {
                    fg: '#FFFFFF',
                    sub: '#E5F0FF',
                    glow: '#93C5FD',
                },
            },
            textShadow: {
                soft: '0 1px 2px rgba(0,0,0,0.35)',
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.text-shadow-soft': { textShadow: '0 1px 2px rgba(0,0,0,0.35)' },
            });
        },
    ],
};
