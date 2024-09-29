<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Link } from '$lib/components/ui/link';
	import { Note } from '$lib/components/ui/note';
</script>

<div class="grid gap-6">
	<Note disabled fill variant="warning">
		This note details a warning.
		{#snippet action()}
			<Button size="sm" disabled>Upgrade</Button>
		{/snippet}
	</Note>
	<Note disabled fill variant="warning">
		This filled note details some success information. Check
		<Link href="/#">the documentation</Link> to learn more.
		{#snippet action()}
			<Button size="sm" disabled>Upgrade</Button>
		{/snippet}
	</Note>
</div>
