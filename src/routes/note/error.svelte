<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Link } from '$lib/components/ui/link';
	import { Note } from '$lib/components/ui/note';
</script>

<div class="grid gap-6">
	<Note variant="error">This note details some error information.</Note>
	<Note variant="error">
		This note details some error information.
		<Button slot="action" size="sm">Upgrade</Button>
	</Note>
	<Note variant="error">
		This note details some error information. Check <Link href="/#">the documentation</Link> to learn
		more.
		<Button slot="action" size="sm">Upgrade</Button>
	</Note>
	<Note fill variant="error">This filled note details some error information.</Note>
	<Note fill variant="error">
		This filled note details some error information.
		<Button slot="action" size="sm">Upgrade</Button>
	</Note>
	<Note fill variant="error">
		This filled note details some error information. Check
		<Link href="/#">the documentation</Link> to learn more.
		<Button slot="action" size="sm">Upgrade</Button>
	</Note>
</div>
