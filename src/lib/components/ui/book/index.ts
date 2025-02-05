import type { Icons } from '$lib/assets/icons/index.js';
import { type VariantProps, tv } from 'tailwind-variants';
import Root from './book.svelte';
import type { Component, SvelteComponent } from 'svelte';

const book_variants = tv({
    slots: {
        container: 'group perspective-900 inline-block w-fit',
        book: 'group-hover:-rotate-y-20 aspect-book w-fit rotate-0 relative preserve-3d min-w-[calc(var(--book-width)*1px)] transition-transform duration-250 ease-out inline-size',
        front: 'flex flex-col bg-gray-200 bg-book-front shadow-shadow-book items-stretch overflow-hidden relative translate-z-0 h-full min-w-[calc(var(--book-width)* 1px)] w-[calc(var(--book-width)* 1px)] rounded-book',
        stripe: 'flex flex-row items-stretch gap-2 translate-z-0 bg-[var(--book-color)] w-full relative overflow-hidden flex-1',
        body: 'flex flex-row items-stretch gap-2 translate-z-0 w-full relative overflow-hidden flex-1',
        bind: 'bg-book-bind h-full w-[8.2%] mix-blend-overlay',
        stripe_illustration: 'object-cover w-full',
        body_illustration: 'object-cover w-full text-[var(--book-text-color)] flex flex-col items-stretch inline-size p-[6.1%]',
        textured: 'absolute inset-0 bg-book-textured bg-cover bg-no-repeat opacity-30 pointer-events-none mix-blend-hard-light brightness-110 rounded-[var(--book-border-radius)]',
        pages: 'w-[calc(29cqw-2px)] top-[3px] absolute bg-book-pages transform-book-pages h-[calc(100%-2*3px)]',
        back: 'absolute top-0 left-0 min-w-[calc(var(--book-width)*1px)] h-full rounded-book transform-book-back'
    },
    variants: {
        variant: {
            simple: {
                body_illustration: 'gap-[calc((16px/var(--book-default-width))*var(--book-width))]',
            },
            stripe: {
                body_illustration: 'justify-between gap-[calc((24px/var(--book-default-width))*var(--book-width))]'
            }
        }
    },
    defaultVariants: {
        variant: 'stripe'
    }
});

type Variant = VariantProps<typeof book_variants>['variant'];

export type NormalBook = {
    color?: string;
    textColor?: string;
    title: string;
    variant?: Variant;
    width?: number | { sm?: number, md?: number, lg?: number, xl?: number, '2xl'?: number};
    textured?: boolean;
    illustration?: Component
};

export const simpleIllustration = '<svg fill="none" height="56" viewBox="0 0 36 56" width="36" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.03113 28.0005C6.26017 23.1765 11.7592 20.0005 18 20.0005C24.2409 20.0005 29.7399 23.1765 32.9689 28.0005C29.7399 32.8244 24.2409 36.0005 18 36.0005C11.7592 36.0005 6.26017 32.8244 3.03113 28.0005Z" fill="#0070F3" fill-rule="evenodd"></path><path clip-rule="evenodd" d="M32.9691 28.0012C34.8835 25.1411 36 21.7017 36 18.0015C36 8.06034 27.9411 0.00146484 18 0.00146484C8.05887 0.00146484 0 8.06034 0 18.0015C0 21.7017 1.11648 25.1411 3.03094 28.0012C6.25996 23.1771 11.7591 20.001 18 20.001C24.2409 20.001 29.74 23.1771 32.9691 28.0012Z" fill="#45DEC4" fill-rule="evenodd"></path><path clip-rule="evenodd" d="M32.9692 28.0005C29.7402 32.8247 24.241 36.001 18 36.001C11.759 36.001 6.25977 32.8247 3.03077 28.0005C1.11642 30.8606 0 34.2999 0 38C0 47.9411 8.05887 56 18 56C27.9411 56 36 47.9411 36 38C36 34.2999 34.8836 30.8606 32.9692 28.0005Z" fill="#E5484D" fill-rule="evenodd"></path></svg>';

export { Root as Book, Root, book_variants };