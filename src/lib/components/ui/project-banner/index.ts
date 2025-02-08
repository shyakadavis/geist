import { type VariantProps, tv } from 'tailwind-variants';
import Root from './project-banner.svelte';
import type { Component } from 'svelte';

const projectBanner_variants = tv({
	slots: {
		base: 'z-30 flex min-h-10 w-full -translate-y-px items-center justify-center gap-x-2 border-b border-t py-2 text-[14px] leading-5',
		container: 'flex w-full flex-col gap-2 px-6 md:flex-row md:items-center md:justify-center',
		container_content: 'flex items-center gap-2',
		icon: 'h-4 w-4',
		callToAction:
			'my-[-1px] h-6 cursor-pointer rounded-[2px] border-none bg-transparent px-0 py-0.5 font-sans font-medium underline underline-offset-[5px] outline-none focus-visible:shadow-focus-ring'
	},
	variants: {
		variant: {
			success: {
				base: 'border-blue-400 bg-blue-100 text-blue-900',
				callToAction:
					'text-blue-1000 decoration-blue-400 hover:text-blue-900 hover:decoration-blue-500 focus-visible:!shadow-blue-600'
			},
			warning: {
				base: 'border-amber-400 bg-amber-100 text-amber-900',
				callToAction:
					'text-amber-1000 decoration-amber-400 hover:text-amber-900 hover:decoration-amber-500 focus-visible:!shadow-amber-700'
			},
			error: {
				base: 'border-red-400 bg-red-100 text-red-900',
				callToAction:
					'text-red-1000 decoration-red-400 hover:text-red-900 hover:decoration-red-500 focus-visible:!shadow-red-700'
			}
		}
	},
	defaultVariants: {
		variant: 'success'
	}
});

type Variant = VariantProps<typeof projectBanner_variants>['variant'];

type CallToAction = {
	label: string;
	href?: string;
	onClick?: Function;
};

export type NormalProjectBanner = {
	icon: Component;
	label: string;
	variant: Variant;
	callToAction: CallToAction;
};

export { Root as ProjectBanner, Root, projectBanner_variants };
