import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Checkbox';
	const description = 'A control that toggles between two options, checked or unchecked.';

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
