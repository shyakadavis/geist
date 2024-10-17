<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Demo from './demo.svelte';
	import DescriptionList from './description-list.svelte';

	const backgrounds = [
		{ title: 'Color 4', description: 'Default border', color: 'gray-400' },
		{ title: 'Color 5', description: 'Hover border', color: 'gray-500' },
		{ title: 'Color 6', description: 'Active border', color: 'gray-600' }
	];
</script>

<DescriptionList items={backgrounds} />

<Demo class="h-[136px] items-center justify-center">
	<Button variant="secondary">New Project</Button>
</Demo>
