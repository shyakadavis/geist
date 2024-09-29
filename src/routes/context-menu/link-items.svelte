<script lang="ts">
	import * as ContextMenu from '$lib/components/ui/context-menu';

	let items = [
		{ label: 'Item one', href: 'https://shyakadavis.me/' },
		{ label: 'Item two', href: 'https://hj.run/' },
		{ label: 'Item three', href: 'https://github.com/AdrianGonz97/' },
		{ label: 'Item four', href: 'https://github.com/jeannemas/' }
	];
</script>

<ContextMenu.Root>
	<ContextMenu.Trigger
		class="w-[300px] rounded border border-dashed border-gray-alpha-600 py-[45px] text-center text-sm"
	>
		Right click
	</ContextMenu.Trigger>
	<ContextMenu.Content>
		{#each items as { href, label }}
			<ContextMenu.Item>
				{#snippet child({ props })}
					<a {...props} {href} target="_blank" rel="noopener noreferrer">{label}</a>
				{/snippet}
			</ContextMenu.Item>
		{/each}
	</ContextMenu.Content>
</ContextMenu.Root>
