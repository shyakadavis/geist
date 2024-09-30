<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { HTMLTextareaAttributes } from 'svelte/elements';

	type Props = HTMLTextareaAttributes & {
		ref?: HTMLTextAreaElement | null;
	};

	let {
		class: class_name = undefined,
		value = $bindable(undefined),
		ref = $bindable(null),
		readonly = undefined,
		...rest
	}: Props = $props();
</script>

<textarea
	class={cn(
		'flex min-h-[80px] w-full resize-none rounded-md bg-background-100 px-3 py-2 text-sm shadow-shadow-border transition-[border-color,box-shadow] delay-0 placeholder:text-gray-700 focus-within:shadow-shadow-input focus:outline-none disabled:cursor-not-allowed disabled:bg-background-200',
		class_name
	)}
	bind:this={ref}
	bind:value
	{readonly}
	autocapitalize="none"
	autocomplete="off"
	autocorrect="off"
	{...rest}
></textarea>

<style>
	textarea {
		scroll-padding-block: 8px;
	}
</style>
