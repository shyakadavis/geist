import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Pagination';
	const description = 'Navigate to the previous or next page.';

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
