import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Select';
	const description = 'Display a dropdown list of items.';

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
