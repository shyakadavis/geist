import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Textarea';
	const description = 'Retrieve multi-line user input.';

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
