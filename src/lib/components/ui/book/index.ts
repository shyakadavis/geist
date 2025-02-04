import type { Icons } from '$lib/assets/icons/index.js';
import { type VariantProps, tv } from 'tailwind-variants';
import Root from './book.svelte';
import type { Component, SvelteComponent } from 'svelte';

const book_variants = tv({
    base: '',
    variants: {
        variant: {
            simple: '',
            stripe: ''
        },
        textured: {
            true: ''
        }
    },
    defaultVariants: {
        variant: 'stripe',
        textured: false
    }
});

type Variant = VariantProps<typeof book_variants>['variant'];

type Textured = VariantProps<typeof book_variants>['textured'];

export type NormalBook = {
    color?: string;
    textColor?: string;
    title: string;
    variant?: Variant;
    width?: number;
    textured?: Textured;
    illustration?: Component
};

export { Root as Book, Root, book_variants };