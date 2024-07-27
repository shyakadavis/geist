import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Input';
	const description = 'Retrieve text input from a user.';

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
