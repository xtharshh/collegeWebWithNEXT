import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'eclipse': "url('https://res.cloudinary.com/djcbdfehg/image/upload/v1734984686/downloadfile-1_apro5p.jpg')",
        'newEclipse': "url('https://res.cloudinary.com/djcbdfehg/image/upload/v1711614262/samples/ecommerce/leather-bag-gray.jpg')",
      },
      colors: {
        customBeige: 'rgba(156, 132, 73, 0.9)',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        newMono: ['Playfair Display', 'serif'],
        new: ['Lilita One', 'serif'],
        newLuck: ['Raleway', 'serif'],
        newGab: ['Gabarito', 'serif'],
        cursive: ['Brush Script MT', 'cursive'],
      },
      screens: {
        'custom-md': '780px',
        'custom-nmd': '485px',
        'custom-lg': '1050px',
        sm: '576px',
        lg:"670px",
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui(), require('tailwindcss-animate')],
} satisfies Config;
