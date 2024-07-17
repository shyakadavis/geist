import type { MetaTagsProps } from 'svelte-meta-tags';

export const prerender = true;

export function load({ url }) {
	const title = 'Vercel Geist';
	const description =
		"Vercel's design system called Geist. Made for building consistent and delightful web experiences.";

	const baseMetaTags = Object.freeze({
		title,
		description:
			"Vercel's design system called Geist. Made for building consistent and delightful web experiences.",
		canonical: new URL(url.pathname, url.origin).href,
		openGraph: {
			type: 'website',
			url: new URL(url.pathname, url.origin).href,
			locale: 'en_GB',
			title,
			description,
			siteName: 'Geist',
			images: [
				{
					url: 'https://geist.shyakadavis.me/og.jpg',
					alt: 'Geist',
					width: 1200,
					height: 628,
					secureUrl: 'https://geist.shyakadavis.me/og.jpg',
					type: 'image/jpeg'
				}
			]
		},
		twitter: {
			handle: '@shyakadavis7',
			site: 'https://geist.shyakadavis.me/',
			cardType: 'summary_large_image' as const,
			title,
			description,
			imageAlt: 'Geist',
			image: 'https://geist.shyakadavis.me/og.jpg'
		}
	}) satisfies MetaTagsProps;

	return {
		baseMetaTags
	};
}
