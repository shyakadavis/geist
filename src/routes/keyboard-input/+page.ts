import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Keyboard Input';
	const description = 'Display keyboard input that triggers an action.';

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
