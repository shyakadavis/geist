import { createHighlighter } from 'shiki';
import dark from './themes/vercel-dark';
import light from './themes/vercel-light';

const highlighter = createHighlighter({
	themes: [light, dark],
	langs: ['svelte']
});

export async function get_highlighted_code(code: string) {
	return (await highlighter).codeToHtml(code, {
		lang: 'svelte',
		themes: { light: 'vercel-light', dark: 'vercel-dark' }
	});
}
