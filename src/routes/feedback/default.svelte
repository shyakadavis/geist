<script lang="ts">
	import { Feedback } from '$lib/components/ui/feedback';
	import { Note } from '$lib/components/ui/note';
</script>

<div class="hidden justify-center xl:flex">
	<Feedback />
</div>
<div class="flex justify-center xl:hidden">
	<Note>This example is hidden because it is intended for only desktop.</Note>
</div>
