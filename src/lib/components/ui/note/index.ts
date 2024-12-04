import { type VariantProps, tv } from 'tailwind-variants';

export const note_variants = tv({
	base: 'flex grow flex-wrap items-center justify-between gap-3 text-pretty rounded-md border data-[disabled=true]:border-gray-alpha-200 data-[disabled=true]:bg-transparent data-[disabled=true]:text-gray-700 sm:flex-nowrap hover:[&>div>div>a]:underline [&>div>div>a]:data-[disabled=true]:text-gray-900',
	variants: {
		variant: {
			secondary: 'bg-transparent text-gray-900 selection:bg-gray-700 [&>div>div>a]:text-gray-1000',
			success: 'border-blue-400 text-blue-900 selection:bg-blue-700 [&>div>div>a]:text-blue-1000',
			error: 'border-red-400 text-red-900 selection:bg-red-700 [&>div>div>a]:text-red-1000',
			warning:
				'border-amber-400 text-amber-900 selection:bg-amber-700 [&>div>div>a]:text-amber-1000',
			violet:
				'border-purple-400 text-purple-900 selection:bg-purple-700 [&>div>div>a]:text-purple-1000',
			cyan: 'border-teal-400 text-teal-900 selection:bg-teal-700 [&>div>div>a]:text-teal-1000'
		},
		size: {
			sm: 'min-h-[34px] px-2 py-1.5 text-[13px] leading-6',
			md: 'min-h-10 px-3 py-2 text-[14px] leading-6',
			lg: 'min-h-12 px-3 py-[11px] text-base'
		},
		fill: { true: true, false: false }
	},
	compoundVariants: [
		{ variant: 'secondary', fill: true, class: 'border-gray-200 bg-gray-200' },
		{ variant: 'success', fill: true, class: 'border-blue-200 bg-blue-200' },
		{ variant: 'error', fill: true, class: 'border-red-200 bg-red-200' },
		{ variant: 'warning', fill: true, class: 'border-amber-200 bg-amber-200' },
		{ variant: 'violet', fill: true, class: 'border-purple-200 bg-purple-200' },
		{ variant: 'cyan', fill: true, class: 'border-teal-200 bg-teal-200' }
	],
	defaultVariants: {
		variant: 'secondary',
		size: 'md',
		fill: false
	}
});

export type Variant = VariantProps<typeof note_variants>['variant'];
export type Size = VariantProps<typeof note_variants>['size'];
export type Fill = VariantProps<typeof note_variants>['fill'];

export { default as Note } from './note.svelte';
