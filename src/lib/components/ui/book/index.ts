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

export { Root as Book, Root, book_variants };
