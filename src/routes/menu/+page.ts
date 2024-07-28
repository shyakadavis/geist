import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Menu';
	const description =
		'Dropdown menu opened via button. Supports typeahead and keyboard navigation.';

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
