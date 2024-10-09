import { type VariantProps, tv } from 'tailwind-variants';

export { default as Error } from './error.svelte';

export const error_variants = tv({
	base: 'inline-flex items-center gap-2 break-words text-red-900',
	variants: {
		size: {
			sm: 'text-[13px] font-normal',
			md: 'text-sm font-normal',
			lg: 'text-base font-medium'
		}
	},
	defaultVariants: {
		size: 'md'
	}
});

export type Size = VariantProps<typeof error_variants>['size'];
