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
	export let affix: $$Props['affix'] = undefined;
	export let suffix: $$Props['suffix'] = undefined;
	export let affix_styling: $$Props['affix_styling'] = true;
	export let suffix_styling: $$Props['suffix_styling'] = true;
	export let label: $$Props['label'] = undefined;
	export let el: $$Props['el'] = undefined;

	// Workaround for https://github.com/sveltejs/svelte/issues/9305
	// Fixed in Svelte 5, but not backported to 4.x.
	export let readonly: $$Props['readonly'] = undefined;
</script>

{#if label}
	<Label for={label} class="mb-2 max-w-full text-[13px] text-gray-900">{label}</Label>
{/if}
<div
	class={cn(
		'flex max-w-full items-center rounded-md shadow-shadow-border transition-[border-color,box-shadow] delay-0 focus-within:shadow-shadow-input',
		{
			'h-8': size === 'sm',
			'h-10': size === 'md',
			'h-12': size === 'lg'
		}
	)}
>
	{#if affix}
		<span
			class={cn('flex h-full items-center rounded-[inherit] rounded-r-none text-gray-700', {
				'border-r bg-background-200 p-3': affix_styling,
				'pl-3': !affix_styling
			})}
		>
			{#if typeof affix === 'string'}
				{affix}
			{:else}
				<svelte:component
					this={affix}
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
		bind:this={el}
	/>
	{#if suffix}
		<span
			class={cn('flex h-full items-center rounded-[inherit] rounded-l-none text-gray-700', {
				'border-l bg-background-200 p-3': suffix_styling,
				'pr-3': !suffix_styling
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
