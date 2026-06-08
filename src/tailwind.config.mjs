/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/**/*.html'],
    theme: {
        extend: {
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1rem', letterSpacing: '-0.01em' }],
                sm: ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '-0.01em' }],
                base: ['1rem', { lineHeight: '1.5rem', letterSpacing: '-0.01em' }],
                lg: ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
                xl: ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em', fontWeight: 'bold' }],
                '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.01em', fontWeight: 'bold' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.01em', fontWeight: 'bold' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.01em', fontWeight: 'bold' }],
                '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.01em', fontWeight: 'bold' }],
                '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.01em', fontWeight: 'bold' }],
                '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.01em', fontWeight: 'bold' }],
                '8xl': ['5.25rem', { lineHeight: '1', letterSpacing: '-0.01em', fontWeight: 'bold' }],
                '9xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.01em', fontWeight: 'bold' }],
            },
            fontFamily: {
                heading: "Playfair Display",
                paragraph: "Roboto"
            },
            colors: {
                primary: 'rgb(31 60 90 / <alpha-value>)',
                secondary: 'rgb(245 247 248 / <alpha-value>)',
                accent: 'rgb(61 170 60 / <alpha-value>)',
                background: 'rgb(245 247 248 / <alpha-value>)',
                foreground: 'rgb(43 43 43 / <alpha-value>)',
                link: 'rgb(61 170 60 / <alpha-value>)',
                'primary-foreground': 'rgb(255 255 255 / <alpha-value>)',
                'secondary-foreground': 'rgb(31 60 90 / <alpha-value>)',
                'accent-foreground': 'rgb(255 255 255 / <alpha-value>)',
                muted: 'rgb(240 242 244 / <alpha-value>)',
                'muted-foreground': 'rgb(107 114 128 / <alpha-value>)',
                card: 'rgb(255 255 255 / <alpha-value>)',
                'card-foreground': 'rgb(43 43 43 / <alpha-value>)',
                border: 'rgb(226 232 240 / <alpha-value>)',
                destructive: 'rgb(239 68 68 / <alpha-value>)',
                'destructive-foreground': 'rgb(255 255 255 / <alpha-value>)',
                input: 'rgb(226 232 240 / <alpha-value>)',
                ring: 'rgb(31 60 90 / <alpha-value>)',
                navy: '#1F3C5A',
                green: '#3DAA3C',
                teal: '#1A8A7A',
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
}
