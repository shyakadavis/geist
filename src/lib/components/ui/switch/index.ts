import { tv, type VariantProps } from 'tailwind-variants';
import Root from './switch.svelte';

export const switch_variants = tv({
	base: 'group inline-flex shrink-0 cursor-pointer items-center rounded-full border border-gray-alpha-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-color focus-visible:ring-offset-2 focus-visible:ring-offset-background-200 disabled:cursor-not-allowed data-[state=unchecked]:bg-gray-100 disabled:data-[state=unchecked]:bg-background-100',
	variants: {
		variant: {
			default:
				'data-[state=checked]:bg-blue-700 disabled:data-[state=checked]:border-accents-2 disabled:data-[state=checked]:bg-accents-1',
			subtle: 'data-[state=checked]:bg-gray-100 disabled:data-[state=checked]:bg-background-100'
		},
		size: {
			md: 'h-[14px] w-[28px]',
			lg: 'h-[24px] w-[40px]'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'md'
	}
});

export type Variant = VariantProps<typeof switch_variants>['variant'];
export type Size = VariantProps<typeof switch_variants>['size'];

export { Root, Root as Switch };
