import { tv, type VariantProps } from 'tailwind-variants';
import Snippet from './snippet.svelte';

export const snippet_variants = tv({
	base: 'relative w-fit max-w-full rounded-md border bg-background-100 py-2.5 pl-3 pr-12',
	variants: {
		variant: {
			default: 'border-gray-alpha-400',
			success: 'bg-blue-100 text-blue-900',
			secondary: 'bg-gray-100 text-gray-900',
			error: 'bg-red-100 text-red-900',
			warning: 'bg-amber-100 text-amber-900'
		}
	}
});

export const copy_button_variants = tv({
	base: 'absolute right-3 top-1/2 -translate-y-1/2 transition-opacity ease-in-out hover:text-opacity-80',
	variants: {
		variant: {
			default: 'text-gray-1000',
			success: 'text-blue-900',
			secondary: 'text-gray-900',
			error: 'text-red-900',
			warning: 'text-amber-900'
		}
	}
});

export type Variant = VariantProps<typeof snippet_variants>['variant'];

export { Snippet };
