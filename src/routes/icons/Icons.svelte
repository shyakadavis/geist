<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';

	const icons_to_exclude = ['BrandAssets', 'ErrorStates'];
	const preview_icons = Object.entries(Icons).filter(([name]) => !icons_to_exclude.includes(name));

	// e.g. "ArrowUp" -> "arrow-up"
	function format_name(str: string) {
		return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
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
		<div
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
		</div>
	{/each}
</section>
