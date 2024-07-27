import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Window';
	const description = 'Display content inside of a generic window frame.';

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
