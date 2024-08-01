import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Progress';
	const description = 'Display progress relative to a limit or related to a task.';

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
