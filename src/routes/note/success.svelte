<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Link } from '$lib/components/ui/link';
	import { Note } from '$lib/components/ui/note';
</script>

<div class="grid gap-6">
	<Note variant="success">This note details some success information.</Note>
	<Note variant="success">
		This note details some success information.
		<Button slot="action" size="sm">Upgrade</Button>
	</Note>
	<Note variant="success">
		This note details some success information. Check <Link href="/#">the documentation</Link> to learn
		more.
		<Button slot="action" size="sm">Upgrade</Button>
	</Note>
	<Note fill variant="success">This filled note details some success information.</Note>
	<Note fill variant="success">
		This filled note details some success information.
		<Button slot="action" size="sm">Upgrade</Button>
	</Note>
	<Note fill variant="success">
		This filled note details some success information. Check
		<Link href="/#">the documentation</Link> to learn more.
		<Button slot="action" size="sm">Upgrade</Button>
	</Note>
</div>
