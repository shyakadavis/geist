import { type VariantProps, tv } from 'tailwind-variants';
import Link from './link.svelte';

const link_variants = tv({
	base: 'inline-flex select-none items-center justify-center gap-x-1 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background-200 transition-[background,color,transform,box-shadow] ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-color focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:text-gray-700 [&>svg]:size-3',
	variants: {
		variant: {
			default: '',
			secondary: 'text-accents-5 hover:text-gray-1000',
			tertiary: '',
			error: '',
			warning: '',
			success: 'text-blue-900'
		}
	},
	defaultVariants: {
		variant: 'default'
	}
});

export type Variant = VariantProps<typeof link_variants>['variant'];

export { Link, link_variants };
