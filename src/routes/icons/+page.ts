import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Icons';
	const description = 'A collection of icons used across Vercel products. Right click to copy.';

	const pageMetaTags = Object.freeze({
		title,
		description,
		openGraph: {
			title,
			description
		}
	}) satisfies MetaTagsProps;

	return {
		pageMetaTags,
		title,
		description
	};
}
