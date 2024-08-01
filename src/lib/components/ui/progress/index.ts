import { tv, type VariantProps } from 'tailwind-variants';
import Root from './progress.svelte';

export const progress_bar_variants = tv({
	base: 'h-full w-full flex-1 rounded-full transition-[width,transform,background-color] ease-in',
	variants: {
		variant: {
			default: 'bg-gray-200',
			success: 'bg-blue-700',
			error: 'bg-red-700',
			warning: 'bg-amber-700',
			secondary: 'bg-gray-700'
		}
	},
	defaultVariants: {
		variant: 'default'
	}
});

type Variant = VariantProps<typeof progress_bar_variants>['variant'];

export type Props = {
	variant?: Variant;
	colors?: Record<number, string>;
};

export { Root as Progress, Root };
