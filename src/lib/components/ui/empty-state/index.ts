import type { Icons } from '$lib/assets/icons';
import { type VariantProps, tv } from 'tailwind-variants';

export { default as EmptyState } from './empty-state.svelte';

export const badge_variants = tv({
	base: 'grid place-items-center gap-4 text-gray-900',
	variants: {
		variant: {}
	},
	defaultVariants: {}
});

type Variant = VariantProps<typeof badge_variants>['variant'];

export type Props = {
	variant?: Variant;
	icon?: typeof Icons.Shield;
	title: string;
	description: string;
	icon_size?: number;
};
