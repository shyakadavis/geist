<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Link } from '$lib/components/ui/link';
	import { Note } from '$lib/components/ui/note';
</script>

<div class="grid gap-6">
	<Note variant="secondary">This note details some secondary information.</Note>
	<Note variant="secondary">
		This note details some secondary information.
		<Button slot="action" size="sm">Upgrade</Button>
	</Note>
	<Note variant="secondary">
		This note details some secondary information. Check <Link href="/#">the documentation</Link> to learn
		more.
		<Button slot="action" size="sm">Upgrade</Button>
	</Note>
	<Note fill variant="secondary">This filled note details some secondary information.</Note>
	<Note fill variant="secondary">
		This filled note details some secondary information.
		<Button slot="action" size="sm">Upgrade</Button>
	</Note>
	<Note fill variant="secondary">
		This filled note details some secondary information. Check
		<Link href="/#">the documentation</Link> to learn more.
		<Button slot="action" size="sm">Upgrade</Button>
	</Note>
</div>
