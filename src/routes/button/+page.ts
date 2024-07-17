import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Button';
	const description =
		'Trigger an action or event, such as submitting a form or displaying a dialog.';

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
