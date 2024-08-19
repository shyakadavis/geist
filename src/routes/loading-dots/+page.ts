import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Loading Dots';
	const description = 'Indicate an action running in the background.';

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
