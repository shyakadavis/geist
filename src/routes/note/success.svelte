<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Link } from '$lib/components/ui/link';
	import { Note } from '$lib/components/ui/note';
</script>

<div class="grid gap-6">
	<Note variant="success">This note details some success information.</Note>
	<Note variant="success">
		This note details some success information.
		{#snippet action()}
			<Button size="sm">Upgrade</Button>
		{/snippet}
	</Note>
	<Note variant="success">
		This note details some success information. Check <Link href="/#">the documentation</Link> to learn
		more.
		{#snippet action()}
			<Button size="sm">Upgrade</Button>
		{/snippet}
	</Note>
	<Note fill variant="success">This filled note details some success information.</Note>
	<Note fill variant="success">
		This filled note details some success information.
		{#snippet action()}
			<Button size="sm">Upgrade</Button>
		{/snippet}
	</Note>
	<Note fill variant="success">
		This filled note details some success information. Check
		<Link href="/#">the documentation</Link> to learn more.
		{#snippet action()}
			<Button size="sm">Upgrade</Button>
		{/snippet}
	</Note>
</div>
