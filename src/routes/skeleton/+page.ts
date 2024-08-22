import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Skeleton';
	const description = 'Display a skeleton whilst another component is loading.';

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
