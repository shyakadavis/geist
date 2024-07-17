// e.g. "with-icons" -> "With Icons"
export function format_string(str: string) {
	return str.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
}

// e.g. `code` -> <code>code</code>
export function parse_back_ticks(str: string) {
	return str.replace(/`([^`]+)`/g, '<code>$1</code>');
}
