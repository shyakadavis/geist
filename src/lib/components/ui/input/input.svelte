<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Label } from '../label/index.js';
	import { input_variants, type InputEvents, type Props } from './index.js';

	type $$Props = Props;

	type $$Events = InputEvents;

	let class_name: $$Props['class'] = undefined;
	export let value: $$Props['value'] = undefined;
	export { class_name as class };
	export let size: $$Props['size'] = 'md';
	export let prefix: $$Props['prefix'] = undefined;
	export let suffix: $$Props['suffix'] = undefined;
	export let prefix_styling: $$Props['prefix_styling'] = true;
	export let suffix_styling: $$Props['suffix_styling'] = true;
	export let label: $$Props['label'] = undefined;

	// Workaround for https://github.com/sveltejs/svelte/issues/9305
	// Fixed in Svelte 5, but not backported to 4.x.
	export let readonly: $$Props['readonly'] = undefined;
</script>

{#if label}
	<Label for={label} class="mb-2 max-w-full text-[13px] text-gray-900">{label}</Label>
{/if}
<div
	class={cn(
		'focus-within:shadow-shadow-input flex w-fit items-center rounded-md  shadow-shadow-border transition-[border-color,box-shadow]',
		{
			'h-8': size === 'sm',
			'h-10': size === 'md',
			'h-12': size === 'lg'
		}
	)}
>
	{#if prefix}
		<span
			class={cn('flex h-full items-center rounded-[inherit] rounded-r-none p-3 text-gray-700', {
				'border-r bg-background-200': prefix_styling
			})}
		>
			{#if typeof prefix === 'string'}
				{prefix}
			{:else}
				<svelte:component
					this={prefix}
					aria-hidden="true"
					class={cn({
						'size-3': size === 'sm',
						'size-4': size === 'md',
						'size-5': size === 'lg'
					})}
				/>
			{/if}
		</span>
	{/if}
	<input
		id={label}
		class={cn(input_variants({ size, className: class_name }))}
		bind:value
		{readonly}
		on:blur
		on:change
		on:click
		on:focus
		on:focusin
		on:focusout
		on:keydown
		on:keypress
		on:keyup
		on:mouseover
		on:mouseenter
		on:mouseleave
		on:mousemove
		on:paste
		on:input
		on:wheel|passive
		{...$$restProps}
		autocapitalize="none"
		autocomplete="off"
		autocorrect="off"
		spellcheck="false"
	/>
	{#if suffix}
		<span
			class={cn('flex h-full items-center rounded-[inherit] rounded-l-none p-3 text-gray-700', {
				'border-l bg-background-200': suffix_styling
			})}
		>
			{#if typeof suffix === 'string'}
				{suffix}
			{:else}
				<svelte:component
					this={suffix}
					aria-hidden="true"
					class={cn({
						'size-3': size === 'sm',
						'size-4': size === 'md',
						'size-5': size === 'lg'
					})}
				/>
			{/if}
		</span>
	{/if}
</div>
