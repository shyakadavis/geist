<script lang="ts">
	import { Note } from '$lib/components/ui/note';
	import type { Props } from '$lib/components/ui/note/note.svelte';

	const variants: Props['variant'][] = [
		'secondary',
		'warning',
		'success',
		'error',
		'violet',
		'cyan'
	];
</script>

<div class="grid gap-6">
	<div class="grid gap-2">
		<h3 class="text-lg font-semibold">Default label</h3>
		{#each variants as variant}
			<Note {variant}>This is a note of variant `{variant}`.</Note>

			<Note fill {variant}>
				This is a fill note of variant `{variant}`.
			</Note>
		{/each}
	</div>

	<div class="grid gap-2">
		<h3 class="text-lg font-semibold">Custom label</h3>
		{#each variants as variant}
			<Note label={variant} {variant}>This is a note of variant `{variant}`.</Note>

			<Note label={variant} fill {variant}>
				This is a fill note of variant `{variant}`.
			</Note>
		{/each}
	</div>

	<div class="grid gap-2">
		<h3 class="text-lg font-semibold">No label</h3>
		{#each variants as variant}
			<Note label={false} {variant}>This is a note of variant `{variant}`.</Note>

			<Note label={false} fill {variant}>
				This is a fill note of variant `{variant}`.
			</Note>
		{/each}
	</div>
</div>
