<script lang="ts">
	import { Icons } from '$lib/assets/icons/index.js';
	import * as ContextMenu from '$lib/components/ui/context-menu';
	import { scale } from 'svelte/transition';
	import { hsl_to_hex } from './helpers.js';

	type Props = {
		color: string;
	};

	let { color }: Props = $props();

	const bg_color = color.startsWith('gray-alpha') ? `var(--${color})` : `hsl(var(--${color}))`;
	const token = `var(--${color});`;
	const hex_color = hsl_to_hex(bg_color);

	let copied = $state(false);

	function copy(str: string) {
		navigator.clipboard.writeText(str);
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 1000);
	}
</script>

<ContextMenu.Root>
	<ContextMenu.Trigger
		onclick={() => copy(token)}
		class="pointer-events-none flex aspect-square w-full grow cursor-pointer items-center justify-center rounded bg-[var(--bg-color)] shadow-border-inset md:pointer-events-auto md:h-10"
		style="--bg-color: {bg_color}"
	>
		{#if copied}
			<div in:scale={{ duration: 200 }}>
				<Icons.Check aria-hidden="true" class="size-3 md:size-4" />
				<span class="sr-only">Copied</span>
			</div>
		{/if}
	</ContextMenu.Trigger>
	<ContextMenu.Content>
		<ContextMenu.Item onclick={() => copy(hex_color)}>
			Copy HEX
			<span class="ml-auto flex items-center gap-1 text-[13px] text-gray-900">
				{hsl_to_hex(bg_color)}
				<div class="size-2 rounded-lg bg-[var(--bg-color)]" style="--bg-color: {bg_color}"></div>
			</span>
		</ContextMenu.Item>
		<ContextMenu.Item onclick={() => copy(token)}>
			Copy token
			<span class="ml-auto flex items-center gap-1 text-[13px] text-gray-900">
				Left click
				<Icons.CursorClick aria-hidden class="size-[14px]" />
			</span>
		</ContextMenu.Item>
	</ContextMenu.Content>
</ContextMenu.Root>
