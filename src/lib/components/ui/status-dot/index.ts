import { tv, type VariantProps } from 'tailwind-variants';

export { default as StatusDot } from './status-dot.svelte';

export const status_dot_variants = tv({
	base: 'size-2.5 rounded-full',
	variants: {
		variant: {
			QUEUED: 'bg-accents-2',
			BUILDING: 'bg-[#f5a623]',
			ERROR: 'bg-[#ff0000]',
			READY: 'bg-teal-900',
			CANCELED: 'bg-accents-2'
		}
	}
});

export type Variant = VariantProps<typeof status_dot_variants>['variant'];
