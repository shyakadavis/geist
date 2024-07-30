import { type VariantProps, tv } from 'tailwind-variants';

export { default as Note } from './note.svelte';

export const note_variants = tv({
	base: 'flex grow items-center justify-between gap-3 text-pretty rounded-md border data-[disabled=true]:border-gray-alpha-200 data-[disabled=true]:bg-transparent data-[disabled=true]:text-gray-700 hover:[&>div>a]:underline [&>div>a]:data-[disabled=true]:text-gray-900',
	variants: {
		variant: {
			secondary: 'bg-transparent text-gray-900 selection:bg-gray-700 [&>div>a]:text-gray-1000',
			success: 'border-blue-400 text-blue-900 selection:bg-blue-700 [&>div>a]:text-blue-1000',
			error: 'border-red-400 text-red-900 selection:bg-red-700 [&>div>a]:text-red-1000',
			warning: 'border-amber-400 text-amber-900 selection:bg-amber-700 [&>div>a]:text-amber-1000',
			violet:
				'border-purple-400 text-purple-900 selection:bg-purple-700 [&>div>a]:text-purple-1000',
			cyan: 'border-teal-400 text-teal-900 selection:bg-teal-700 [&>div>a]:text-teal-1000'
		},
		size: {
			sm: 'min-h-[34px] px-2 py-1.5 text-[13px] leading-6',
			md: 'min-h-10 px-3 py-2 text-[14px] leading-6',
			lg: 'min-h-12 px-3 py-[11px] text-base'
		},
		fill: { true: true, false: false }
	},
	compoundVariants: [
		{ variant: 'secondary', fill: true, class: 'bg-gray-200' },
		{ variant: 'success', fill: true, class: 'bg-blue-200' },
		{ variant: 'error', fill: true, class: 'bg-red-200' },
		{ variant: 'warning', fill: true, class: 'bg-amber-200' },
		{ variant: 'violet', fill: true, class: 'bg-purple-200' },
		{ variant: 'cyan', fill: true, class: 'bg-teal-200' }
	],
	defaultVariants: {
		variant: 'secondary',
		size: 'md',
		fill: false
	}
});

type Variant = VariantProps<typeof note_variants>['variant'];
type Size = VariantProps<typeof note_variants>['size'];
type Fill = VariantProps<typeof note_variants>['fill'];

export type Props = {
	variant?: Variant;
	size?: Size;
	fill?: Fill;
	disabled?: boolean;
};
