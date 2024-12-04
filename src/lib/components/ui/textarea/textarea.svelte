<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { WithElementRef, WithoutChildren } from 'bits-ui';
	import type { HTMLTextareaAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		value = $bindable(),
		class: className,
		...restProps
	}: WithoutChildren<WithElementRef<HTMLTextareaAttributes>> = $props();
</script>

<textarea
	bind:this={ref}
	class={cn(
		'flex min-h-[80px] w-full resize-none rounded-md bg-background-100 px-3 py-2 text-sm shadow-shadow-border transition-[border-color,box-shadow] delay-0 placeholder:text-gray-700 focus-within:shadow-shadow-input focus:outline-none disabled:cursor-not-allowed disabled:bg-background-200',
		className
	)}
	bind:value
	autocapitalize="none"
	autocomplete="off"
	{...restProps}
></textarea>

<style>
	textarea {
		scroll-padding-block: 8px;
	}
</style>
