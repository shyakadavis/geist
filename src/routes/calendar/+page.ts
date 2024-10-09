import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Calendar';
	const description = 'Displays a calendar from which users can select a date or range of dates.';

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
