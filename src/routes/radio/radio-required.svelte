<script lang="ts">
	import { createBubbler, preventDefault } from 'svelte/legacy';
	const bubble = createBubbler();

	import { Button } from '$lib/components/ui/button';
	import * as Radio from '$lib/components/ui/radio';
</script>

<form class="grid place-content-start gap-6" onsubmit={preventDefault(bubble('submit'))}>
	<Radio.Root required class="grid gap-6">
		<Radio.Item value="option one">Option 1</Radio.Item>
		<Radio.Item value="option two">Option 2</Radio.Item>
	</Radio.Root>
	<Button type="submit" size="sm">Submit</Button>
</form>
