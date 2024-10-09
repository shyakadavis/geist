import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Colors';
	const description = 'Learn how to work with our color system. Right click to copy raw values.';

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
