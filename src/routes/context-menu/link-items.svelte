<script lang="ts">
	import * as ContextMenu from '$lib/components/ui/context-menu';

	let items = [
		{ text: 'Item one', href: 'https://shyakadavis.me/' },
		{ text: 'Item two', href: 'https://hj.run/' },
		{ text: 'Item three', href: 'https://github.com/AdrianGonz97/' },
		{ text: 'Item four', href: 'https://github.com/jeannemas/' }
	];
</script>

<!-- TODO: Shame they removed the href prop. Maybe consider opening a feature request. -->
<ContextMenu.Root>
	<ContextMenu.Trigger
		class="w-[300px] rounded border border-dashed border-gray-alpha-600 py-[45px] text-center text-sm"
	>
		Right click
	</ContextMenu.Trigger>
	<ContextMenu.Content>
		{#each items as { href, text }}
			<ContextMenu.Item onSelect={() => (window.location.href = href)}>
				{text}
			</ContextMenu.Item>
		{/each}
	</ContextMenu.Content>
</ContextMenu.Root>
