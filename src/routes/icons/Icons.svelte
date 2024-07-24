<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import {
		ContextMenu,
		ContextMenuContent,
		ContextMenuItem,
		ContextMenuTrigger
	} from '$lib/components/ui/context-menu';
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';

	const icons_to_exclude = ['BrandAssets', 'ErrorStates'];
	const preview_icons = Object.entries(Icons).filter(([name]) => !icons_to_exclude.includes(name));

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

	// e.g. <svelte:component this={ArrowLeft} aria-hidden="true" height="16" width="16" />
	function copy_svelte_component(name: string) {
		const value = `<svelte:component this={${name}} aria-hidden="true" height="16" width="16" />`;
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

	let last_row_count = 0;

	const update_last_row_count = () => {
		last_row_count = window.innerWidth >= 640 ? preview_icons.length % 4 : preview_icons.length % 2;
	};

	onMount(update_last_row_count);
</script>

<svelte:window on:resize={update_last_row_count} />

<section class="grid grid-cols-2 sm:grid-cols-4">
	{#each preview_icons as [name, icon], i}
		<ContextMenu>
			<ContextMenuTrigger
				class={cn(
					'flex h-28 w-full cursor-pointer flex-col items-center justify-center gap-1.5 px-4 text-gray-900 hover:bg-background-100',
					// Border-specifics.
					'border-b border-r [&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:border-r sm:[&:nth-child(4n)]:border-r-0',
					{
						'border-b-0': i >= preview_icons.length - last_row_count
					}
				)}
			>
				<svelte:component this={icon} aria-hidden="true" height="16" width="16" />
				<span class="text-sm">{format_name(name)}</span>
			</ContextMenuTrigger>
			<ContextMenuContent>
				<ContextMenuItem on:click={() => copy_import(name)}>Copy Import</ContextMenuItem>
				<ContextMenuItem on:click={() => copy_name(format_name(name))}>Copy Name</ContextMenuItem>
				<ContextMenuItem on:click={() => copy_svelte_component(name)}>
					Copy Svelte Component
				</ContextMenuItem>
				<ContextMenuItem on:click={() => copy_svg(name)}>Copy SVG</ContextMenuItem>
			</ContextMenuContent>
		</ContextMenu>
	{/each}
</section>
