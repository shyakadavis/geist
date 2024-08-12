<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { HTMLTextareaAttributes } from 'svelte/elements';
	import type { TextareaEvents } from './index.js';

	type $$Props = HTMLTextareaAttributes & {
		el?: HTMLTextAreaElement;
	};
	type $$Events = TextareaEvents;

	let class_name: $$Props['class'] = undefined;
	export let value: $$Props['value'] = undefined;
	export let el: $$Props['el'] = undefined;
	export { class_name as class };

	// Workaround for https://github.com/sveltejs/svelte/issues/9305
	// Fixed in Svelte 5, but not backported to 4.x.
	export let readonly: $$Props['readonly'] = undefined;
</script>

<textarea
	class={cn(
		'flex min-h-[80px] w-full resize-none rounded-md bg-background-100 px-3 py-2 text-sm shadow-shadow-border transition-[border-color,box-shadow] delay-0 placeholder:text-gray-700 focus-within:shadow-shadow-input focus:outline-none disabled:cursor-not-allowed disabled:bg-background-200',
		class_name
	)}
	bind:value
	bind:this={el}
	{readonly}
	on:blur
	on:change
	on:click
	on:focus
	on:keydown
	on:keypress
	on:keyup
	on:mouseover
	on:mouseenter
	on:mouseleave
	on:paste
	on:input
	autocapitalize="none"
	autocomplete="off"
	autocorrect="off"
	{...$$restProps}
></textarea>

<style>
	textarea {
		scroll-padding-block: 8px;
	}
</style>
