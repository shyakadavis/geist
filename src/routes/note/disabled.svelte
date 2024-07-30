<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Link } from '$lib/components/ui/link';
	import { Note } from '$lib/components/ui/note';
</script>

<div class="grid gap-6">
	<Note disabled fill variant="warning">
		This note details a warning.
		<Button slot="action" size="sm" let:disabled {disabled}>Upgrade</Button>
	</Note>
	<Note disabled fill variant="warning">
		This filled note details some success information. Check
		<Link href="/#">the documentation</Link> to learn more.
		<Button slot="action" size="sm" let:disabled {disabled}>Upgrade</Button>
	</Note>
</div>
