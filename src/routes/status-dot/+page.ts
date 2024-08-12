import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Status Dot';
	const description = 'Display an indicator of deployment status.';

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
