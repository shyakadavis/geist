import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Tabs';
	const description = 'Display tab content.';

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
