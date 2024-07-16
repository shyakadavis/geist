import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Avatar';
	const description =
		'Avatars represent a user or a team. Stacked avatars represent a group of people';

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
