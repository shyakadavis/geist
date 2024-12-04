<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Link } from '$lib/components/ui/link';
	import { Note } from '$lib/components/ui/note';
</script>

<div class="grid gap-6">
	<Note variant="secondary">This note details some secondary information.</Note>
	<Note variant="secondary">
		This note details some secondary information.
		{#snippet action()}
			<Button size="sm">Upgrade</Button>
		{/snippet}
	</Note>
	<Note variant="secondary">
		This note details some secondary information. Check <Link href="/#">the documentation</Link> to learn
		more.
		{#snippet action()}
			<Button size="sm">Upgrade</Button>
		{/snippet}
	</Note>
	<Note fill variant="secondary">This filled note details some secondary information.</Note>
	<Note fill variant="secondary">
		This filled note details some secondary information.
		{#snippet action()}
			<Button size="sm">Upgrade</Button>
		{/snippet}
	</Note>
	<Note fill variant="secondary">
		This filled note details some secondary information. Check
		<Link href="/#">the documentation</Link> to learn more.
		{#snippet action()}
			<Button size="sm">Upgrade</Button>
		{/snippet}
	</Note>
</div>
