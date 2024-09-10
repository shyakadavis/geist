import { tv, type VariantProps } from 'tailwind-variants';
import Snippet from './snippet.svelte';

export const snippet_variants = tv({
	base: 'relative w-fit max-w-full rounded-md border bg-background-100 py-2.5 pl-3 pr-12',
	variants: {
		variant: {
			default: 'border-gray-alpha-400',
			success: 'border-blue-600 border-opacity-35 bg-blue-600 bg-opacity-15 text-blue-600',
			error: 'border-red-600 border-opacity-35 bg-red-600 bg-opacity-15 text-red-600',
			warning: 'border-amber-600 border-opacity-35 bg-amber-600 bg-opacity-15 text-amber-600'
		}
	}
});

export const copy_button_variants = tv({
	base: 'absolute right-3 top-1/2 -translate-y-1/2 transition-opacity ease-in-out hover:text-opacity-80',
	variants: {
		variant: {
			default: 'text-gray-1000',
			success: 'text-blue-700',
			error: 'text-red-600',
			warning: 'text-amber-600'
		}
	}
});

type Variant = VariantProps<typeof snippet_variants>['variant'];

export type Props = {
	variant?: Variant;
	text: string | string[];
	class?: string;
	prompt?: boolean;
	on_copy?: () => void;
	inverted?: boolean;
};

export { Snippet };
