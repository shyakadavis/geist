import mask from '@pyncz/tailwind-mask-image';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
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
				100: 'var(--background-100)',
				200: 'var(--background-200)'
			},
			gray: {
				100: 'var(--gray-100)',
				200: 'var(--gray-200)',
				300: 'var(--gray-300)',
				400: 'var(--gray-400)',
				500: 'var(--gray-500)',
				600: 'var(--gray-600)',
				700: 'var(--gray-700)',
				800: 'var(--gray-800)',
				900: 'var(--gray-900)',
				1000: 'var(--gray-1000)',
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
				100: 'var(--blue-100)',
				200: 'var(--blue-200)',
				300: 'var(--blue-300)',
				400: 'var(--blue-400)',
				500: 'var(--blue-500)',
				600: 'var(--blue-600)',
				700: 'var(--blue-700)',
				800: 'var(--blue-800)',
				900: 'var(--blue-900)',
				1000: 'var(--blue-1000)'
			},
			red: {
				100: 'var(--red-100)',
				200: 'var(--red-200)',
				300: 'var(--red-300)',
				400: 'var(--red-400)',
				500: 'var(--red-500)',
				600: 'var(--red-600)',
				700: 'var(--red-700)',
				800: 'var(--red-800)',
				900: 'var(--red-900)',
				1000: 'var(--red-1000)'
			},
			amber: {
				100: 'var(--amber-100)',
				200: 'var(--amber-200)',
				300: 'var(--amber-300)',
				400: 'var(--amber-400)',
				500: 'var(--amber-500)',
				600: 'var(--amber-600)',
				700: 'var(--amber-700)',
				800: 'var(--amber-800)',
				900: 'var(--amber-900)',
				1000: 'var(--amber-1000)'
			},
			green: {
				100: 'var(--green-100)',
				200: 'var(--green-200)',
				300: 'var(--green-300)',
				400: 'var(--green-400)',
				500: 'var(--green-500)',
				600: 'var(--green-600)',
				700: 'var(--green-700)',
				800: 'var(--green-800)',
				900: 'var(--green-900)',
				1000: 'var(--green-1000)'
			},
			teal: {
				100: 'var(--teal-100)',
				200: 'var(--teal-200)',
				300: 'var(--teal-300)',
				400: 'var(--teal-400)',
				500: 'var(--teal-500)',
				600: 'var(--teal-600)',
				700: 'var(--teal-700)',
				800: 'var(--teal-800)',
				900: 'var(--teal-900)',
				1000: 'var(--teal-1000)'
			},
			purple: {
				100: 'var(--purple-100)',
				200: 'var(--purple-200)',
				300: 'var(--purple-300)',
				400: 'var(--purple-400)',
				500: 'var(--purple-500)',
				600: 'var(--purple-600)',
				700: 'var(--purple-700)',
				800: 'var(--purple-800)',
				900: 'var(--purple-900)',
				1000: 'var(--purple-1000)'
			},
			pink: {
				100: 'var(--pink-100)',
				200: 'var(--pink-200)',
				300: 'var(--pink-300)',
				400: 'var(--pink-400)',
				500: 'var(--pink-500)',
				600: 'var(--pink-600)',
				700: 'var(--pink-700)',
				800: 'var(--pink-800)',
				900: 'var(--pink-900)',
				1000: 'var(--pink-1000)'
			},
			accents: {
				1: 'var(--accents-1)',
				2: 'var(--accents-2)',
				3: 'var(--accents-3)',
				4: 'var(--accents-4)',
				5: 'var(--accents-5)',
				6: 'var(--accents-6)',
				7: 'var(--accents-7)',
				8: 'var(--accents-8)'
			},
			'contrast-fg': 'var(--contrast-fg)',
			'focus-color': 'var(--focus-color)'
		},
		extend: {
			boxShadow: {
				'shadow-border': 'var(--shadow-border)',
				'focus-border': 'var(--focus-border)',
				'focus-ring': 'var(--focus-ring)',
				'border-inset': 'var(--shadow-border-inset)',
				'shadow-border-small': 'var(--shadow-border-small)',
				'shadow-menu': 'var(--shadow-menu)',
				'shadow-input': 'var(--shadow-input)'
			},
			fontFamily: {
				sans: ['Geist Sans, sans-serif', ...fontFamily.sans],
				mono: ['Geist Mono, monospace', ...fontFamily.mono]
			}
		}
	},
	plugins: [
		typography,
		mask,
		function ({ addUtilities }) {
			const newUtilities = {
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
