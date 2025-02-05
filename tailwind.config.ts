import mask from '@pyncz/tailwind-mask-image';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['dark'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			background: {
				100: 'hsl(var(--background-100) / <alpha-value>)',
				200: 'hsl(var(--background-200) / <alpha-value>)'
			},
			gray: {
				100: 'hsl(var(--gray-100) / <alpha-value>)',
				200: 'hsl(var(--gray-200) / <alpha-value>)',
				300: 'hsl(var(--gray-300) / <alpha-value>)',
				400: 'hsl(var(--gray-400) / <alpha-value>)',
				500: 'hsl(var(--gray-500) / <alpha-value>)',
				600: 'hsl(var(--gray-600) / <alpha-value>)',
				700: 'hsl(var(--gray-700) / <alpha-value>)',
				800: 'hsl(var(--gray-800) / <alpha-value>)',
				900: 'hsl(var(--gray-900) / <alpha-value>)',
				1000: 'hsl(var(--gray-1000) / <alpha-value>)',
				'alpha-100': 'var(--gray-alpha-100)',
				'alpha-200': 'var(--gray-alpha-200)',
				'alpha-300': 'var(--gray-alpha-300)',
				'alpha-400': 'var(--gray-alpha-400)',
				'alpha-500': 'var(--gray-alpha-500)',
				'alpha-600': 'var(--gray-alpha-600)',
				'alpha-700': 'var(--gray-alpha-700)',
				'alpha-800': 'var(--gray-alpha-800)',
				'alpha-900': 'var(--gray-alpha-900)',
				'alpha-1000': 'var(--gray-alpha-1000)'
			},
			blue: {
				100: 'hsl(var(--blue-100) / <alpha-value>)',
				200: 'hsl(var(--blue-200) / <alpha-value>)',
				300: 'hsl(var(--blue-300) / <alpha-value>)',
				400: 'hsl(var(--blue-400) / <alpha-value>)',
				500: 'hsl(var(--blue-500) / <alpha-value>)',
				600: 'hsl(var(--blue-600) / <alpha-value>)',
				700: 'hsl(var(--blue-700) / <alpha-value>)',
				800: 'hsl(var(--blue-800) / <alpha-value>)',
				900: 'hsl(var(--blue-900) / <alpha-value>)',
				1000: 'hsl(var(--blue-1000) / <alpha-value>)'
			},
			red: {
				100: 'hsl(var(--red-100) / <alpha-value>)',
				200: 'hsl(var(--red-200) / <alpha-value>)',
				300: 'hsl(var(--red-300) / <alpha-value>)',
				400: 'hsl(var(--red-400) / <alpha-value>)',
				500: 'hsl(var(--red-500) / <alpha-value>)',
				600: 'hsl(var(--red-600) / <alpha-value>)',
				700: 'hsl(var(--red-700) / <alpha-value>)',
				800: 'hsl(var(--red-800) / <alpha-value>)',
				900: 'hsl(var(--red-900) / <alpha-value>)',
				1000: 'hsl(var(--red-1000) / <alpha-value>)'
			},
			amber: {
				100: 'hsl(var(--amber-100) / <alpha-value>)',
				200: 'hsl(var(--amber-200) / <alpha-value>)',
				300: 'hsl(var(--amber-300) / <alpha-value>)',
				400: 'hsl(var(--amber-400) / <alpha-value>)',
				500: 'hsl(var(--amber-500) / <alpha-value>)',
				600: 'hsl(var(--amber-600) / <alpha-value>)',
				700: 'hsl(var(--amber-700) / <alpha-value>)',
				800: 'hsl(var(--amber-800) / <alpha-value>)',
				900: 'hsl(var(--amber-900) / <alpha-value>)',
				1000: 'hsl(var(--amber-1000) / <alpha-value>)'
			},
			green: {
				100: 'hsl(var(--green-100) / <alpha-value>)',
				200: 'hsl(var(--green-200) / <alpha-value>)',
				300: 'hsl(var(--green-300) / <alpha-value>)',
				400: 'hsl(var(--green-400) / <alpha-value>)',
				500: 'hsl(var(--green-500) / <alpha-value>)',
				600: 'hsl(var(--green-600) / <alpha-value>)',
				700: 'hsl(var(--green-700) / <alpha-value>)',
				800: 'hsl(var(--green-800) / <alpha-value>)',
				900: 'hsl(var(--green-900) / <alpha-value>)',
				1000: 'hsl(var(--green-1000) / <alpha-value>)'
			},
			teal: {
				100: 'hsl(var(--teal-100) / <alpha-value>)',
				200: 'hsl(var(--teal-200) / <alpha-value>)',
				300: 'hsl(var(--teal-300) / <alpha-value>)',
				400: 'hsl(var(--teal-400) / <alpha-value>)',
				500: 'hsl(var(--teal-500) / <alpha-value>)',
				600: 'hsl(var(--teal-600) / <alpha-value>)',
				700: 'hsl(var(--teal-700) / <alpha-value>)',
				800: 'hsl(var(--teal-800) / <alpha-value>)',
				900: 'hsl(var(--teal-900) / <alpha-value>)',
				1000: 'hsl(var(--teal-1000) / <alpha-value>)'
			},
			purple: {
				100: 'hsl(var(--purple-100) / <alpha-value>)',
				200: 'hsl(var(--purple-200) / <alpha-value>)',
				300: 'hsl(var(--purple-300) / <alpha-value>)',
				400: 'hsl(var(--purple-400) / <alpha-value>)',
				500: 'hsl(var(--purple-500) / <alpha-value>)',
				600: 'hsl(var(--purple-600) / <alpha-value>)',
				700: 'hsl(var(--purple-700) / <alpha-value>)',
				800: 'hsl(var(--purple-800) / <alpha-value>)',
				900: 'hsl(var(--purple-900) / <alpha-value>)',
				1000: 'hsl(var(--purple-1000) / <alpha-value>)'
			},
			pink: {
				100: 'hsl(var(--pink-100) / <alpha-value>)',
				200: 'hsl(var(--pink-200) / <alpha-value>)',
				300: 'hsl(var(--pink-300) / <alpha-value>)',
				400: 'hsl(var(--pink-400) / <alpha-value>)',
				500: 'hsl(var(--pink-500) / <alpha-value>)',
				600: 'hsl(var(--pink-600) / <alpha-value>)',
				700: 'hsl(var(--pink-700) / <alpha-value>)',
				800: 'hsl(var(--pink-800) / <alpha-value>)',
				900: 'hsl(var(--pink-900) / <alpha-value>)',
				1000: 'hsl(var(--pink-1000) / <alpha-value>)'
			},
			accents: {
				1: 'hsl(var(--accents-1) / <alpha-value>)',
				2: 'hsl(var(--accents-2) / <alpha-value>)',
				3: 'hsl(var(--accents-3) / <alpha-value>)',
				4: 'hsl(var(--accents-4) / <alpha-value>)',
				5: 'hsl(var(--accents-5) / <alpha-value>)',
				6: 'hsl(var(--accents-6) / <alpha-value>)',
				7: 'hsl(var(--accents-7) / <alpha-value>)',
				8: 'hsl(var(--accents-8) / <alpha-value>)'
			},
			'contrast-fg': 'hsl(var(--contrast-fg) / <alpha-value>)',
			'focus-color': 'hsl(var(--focus-color) / <alpha-value>)'
		},
		extend: {
			boxShadow: {
				'shadow-border': 'var(--shadow-border)',
				'focus-border': 'var(--focus-border)',
				'focus-ring': 'var(--focus-ring)',
				'border-inset': 'var(--shadow-border-inset)',
				'shadow-border-small': 'var(--shadow-border-small)',
				'shadow-menu': 'var(--shadow-menu)',
				'shadow-input': 'var(--shadow-input)',
				'shadow-book': 'var(--shadow-book)'
			},
			fontFamily: {
				sans: ['Geist Sans, sans-serif', ...fontFamily.sans],
				mono: ['Geist Mono, monospace', ...fontFamily.mono]
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--bits-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--bits-accordion-content-height)' },
					to: { height: '0' }
				},
				'skeleton-loading': {
					'0%': { backgroundPosition: '200% 0;' },
					to: { backgroundPosition: '-200% 0;' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'skeleton-loading': 'skeleton-loading 8s ease-in-out infinite'
			},
			transitionDuration: {
				'250': '250ms'
			},
			aspectRatio: {
				book: '49 / 60'
			}
		}
	},
	plugins: [
		animate,
		mask,
		typography,
		function ({ addUtilities }) {
			const newUtilities = {
				'.bg-book-front': {
					background:
						'linear-gradient(180deg, rgba(255, 255, 255, .1), rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0)), hsla(0, 0%, 12%, 1)'
				},
				'.bg-book-pages': {
					background:
						'linear-gradient(90deg, #eaeaea, transparent 70%), linear-gradient(#fff, #fafafa)'
				},
				'.bg-book-bind': {
					background:
						' linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 12%, rgba(255, 255, 255, 0.25) 29.25%, rgba(255, 255, 255, 0) 50.5%, rgba(255, 255, 255, 0) 75.25%, rgba(255, 255, 255, 0.25) 91%, rgba(255, 255, 255, 0)), linear-gradient(90deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.1) 12%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.02) 50%, rgba(0, 0, 0, 0.2) 73.5%, rgba(0, 0, 0, 0.5) 75.25%, rgba(0, 0, 0, 0.15) 85.25%, rgba(0, 0, 0, 0))'
				},
				'.bg-book-textured': {
					backgroundImage: 'url("lib/assets/book-texture.avif")'
				},
				'.transform-book-pages': {
					transform:
						'translateX(calc(var(--book-width)* 1px - 29cqw / 2 - 3px)) rotateY(90deg) translateX(calc(29cqw / 2))'
				},
				'.transform-book-back': {
					transform: 'translateZ(calc(-1* 29cqw))'
				},
				'.rounded-book': {
					borderRadius: '6px 4px 4px 6px'
				},
				'.perspective-900': {
					perspective: '900px'
				},
				'.book-transform': {
					transform: 'rotateY(-20deg) scale(1.03)'
				},
				'.rotate-y-0': {
					transform: 'rotateY(0deg)'
				},
				'.preserve-3d': {
					transformStyle: 'preserve-3d'
				},
				'.inline-size': {
					containerType: 'inline-size'
				},
				'.translate-z-0': {
					transform: 'translateZ(0)'
				},
				'.no-scrollbar': {
					'-ms-overflow-style': 'none',
					'scrollbar-width': 'none',
					'&::-webkit-scrollbar': {
						display: 'none'
					}
				}
			};
			addUtilities(newUtilities);
		}
	]
};

export default config;
