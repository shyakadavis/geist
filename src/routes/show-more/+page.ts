import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Show more';
	const description = 'Styling component to show expanded or collapsed content.';

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
