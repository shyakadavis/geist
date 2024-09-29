import { tv } from 'tailwind-variants';
import Root from './input.svelte';
import Search from './search.svelte';

export const input_variants = tv({
	base: 'h-full w-full rounded-[inherit] bg-background-100 px-3 py-2 text-sm transition-[border-color,box-shadow] delay-0 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-700 focus:outline-none disabled:cursor-not-allowed disabled:bg-background-200 disabled:text-gray-700 disabled:placeholder:text-accents-3',
	variants: {
		size: {
			sm: 'text-sm',
			md: '',
			lg: 'text-base'
		}
	},
	defaultVariants: {
		size: 'md'
	}
});

export { Root as Input, Root, Search, Search as SearchInput };
