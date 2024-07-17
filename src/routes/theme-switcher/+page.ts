import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Theme Switcher';
	const description = 'Component that allows users to switch between light and dark themes.';

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
