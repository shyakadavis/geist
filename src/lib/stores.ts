import { writable } from 'svelte/store';

function createCommandStore(initial_state: boolean) {
	const command = writable(initial_state);

	function toggle() {
		command.update((n) => !n);
	}

	return {
		...command,
		toggle
	};
}

export const commandOpenState = createCommandStore(false);
