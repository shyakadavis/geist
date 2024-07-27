import type { Icons } from '$lib/assets/icons';
import type { HTMLInputAttributes } from 'svelte/elements';
import { tv } from 'tailwind-variants';
import Root from './input.svelte';
import Search from './search.svelte';

export const input_variants = tv({
	base: 'h-full w-full rounded-[inherit] bg-background-100 px-3 py-2 text-sm transition-[border-color,box-shadow] delay-0 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-700 focus:outline-none disabled:cursor-not-allowed disabled:bg-background-200 disabled:text-gray-700 disabled:placeholder:text-accents-3',
	variants: {
		size: {
			sm: 'text-sm',
			md: '',
			lg: 'text-base'
		}
	},
	defaultVariants: {
		size: 'md'
	}
});

export type Props = Omit<HTMLInputAttributes, 'size'> & {
	size?: 'sm' | 'md' | 'lg';
	'aria-labelledby': string;
	affix?: typeof Icons.ArrowCircleUp | string;
	suffix?: typeof Icons.ArrowCircleUp | string;
	affix_styling?: boolean;
	suffix_styling?: boolean;
	label?: string;
	el?: HTMLInputElement;
};

export type FormInputEvent<T extends Event = Event> = T & {
	currentTarget: EventTarget & HTMLInputElement;
};

export type InputEvents = {
	blur: FormInputEvent<FocusEvent>;
	change: FormInputEvent<Event>;
	click: FormInputEvent<MouseEvent>;
	focus: FormInputEvent<FocusEvent>;
	focusin: FormInputEvent<FocusEvent>;
	focusout: FormInputEvent<FocusEvent>;
	keydown: FormInputEvent<KeyboardEvent>;
	keypress: FormInputEvent<KeyboardEvent>;
	keyup: FormInputEvent<KeyboardEvent>;
	mouseover: FormInputEvent<MouseEvent>;
	mouseenter: FormInputEvent<MouseEvent>;
	mouseleave: FormInputEvent<MouseEvent>;
	mousemove: FormInputEvent<MouseEvent>;
	paste: FormInputEvent<ClipboardEvent>;
	input: FormInputEvent<InputEvent>;
	wheel: FormInputEvent<WheelEvent>;
};

export { Root as Input, Root, Search, Search as SearchInput };
