<script lang="ts">
	import { Gauge } from '$lib/components/ui/gauge';

	const colors = {
		0: 'stroke-pink-100',
		10: 'stroke-pink-200',
		20: 'stroke-pink-300',
		30: 'stroke-pink-400',
		50: 'stroke-pink-500',
		60: 'stroke-pink-600',
		70: 'stroke-pink-700',
		80: 'stroke-pink-800',
		90: 'stroke-pink-900',
		100: 'stroke-pink-1000'
	};
</script>

<div class="flex gap-2">
	{#each Object.entries(colors) as c}
		{@const [value, _] = c}
		<Gauge {colors} size="sm" value={Number(value)} />
	{/each}
</div>
