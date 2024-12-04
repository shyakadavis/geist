<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils.js';
	import { Command as CommandPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		class: className,
		value = $bindable(''),
		wrapper_class = undefined,
		hide_search_icon = false,
		...restProps
	}: CommandPrimitive.InputProps & {
		wrapper_class?: string | undefined;
		hide_search_icon?: boolean;
	} = $props();
</script>

<div class="flex items-center border-b px-2" data-command-input-wrapper="">
	{#if !hide_search_icon}
		<Icons.MagnifyingGlass class="mr-2 size-4 shrink-0 opacity-50" />
	{/if}
	<CommandPrimitive.Input
		class={cn(
			'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-gray-700 disabled:cursor-not-allowed disabled:opacity-50',
			className
		)}
		bind:ref
		{...restProps}
		bind:value
	/>
</div>
