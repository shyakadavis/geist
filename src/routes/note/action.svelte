<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Note } from '$lib/components/ui/note';
</script>

<div class="grid place-items-start gap-6">
	<Note>
		This note details some information.
		{#snippet action()}
			<Button size="sm">Upgrade</Button>
		{/snippet}
	</Note>
	<Note>
		This note details a large amount information that could potentially wrap into two or more lines,
		forcing the height of the Note to be larger.
		{#snippet action()}
			<Button size="sm">Upgrade</Button>
		{/snippet}
	</Note>
</div>
