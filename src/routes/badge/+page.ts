import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Badge';
	const description =
		'A label that emphasizes an element that requires attention, or helps categorize with other similar elements.';

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
