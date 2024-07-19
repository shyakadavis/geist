import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Empty State';
	const description =
		'Fill spaces when no content has been added yet, or is temporarily empty due to the nature of the feature and should be designed to prevent confusion.';

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
