import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Tooltip';
	const description =
		'A set of headings, vertically stacked, that each reveal an related section of content. Commonly referred to as an accordion.';

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
