<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Progress } from '$lib/components/ui/progress';

	let value = $state(0);

	function increase() {
		if (value < 100) value += 10;
	}

	function decrease() {
		if (value > 0) value -= 10;
	}
</script>

<div class="flex flex-col gap-6">
	<Progress
		colors={{
			0: 'bg-gray-700',
			25: 'bg-red-700',
			50: 'bg-amber-700',
			75: 'bg-pink-700',
			100: 'bg-blue-700'
		}}
		{value}
	/>

	<div class="flex gap-4">
		<Button onclick={increase} size="sm">Increase</Button>
		<Button onclick={decrease} size="sm" variant="secondary">Decrease</Button>
	</div>
</div>
