import { browser } from '$app/environment';
import { type VariantProps, tv } from 'tailwind-variants';

export { default as Kbd } from './kbd.svelte';

export const kbd_variants = tv({
	base: 'ml-1 inline-flex h-6 min-w-6 items-center justify-center gap-1 rounded bg-background-100 px-1.5 font-sans font-medium text-gray-1000 shadow-shadow-border',
	variants: {
		size: {
			sm: '[&>span]:text-xs',
			md: '[&>span]:text-sm'
		}
	},
	defaultVariants: {
		size: 'md'
	}
});

export type Size = VariantProps<typeof kbd_variants>['size'];

export function is_mac_os() {
	if (!browser) return false;
	return navigator.userAgent.includes('Macintosh');
}

export const keys_map = {
	meta: is_mac_os() ? '⌘' : 'Ctrl',
	shift: is_mac_os() ? '⇧' : 'Shift',
	option: is_mac_os() ? '⌥' : 'Alt',
	control: is_mac_os() ? '⌃' : 'Ctrl',
	delete: is_mac_os() ? '⌫' : 'Del',
	return: is_mac_os() ? '⏎' : 'Enter',
	enter: is_mac_os() ? '⏎' : 'Enter',
	escape: is_mac_os() ? '⎋' : 'Esc',
	left: '←',
	up: '↑',
	right: '→',
	down: '↓',
	home: is_mac_os() ? '⇱' : 'Home',
	end: is_mac_os() ? '⇲' : 'End',
	pageup: is_mac_os() ? '⇞' : 'PgUp',
	pagedown: is_mac_os() ? '⇟' : 'PgDn',
	'[': '[',
	']': ']',
	tab: 'tab',
	a: 'a',
	b: 'b',
	c: 'c',
	d: 'd',
	e: 'e',
	f: 'f',
	g: 'g',
	h: 'h',
	i: 'i',
	j: 'j',
	k: 'k',
	l: 'l',
	m: 'm',
	n: 'n',
	o: 'o',
	p: 'p',
	q: 'q',
	r: 'r',
	s: 's',
	t: 't',
	u: 'u',
	v: 'v',
	w: 'w',
	x: 'x',
	y: 'y',
	z: 'z',
	0: '0',
	1: '1',
	2: '2',
	3: '3',
	4: '4',
	5: '5',
	6: '6',
	7: '7',
	8: '8',
	9: '9',
	space: is_mac_os() ? '␣' : 'Space',
	'/': '/',
	'\\': '\\'
} as const;
