import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Drawer';
	const description = 'Display content in a separate view from the existing context.';

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
