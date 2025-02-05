<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import type { Snippet } from 'svelte';
	import { is_desktop } from '.';

	type Props = {
		class?: string;
		child?: Snippet<[{ props: Record<string, unknown> }]>;
		children?: Snippet;
	};

	let { child: child_prop, class: class_name = undefined, children }: Props = $props();
</script>

<!-- TODO: Is there a better way to do this? -->
{#if is_desktop.current}
	{#if child_prop}
		<Dialog.Trigger class={class_name}>
			{#snippet child({ props })}
				{@render child_prop?.({ props })}
			{/snippet}
		</Dialog.Trigger>
	{:else}
		<Dialog.Trigger class={class_name}>
			{@render children?.()}
		</Dialog.Trigger>
	{/if}
{:else if child_prop}
	<Drawer.Trigger class={class_name}>
		{#snippet child({ props })}
			{@render child_prop?.({ props })}
		{/snippet}
	</Drawer.Trigger>
{:else}
	<Drawer.Trigger class={class_name}>
		{@render children?.()}
	</Drawer.Trigger>
{/if}
