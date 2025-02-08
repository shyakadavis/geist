import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Project Banner';
	const description = 'Used for temporary, project-wide notifications that require resolution';

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
