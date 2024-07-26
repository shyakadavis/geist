<script lang="ts">
	import { Command as CommandPrimitive } from 'cmdk-sv';
	import { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils.js';

	type $$Props = CommandPrimitive.InputProps & {
		wrapperClass?: string | undefined;
		hideSearchIcon?: boolean;
	};

	let className: string | undefined | null = undefined;
	export { className as class };
	export let value: string = '';
	export let wrapperClass: $$Props['wrapperClass'] = undefined;
	export let hideSearchIcon: $$Props['hideSearchIcon'] = false;
</script>

<div class={cn('flex items-center border-b px-2', wrapperClass)} data-cmdk-input-wrapper="">
	{#if !hideSearchIcon}
		<Icons.MagnifyingGlass class="mr-2 h-4 w-4 shrink-0 opacity-50" />
	{/if}
	<CommandPrimitive.Input
		class={cn(
			'placeholder:text-muted-foreground flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50',
			className
		)}
		{...$$restProps}
		bind:value
	/>
</div>
