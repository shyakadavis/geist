import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Gauge';
	const description = 'A circular visual for conveying a percentage.';

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
