import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Snippet';
	const description = 'Display a snippet of copyable code for the command line.';

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
