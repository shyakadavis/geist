<script lang="ts">
	import { Icons } from '$lib/assets/icons';

	const preview_icons = Object.entries(Icons).filter(([name]) => name !== 'ErrorStates');
</script>

<div class="grid grid-cols-4 divide-x divide-y">
	{#each preview_icons as [name, IconComponent]}
		<div class="flex flex-col items-center gap-2 p-2 py-8 hover:bg-gray-100">
			<svelte:component this={IconComponent} height="15" width="15" class="text-gray-900" />
			<span class="text-sm text-gray-900">{name.toLowerCase()}</span>
		</div>
	{/each}
</div>
