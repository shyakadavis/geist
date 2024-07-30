<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Link } from '$lib/components/ui/link';
	import { Note } from '$lib/components/ui/note';
</script>

<div class="grid gap-6">
	<Note variant="violet">This note details some violet information.</Note>
	<Note variant="violet">
		This note details some violet information.
		<Button slot="action" size="sm">Upgrade</Button>
	</Note>
	<Note variant="violet">
		This note details some violet information. Check <Link href="/#">the documentation</Link> to learn
		more.
		<Button slot="action" size="sm">Upgrade</Button>
	</Note>
	<Note fill variant="violet">This filled note details some violet information.</Note>
	<Note fill variant="violet">
		This filled note details some violet information.
		<Button slot="action" size="sm">Upgrade</Button>
	</Note>
	<Note fill variant="violet">
		This filled note details some violet information. Check
		<Link href="/#">the documentation</Link> to learn more.
		<Button slot="action" size="sm">Upgrade</Button>
	</Note>
</div>
