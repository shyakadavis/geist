<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Link } from '$lib/components/ui/link';
	import { Note } from '$lib/components/ui/note';
</script>

<div class="grid gap-6">
	<Note variant="warning">This note details some warning information.</Note>
	<Note variant="warning">
		This note details some warning information.
		<Button slot="action" size="sm">Upgrade</Button>
	</Note>
	<Note variant="warning">
		This note details some warning information. Check <Link href="/#">the documentation</Link> to learn
		more.
		<Button slot="action" size="sm">Upgrade</Button>
	</Note>
	<Note fill variant="warning">This filled note details some warning information.</Note>
	<Note fill variant="warning">
		This filled note details some warning information.
		<Button slot="action" size="sm">Upgrade</Button>
	</Note>
	<Note fill variant="warning">
		This filled note details some warning information. Check
		<Link href="/#">the documentation</Link> to learn more.
		<Button slot="action" size="sm">Upgrade</Button>
	</Note>
</div>
