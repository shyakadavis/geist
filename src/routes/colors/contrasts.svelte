<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Gauge } from '$lib/components/ui/gauge';
	import Demo from './demo.svelte';
	import DescriptionList from './description-list.svelte';

	const backgrounds = [
		{ title: 'Color 7', description: 'High contrast background', color: 'gray-700' },
		{ title: 'Color 8', description: 'Hover high contrast background', color: 'gray-800' }
	];
</script>

<DescriptionList items={backgrounds} />

<Demo class="h-[136px] items-center justify-center">
	<div class="flex h-full w-[50%] items-center justify-center gap-5 border-r border-gray-400">
		<Gauge show_value size="sm" value={90} />
		<Gauge show_value size="sm" value={55} />
		<Gauge show_value size="sm" value={20} />
	</div>

	<div class="flex w-[50%] justify-center">
		<Button variant="success" size="lg">Upgrade to Pro</Button>
	</div>
</Demo>
