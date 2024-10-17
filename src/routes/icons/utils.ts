// e.g. "ArrowUp" -> "arrow-up"
export function format_name(str: string) {
	return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

// e.g. import ArrowLeft from '$lib/assets/icons/arrow-left.svg?component';
export function copy_import(name: string) {
	const value = `import ${name} from '$lib/assets/icons/${format_name(name)}.svg?component';`;
	navigator.clipboard.writeText(value);
}

export function copy_name(name: string) {
	navigator.clipboard.writeText(name);
}

// e.g. <ArrowLeft aria-hidden="true" height="16" width="16" />
export function copy_svelte_component(name: string) {
	const value = `<${name} aria-hidden="true" height="16" width="16" />`;
	navigator.clipboard.writeText(value);
}

export async function copy_svg(name: string) {
	const value = await import(`$lib/assets/icons/${format_name(name)}.svg?raw`)
		.then((res) => res.default)
		.catch((err) => {
			console.error(err);
			return 'Error loading SVG';
		});
	navigator.clipboard.writeText(value);
}
