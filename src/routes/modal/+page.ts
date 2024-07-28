import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Modal';
	const description =
		'Display popup content that requires attention or provides additional information.';

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
