import { writable } from 'svelte/store';

function create_command_store(initial_state: boolean) {
	const command = writable(initial_state);

	function toggle() {
		command.update((n) => !n);
	}

	return {
		...command,
		toggle
	};
}

export const command_open_state = create_command_store(false);
