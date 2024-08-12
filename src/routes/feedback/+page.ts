import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Feedback';
	const description = 'Gather text feedback with an associated emotion.';

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
