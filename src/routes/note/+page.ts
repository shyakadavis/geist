import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Note';
	const description = 'Display text that requires attention or provides additional information.';

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
