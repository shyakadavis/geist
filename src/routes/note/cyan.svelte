<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Link } from '$lib/components/ui/link';
	import { Note } from '$lib/components/ui/note';
</script>

<div class="grid gap-6">
	<Note variant="cyan">This note details some cyan information.</Note>
	<Note variant="cyan">
		This note details some cyan information.
		<Button slot="action" size="sm">Upgrade</Button>
	</Note>
	<Note variant="cyan">
		This note details some cyan information. Check <Link href="/#">the documentation</Link> to learn
		more.
		<Button slot="action" size="sm">Upgrade</Button>
	</Note>
	<Note fill variant="cyan">This filled note details some cyan information.</Note>
	<Note fill variant="cyan">
		This filled note details some cyan information.
		<Button slot="action" size="sm">Upgrade</Button>
	</Note>
	<Note fill variant="cyan">
		This filled note details some cyan information. Check
		<Link href="/#">the documentation</Link> to learn more.
		<Button slot="action" size="sm">Upgrade</Button>
	</Note>
</div>
