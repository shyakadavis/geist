<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Link } from '$lib/components/ui/link';
	import { Note } from '$lib/components/ui/note';
</script>

<div class="grid gap-6">
	<Note variant="error">This note details some error information.</Note>
	<Note variant="error">
		This note details some error information.
		{#snippet action()}
			<Button size="sm">Upgrade</Button>
		{/snippet}
	</Note>
	<Note variant="error">
		This note details some error information. Check <Link href="/#">the documentation</Link> to learn
		more.
		{#snippet action()}
			<Button size="sm">Upgrade</Button>
		{/snippet}
	</Note>
	<Note fill variant="error">This filled note details some error information.</Note>
	<Note fill variant="error">
		This filled note details some error information.
		{#snippet action()}
			<Button size="sm">Upgrade</Button>
		{/snippet}
	</Note>
	<Note fill variant="error">
		This filled note details some error information. Check
		<Link href="/#">the documentation</Link> to learn more.
		{#snippet action()}
			<Button size="sm">Upgrade</Button>
		{/snippet}
	</Note>
</div>
