import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Combobox';
	const description = 'Filters large lists to selectable options based on the matching query.';

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
