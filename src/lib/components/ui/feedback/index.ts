import { type VariantProps, tv } from 'tailwind-variants';
export { default as Feedback } from './feedback.svelte';

export const feedback_variants = tv({
	base: '',
	variants: {
		variant: {
			default: '',
			inline: ''
		}
	},
	defaultVariants: {
		variant: 'default'
	}
});

type Variant = VariantProps<typeof feedback_variants>['variant'];

export type Props = {
	variant?: Variant;
	label: string;
};
