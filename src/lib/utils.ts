import type { WithElementRef } from 'bits-ui';
import { type ClassValue, clsx } from 'clsx';
import { cubicOut } from 'svelte/easing';
import type {
	HTMLAnchorAttributes,
	HTMLAttributes,
	HTMLButtonAttributes,
	HTMLImgAttributes,
	HTMLInputAttributes,
	HTMLLabelAttributes,
	HTMLLiAttributes,
	HTMLOlAttributes,
	HTMLTableAttributes,
	HTMLTdAttributes,
	HTMLTextareaAttributes,
	HTMLThAttributes
} from 'svelte/elements';
import type { TransitionConfig } from 'svelte/transition';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

type FlyAndScaleParams = {
	y?: number;
	x?: number;
	start?: number;
	duration?: number;
};

export const flyAndScale = (
	node: Element,
	params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 }
): TransitionConfig => {
	const style = getComputedStyle(node);
	const transform = style.transform === 'none' ? '' : style.transform;

	const scaleConversion = (valueA: number, scaleA: [number, number], scaleB: [number, number]) => {
		const [minA, maxA] = scaleA;
		const [minB, maxB] = scaleB;

		const percentage = (valueA - minA) / (maxA - minA);
		const valueB = percentage * (maxB - minB) + minB;

		return valueB;
	};

	const styleToString = (style: Record<string, number | string | undefined>): string => {
		return Object.keys(style).reduce((str, key) => {
			if (style[key] === undefined) return str;
			return `${str}${key}:${style[key]};`;
		}, '');
	};

	return {
		duration: params.duration ?? 200,
		delay: 0,
		css: (t) => {
			const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
			const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
			const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

			return styleToString({
				transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
				opacity: t
			});
		},
		easing: cubicOut
	};
};

/**
 * Formats a string to be more human-readable.
 * @param str The string to format.
 * @example
 * format_string('with-icons') // 'With Icons'
 * format_string('colors-1\\-3:-component-backgrounds') // 'Colors 1-3: Component Backgrounds'
 */
export function format_string(str: string) {
	// Replace escaped hyphens with a temporary placeholder
	const processedString = str.replace(/\\-/g, '{{HYPHEN}}');

	// Split the string by unescaped hyphens
	const parts = processedString.split('-');

	// Process each part
	const formattedParts = parts.map((part) => {
		// Capitalize the first letter of each word
		return (
			part
				.replace(/\b\w/g, (c) => c.toUpperCase())
				// Replace the placeholder back with a hyphen
				.replace(/{{HYPHEN}}/g, '-')
		);
	});

	// Join the parts and fix spacing around colons
	const result = formattedParts.join(' ').replace(/ : /g, ': ');

	return result;
}

// Wrappers around svelte's `HTMLAttributes` types to add a `ref` prop can be bound to
// to get a reference to the underlying DOM element the component is rendering.
export type PrimitiveDivAttributes = WithElementRef<HTMLAttributes<HTMLDivElement>>;
export type PrimitiveElementAttributes = WithElementRef<HTMLAttributes<HTMLElement>>;
export type PrimitiveAnchorAttributes = WithElementRef<HTMLAnchorAttributes>;
export type PrimitiveButtonAttributes = WithElementRef<HTMLButtonAttributes>;
export type PrimitiveInputAttributes = WithElementRef<HTMLInputAttributes>;
export type PrimitiveSpanAttributes = WithElementRef<HTMLAttributes<HTMLSpanElement>>;
export type PrimitiveTextareaAttributes = WithElementRef<HTMLTextareaAttributes>;
export type PrimitiveHeadingAttributes = WithElementRef<HTMLAttributes<HTMLHeadingElement>>;
export type PrimitiveLiAttributes = WithElementRef<HTMLLiAttributes>;
export type PrimitiveOlAttributes = WithElementRef<HTMLOlAttributes>;
export type PrimitiveLabelAttributes = WithElementRef<HTMLLabelAttributes>;
export type PrimitiveUlAttributes = WithElementRef<HTMLAttributes<HTMLUListElement>>;
export type PrimitiveTableAttributes = WithElementRef<HTMLTableAttributes>;
export type PrimitiveTdAttributes = WithElementRef<HTMLTdAttributes>;
export type PrimitiveTrAttributes = WithElementRef<HTMLAttributes<HTMLTableRowElement>>;
export type PrimitiveThAttributes = WithElementRef<HTMLThAttributes>;
export type PrimitiveTableSectionAttributes = WithElementRef<
	HTMLAttributes<HTMLTableSectionElement>
>;
export type PrimitiveImgAttributes = WithElementRef<HTMLImgAttributes>;
