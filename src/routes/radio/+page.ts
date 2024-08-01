import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Radio';
	const description = 'Provides single user input from a selection of options.';

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
