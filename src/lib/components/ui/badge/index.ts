import { type VariantProps, tv } from 'tailwind-variants';

export const badge_variants = tv({
	base: 'inline-flex shrink-0 select-none items-center justify-center whitespace-nowrap rounded-full font-medium capitalize tabular-nums transition-colors hover:cursor-auto focus:outline-none focus:ring-2 focus:ring-focus-color focus:ring-offset-2',
	variants: {
		variant: {
			gray: 'bg-gray-700 text-contrast-fg',
			'gray-subtle': 'bg-gray-200 text-gray-1000',
			blue: 'bg-blue-700 text-contrast-fg',
			'blue-subtle': 'bg-blue-200 text-blue-900',
			purple: 'bg-purple-700 text-contrast-fg',
			'purple-subtle': 'bg-purple-200 text-purple-900',
			amber: 'bg-amber-700 text-contrast-fg',
			'amber-subtle': 'bg-amber-200 text-amber-900',
			red: 'bg-red-700 text-contrast-fg',
			'red-subtle': 'bg-red-200 text-red-900',
			pink: 'bg-pink-700 text-contrast-fg',
			'pink-subtle': 'bg-pink-200 text-pink-900',
			green: 'bg-green-700 text-contrast-fg',
			'green-subtle': 'bg-green-200 text-green-900',
			teal: 'bg-teal-700 text-contrast-fg',
			'teal-subtle': 'bg-teal-200 text-teal-900',
			inverted: 'bg-gray-1000 text-gray-100',
			trial: 'text-contrast-fg [background:_linear-gradient(135deg,#0070f3,#f81ce5)]',
			turbo: 'text-contrast-fg [background:_linear-gradient(135deg,#ff1e56,#0096ff)]'
		},
		size: {
			sm: 'h-5 gap-[3px] px-1.5 text-[11px] [&>svg]:size-[11px]',
			md: 'h-6 gap-1 px-2.5 text-xs [&>svg]:size-[14px]',
			lg: 'h-8 gap-1.5 px-3 text-sm [&>svg]:size-4'
		}
	},
	defaultVariants: {
		size: 'md'
	}
});

export type Variant = VariantProps<typeof badge_variants>['variant'];

export type Size = VariantProps<typeof badge_variants>['size'];

export { default as Badge } from './badge.svelte';
