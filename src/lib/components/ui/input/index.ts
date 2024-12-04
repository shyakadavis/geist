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

/**
 * Constructs a new type by omitting properties from type
 * 'T' that exist in type 'U'.
 *
 * @template T - The base object type from which properties will be omitted.
 * @template U - The object type whose properties will be omitted from 'T'.
 * @example
 * type Result = Without<{ a: number; b: string; }, { b: string; }>;
 * // Result type will be { a: number; }
 */
export type Without<T extends object, U extends object> = Omit<T, keyof U>;

export { Root as Input, Root, Search, Search as SearchInput };
