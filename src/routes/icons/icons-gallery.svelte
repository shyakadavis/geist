<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import * as ContextMenu from '$lib/components/ui/context-menu';
	import { SearchInput } from '$lib/components/ui/input';
	import { cn } from '$lib/utils';
	import { flip } from 'svelte/animate';
	import { derived, writable } from 'svelte/store';
	import { receive, send } from './transition';
	import { copy_import, copy_name, copy_svelte_component, copy_svg, format_name } from './utils';

	const icons_to_exclude = ['BrandAssets', 'ErrorStates'];
	const preview_icons = writable(
		Object.entries(Icons).filter(([name]) => !icons_to_exclude.includes(name))
	);
	const search_term = writable('');

	// TODO: Improve search algorithm
	const filtered_icons = derived([preview_icons, search_term], ([$preview_icons, $search_term]) => {
		const term = $search_term.toLowerCase();
		return $preview_icons.filter(([name]) => name.toLowerCase().includes(term));
	});

	const last_row_count = writable(0);

	function update_last_row_count() {
		filtered_icons.subscribe(($filtered_icons) => {
			const columns = window.innerWidth >= 640 ? 4 : 2;
			last_row_count.set($filtered_icons.length % columns);
		});
	}

	let search_field_ref: HTMLInputElement | null = $state(null);

	$effect(() => {
		if (!search_field_ref) return;
		search_field_ref.focus();
		update_last_row_count();
	});
</script>

<svelte:window onresize={update_last_row_count} />

<section id="search" class="grid w-full place-items-center border-b p-10">
	<SearchInput
		bind:ref={search_field_ref}
		aria-labelledby="Search icons"
		placeholder="Search icons..."
		class="w-full"
		bind:value={$search_term}
	/>
</section>

{#if $filtered_icons.length === 0}
	<p class="p-10 text-gray-900">No icons found.</p>
{:else}
	<ul class="grid grid-cols-2 sm:grid-cols-4">
		{#each $filtered_icons as [name, Icon], i (name)}
			<!-- TODO: Improve the shuffle/filter animation -->
			<li in:receive={{ key: name }} out:send={{ key: name }} animate:flip={{ duration: 200 }}>
				{@render icon_item({ name, Icon, i })}
			</li>
		{/each}
	</ul>
{/if}

{#snippet icon_item({ name, Icon, i }: { name: string; Icon: typeof Icons.LogoV0; i: number })}
	<ContextMenu.Root>
		<!-- TODO: How to trigger onclick? -->
		<ContextMenu.Trigger
			class={cn(
				'flex h-28 w-full cursor-pointer flex-col items-center justify-center gap-1.5 px-4 text-gray-900 hover:bg-background-100',
				/* 
						This code applies border styles to elements based on their position and screen size:
						- Adds bottom and right borders to all elements.
						- Removes the right border for every second element.
						- At the small (sm) breakpoint:
							- Adds the right border back to every second element.
							- Removes the right border for every fourth element.
						- Removes the bottom border for elements in the last row.
					*/
				'border-b border-r [&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:border-r sm:[&:nth-child(4n)]:border-r-0',
				{
					'border-b-0': i >= $filtered_icons.length - $last_row_count || $filtered_icons.length <= 4
				}
			)}
		>
			<Icon aria-hidden="true" height="16" width="16" />
			<span class="text-sm">{format_name(name)}</span>
		</ContextMenu.Trigger>
		<ContextMenu.Content>
			<ContextMenu.Item onclick={() => copy_import(name)}>Copy Import</ContextMenu.Item>
			<ContextMenu.Item onclick={() => copy_name(format_name(name))}>Copy Name</ContextMenu.Item>
			<ContextMenu.Item onclick={() => copy_svelte_component(name)}>
				Copy Svelte Component
			</ContextMenu.Item>
			<ContextMenu.Item onclick={() => copy_svg(name)}>Copy SVG</ContextMenu.Item>
		</ContextMenu.Content>
	</ContextMenu.Root>
{/snippet}
