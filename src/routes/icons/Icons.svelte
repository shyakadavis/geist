<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import {
		ContextMenu,
		ContextMenuContent,
		ContextMenuItem,
		ContextMenuTrigger
	} from '$lib/components/ui/context-menu';
	import { SearchInput } from '$lib/components/ui/input';
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import { flip } from 'svelte/animate';
	import { derived, writable } from 'svelte/store';
	import { receive, send } from './transition';

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

	// e.g. "ArrowUp" -> "arrow-up"
	function format_name(str: string) {
		return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
	}

	// e.g. import ArrowLeft from '$lib/assets/icons/arrow-left.svg?component';
	function copy_import(name: string) {
		const value = `import ${name} from '$lib/assets/icons/${format_name(name)}.svg?component';`;
		navigator.clipboard.writeText(value);
	}

	function copy_name(name: string) {
		navigator.clipboard.writeText(name);
	}

	// e.g. <ArrowLeft aria-hidden="true" height="16" width="16" />
	function copy_svelte_component(name: string) {
		const value = `<${name} aria-hidden="true" height="16" width="16" />`;
		navigator.clipboard.writeText(value);
	}

	async function copy_svg(name: string) {
		const value = await import(`$lib/assets/icons/${format_name(name)}.svg?raw`)
			.then((res) => res.default)
			.catch((err) => {
				console.error(err);
				return 'Error loading SVG';
			});
		navigator.clipboard.writeText(value);
	}

	const last_row_count = writable(0);

	function update_last_row_count() {
		filtered_icons.subscribe(($filtered_icons) => {
			const columns = window.innerWidth >= 640 ? 4 : 2;
			last_row_count.set($filtered_icons.length % columns);
		});
	}

	let search_field: HTMLInputElement;

	onMount(() => {
		search_field.focus();
		update_last_row_count();
	});
</script>

<svelte:window on:resize={update_last_row_count} />

<section id="search" class="grid w-full place-items-center border-b p-10">
	<SearchInput
		bind:el={search_field}
		placeholder="Search icons..."
		class="w-full"
		bind:value={$search_term}
	/>
</section>

{#if $filtered_icons.length === 0}
	<p class="p-10 text-gray-900">No icons found.</p>
{:else}
	<ul class="grid grid-cols-2 sm:grid-cols-4">
		{#each $filtered_icons as [name, icon], i (icon.name)}
			<!-- TODO: Improve the shuffle/filter animation -->
			<li
				in:receive={{ key: icon.name }}
				out:send={{ key: icon.name }}
				animate:flip={{ duration: 200 }}
			>
				<ContextMenu>
					<ContextMenuTrigger
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
								'border-b-0':
									i >= $filtered_icons.length - $last_row_count || $filtered_icons.length <= 4
							}
						)}
					>
						<svelte:component this={icon} aria-hidden="true" height="16" width="16" />
						<span class="text-sm">{format_name(name)}</span>
					</ContextMenuTrigger>
					<ContextMenuContent>
						<ContextMenuItem on:click={() => copy_import(name)}>Copy Import</ContextMenuItem>
						<ContextMenuItem on:click={() => copy_name(format_name(name))}>
							Copy Name
						</ContextMenuItem>
						<ContextMenuItem on:click={() => copy_svelte_component(name)}>
							Copy Svelte Component
						</ContextMenuItem>
						<ContextMenuItem on:click={() => copy_svg(name)}>Copy SVG</ContextMenuItem>
					</ContextMenuContent>
				</ContextMenu>
			</li>
		{/each}
	</ul>
{/if}
