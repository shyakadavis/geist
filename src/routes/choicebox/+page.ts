import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Choicebox';
	const description =
		'A larger form of Radio or Checkbox, where the user has a larger tap target and more details.';

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
