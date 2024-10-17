import type { Icons } from '$lib/assets/icons/index.js';
import { type VariantProps, tv } from 'tailwind-variants';
import Root from './button.svelte';

const button_variants = tv({
	base: 'inline-flex select-none items-center justify-center gap-x-1.5 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background-200 transition-[border-color,background,color,transform,box-shadow] ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-color focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:border disabled:bg-gray-100 disabled:text-gray-700 [&>svg]:size-4',
	variants: {
		variant: {
			default: 'bg-gray-1000 text-background-100',
			secondary: 'bg-background-100 text-gray-1000 shadow-shadow-border hover:bg-gray-alpha-100',
			tertiary: 'bg-transparent hover:bg-gray-alpha-200',
			error: 'bg-red-700 text-contrast-fg hover:bg-red-800',
			warning: 'active:bg-[#a35200; bg-amber-800 text-[#0a0a0a] hover:bg-[#d27504]',
			success: 'bg-blue-700 text-contrast-fg hover:bg-blue-800'
		},
		size: {
			sm: 'h-8 px-3',
			md: 'h-10 px-4 py-2',
			lg: 'h-12 rounded-lg px-8 text-base'
		},
		svg_size: {
			tiny: 'size-6 p-0',
			sm: 'size-8 p-0',
			md: 'size-10 p-0',
			lg: 'size-12 p-0'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'md'
	}
});

type Variant = VariantProps<typeof button_variants>['variant'];

type Size = VariantProps<typeof button_variants>['size'];

type SVGSize = VariantProps<typeof button_variants>['svg_size'];

export type SVGButton = {
	'aria-label': string;
	svg_only: true;
	variant?: Variant;
	size: SVGSize;
	shape: 'square' | 'circle';
};

export type NormalButton = {
	svg_only?: false;
	size?: Exclude<Size, 'tiny'>;
	variant?: Variant;
	affix?: typeof Icons.ArrowLeft;
	suffix?: typeof Icons.ArrowLeft;
	shape?: 'rounded';
	shadow?: boolean;
	loading?: boolean;
	disabled?: boolean;
};

export { Root as Button, Root, button_variants };
