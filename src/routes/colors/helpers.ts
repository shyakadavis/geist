import { browser } from '$app/environment';

// function to convert hsl to hex where the input is a string like 'hsl(var(--background-200))'
export function hsl_to_hex(hsl_string: string): string {
	// Extract the CSS variable name
	const var_name = hsl_string.match(/var\((.*?)\)/)?.[1];
	if (!var_name) {
		// throw new Error('Invalid HSL string format');
		return '#000000';
	}

	// Get the computed style value
	const hsl_value = browser
		? getComputedStyle(document.documentElement).getPropertyValue(var_name).trim()
		: '0, 0%, 0%';

	// Parse the HSL values
	const [h, s, l] = hsl_value.split(/[,\s]+/).map((val, index) => {
		if (index === 0) {
			return parseInt(val);
		}
		return parseFloat(val.replace('%', '')) / 100;
	});

	// Convert HSL to RGB
	const chroma = (1 - Math.abs(2 * l - 1)) * s;
	const x = chroma * (1 - Math.abs(((h / 60) % 2) - 1));
	const m = l - chroma / 2;

	let r, g, b;
	if (h >= 0 && h < 60) {
		[r, g, b] = [chroma, x, 0];
	} else if (h >= 60 && h < 120) {
		[r, g, b] = [x, chroma, 0];
	} else if (h >= 120 && h < 180) {
		[r, g, b] = [0, chroma, x];
	} else if (h >= 180 && h < 240) {
		[r, g, b] = [0, x, chroma];
	} else if (h >= 240 && h < 300) {
		[r, g, b] = [x, 0, chroma];
	} else {
		[r, g, b] = [chroma, 0, x];
	}

	// Convert RGB to Hex
	const to_hex = (value: number) => {
		const hex = Math.round((value + m) * 255)
			.toString(16)
			.toUpperCase();
		return hex.length === 1 ? '0' + hex : hex;
	};

	return `#${to_hex(r)}${to_hex(g)}${to_hex(b)}`;
}
