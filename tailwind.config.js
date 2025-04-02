/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['var(--font-poppins)', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'float': 'float 6s ease-in-out infinite',
              },
              keyframes: {
                fadeIn: {
                  '0%': { opacity: '0', transform: 'translateY(10px)' },
                  '0%, 100%': { transform: 'translateY(0)' },
                  '50%': { transform: 'translateY(-20px)' },
                  '100%': { opacity: '1', transform: 'translateY(0)' },
                },
              },
        },
    },
    plugins: [],
};
