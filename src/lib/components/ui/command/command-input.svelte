<script lang="ts">
	import { Command as CommandPrimitive } from 'cmdk-sv';
	import { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils.js';

	type $$Props = CommandPrimitive.InputProps & {
		wrapper_class?: string | undefined;
		hide_search_icon?: boolean;
	};

	let className: string | undefined | null = undefined;
	export { className as class };
	export let value: string = '';
	export let wrapper_class: $$Props['wrapper_class'] = undefined;
	export let hide_search_icon: $$Props['hide_search_icon'] = false;
</script>

<div class={cn('flex items-center border-b px-2', wrapper_class)} data-cmdk-input-wrapper="">
	{#if !hide_search_icon}
		<Icons.MagnifyingGlass class="mr-2 h-4 w-4 shrink-0 opacity-50" />
	{/if}
	<CommandPrimitive.Input
		class={cn(
			'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-gray-600 disabled:cursor-not-allowed disabled:opacity-50',
			className
		)}
		{...$$restProps}
		bind:value
	/>
</div>
