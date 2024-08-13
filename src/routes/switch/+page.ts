import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Switch';
	const description = 'Displays a boolean value.';

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
