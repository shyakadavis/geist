import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Table';
	const description = 'A semantic HTML table component';

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
