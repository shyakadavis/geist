import { type VariantProps, tv } from 'tailwind-variants';
import Root from './project-banner.svelte';
import type { Component } from 'svelte';

const projectBanner_variants = tv({
    slots: {
        base: 'flex items-center justify-center w-full z-30 gap-x-2 py-2 leading-5 border-t border-b min-h-10 -translate-y-px text-[14px]',
        container: 'flex flex-col gap-2 px-6 w-full md:justify-center md:flex-row md:items-center',
        container_content: 'flex items-center gap-2',
        icon: 'w-4 h-4',
        callToAction: 'focus-visible:shadow-focus-ring rounded-[2px] cursor-pointer bg-transparent py-0.5 font-sans font-medium underline border-none underline-offset-[5px] outline-none px-0 h-6 my-[-1px]'
    },
    variants: {
        variant: {
            success: {
                base: 'text-blue-900 bg-blue-100 border-blue-400',
                callToAction: 'focus-visible:!shadow-blue-600 hover:text-blue-900 hover:decoration-blue-500 decoration-blue-400 text-blue-1000'
            },
            warning: {
                base: 'text-amber-900 bg-amber-100 border-amber-400',
                callToAction: 'focus-visible:!shadow-amber-700 hover:text-amber-900 hover:decoration-amber-500 decoration-amber-400 text-amber-1000'
            },
            error: {
                base: 'text-red-900 bg-red-100 border-red-400',
                callToAction: 'focus-visible:!shadow-red-700 hover:text-red-900 hover:decoration-red-500 decoration-red-400 text-red-1000'
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
    icon: Component,
    label: string,
    variant: Variant,
    callToAction: CallToAction
};

export { Root as ProjectBanner, Root, projectBanner_variants };