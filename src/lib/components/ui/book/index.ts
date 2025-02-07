import { type VariantProps, tv } from 'tailwind-variants';
import Root from './book.svelte';
import type { Component } from 'svelte';

const book_variants = tv({
	slots: {
		container:
			'inline-block w-fit transition-transform duration-250 ease-out perspective-900 hover:*:book-transform',
		book: 'relative aspect-book w-fit min-w-[calc(var(--book-width)*1px)] origin-[center_left] rotate-0 transition-transform duration-250 ease-out preserve-3d inline-size',
		front:
			'min-w-[calc(var(--book-width)* 1px)] w-[calc(var(--book-width)* 1px)] relative flex h-full flex-col items-stretch overflow-hidden bg-gray-200 shadow-shadow-book bg-book-front rounded-book translate-z-0',
		stripe:
			'relative flex w-full flex-1 flex-row items-stretch gap-2 overflow-hidden bg-[var(--book-color)] translate-z-0',
		body: 'relative flex w-full flex-1 flex-row items-stretch overflow-hidden translate-z-0',
		bind: 'absolute h-full w-[8.2%] mix-blend-overlay bg-book-bind',
		stripe_illustration: 'w-full object-cover',
		body_illustration:
			'flex w-full flex-col items-stretch object-cover p-[6.1%] pl-[14.2%] text-[var(--book-text-color)] inline-size',
		textured:
			'pointer-events-none absolute inset-0 rounded-[var(--book-border-radius)] bg-cover bg-no-repeat opacity-30 mix-blend-hard-light brightness-110 bg-book-textured',
		pages:
			'absolute top-[3px] h-[calc(100%-2*3px)] w-[calc(29cqw-2px)] bg-book-pages transform-book-pages',
		back: 'absolute left-0 top-0 h-full min-w-[calc(var(--book-width)*1px)] transform-book-back rounded-book'
	},
	variants: {
		variant: {
			simple: {
				body_illustration: 'gap-[calc((16px/var(--book-default-width))*var(--book-width))]'
			},
			stripe: {
				body_illustration:
					'justify-between gap-[calc((16px/var(--book-default-width))*var(--book-width))]'
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
	text_color?: string;
	title: string;
	variant?: Variant;
	width?: number | { sm?: number; md?: number; lg?: number; xl?: number; '2xl'?: number };
	textured?: boolean;
	illustration?: Component;
};

export const simpleIllustration =
	'<svg fill="none" height="56" viewBox="0 0 36 56" width="36" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.03113 28.0005C6.26017 23.1765 11.7592 20.0005 18 20.0005C24.2409 20.0005 29.7399 23.1765 32.9689 28.0005C29.7399 32.8244 24.2409 36.0005 18 36.0005C11.7592 36.0005 6.26017 32.8244 3.03113 28.0005Z" fill="#0070F3" fill-rule="evenodd"></path><path clip-rule="evenodd" d="M32.9691 28.0012C34.8835 25.1411 36 21.7017 36 18.0015C36 8.06034 27.9411 0.00146484 18 0.00146484C8.05887 0.00146484 0 8.06034 0 18.0015C0 21.7017 1.11648 25.1411 3.03094 28.0012C6.25996 23.1771 11.7591 20.001 18 20.001C24.2409 20.001 29.74 23.1771 32.9691 28.0012Z" fill="#45DEC4" fill-rule="evenodd"></path><path clip-rule="evenodd" d="M32.9692 28.0005C29.7402 32.8247 24.241 36.001 18 36.001C11.759 36.001 6.25977 32.8247 3.03077 28.0005C1.11642 30.8606 0 34.2999 0 38C0 47.9411 8.05887 56 18 56C27.9411 56 36 47.9411 36 38C36 34.2999 34.8836 30.8606 32.9692 28.0005Z" fill="#E5484D" fill-rule="evenodd"></path></svg>';

export { Root as Book, Root, book_variants };
