import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Book';
	const description = 'A responsive book component.';

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
