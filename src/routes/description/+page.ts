import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Description';
	const description =
		'Displays a brief heading and subheading to communicate any additional information or context a user needs to continue.';

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
