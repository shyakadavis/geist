<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Note } from '$lib/components/ui/note';
</script>

<div class="grid place-items-start gap-6">
	<Note>
		This note details some information.
		<Button slot="action" size="sm">Upgrade</Button>
	</Note>
	<Note>
		This note details a large amount information that could potentially wrap into two or more lines,
		forcing the height of the Note to be larger.
		<Button slot="action" size="sm">Upgrade</Button>
	</Note>
</div>
