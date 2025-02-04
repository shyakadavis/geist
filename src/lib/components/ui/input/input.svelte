<script lang="ts" module>
	type CustomInputProps = {
		size?: 'sm' | 'md' | 'lg';
		'aria-labelledby': string;
		affix?: typeof Icons.ArrowCircleUp | string;
		suffix?: typeof Icons.ArrowCircleUp | string;
		affix_styling?: boolean;
		suffix_styling?: boolean;
		label?: string;
		ref?: HTMLInputElement | null;
	};

	export type InputProps = CustomInputProps & Without<HTMLInputAttributes, CustomInputProps>;
</script>

<script lang="ts">
	import type { Icons } from '$lib/assets/icons/index.js';
	import { cn } from '$lib/utils.js';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { Label } from '../label/index.js';
	import { input_variants, type Without } from './index.js';

	let {
		class: class_name = undefined,
		value = $bindable(undefined),
		ref = $bindable(undefined),
		size = 'md',
		affix: Affix = undefined,
		suffix: Suffix = undefined,
		affix_styling = true,
		suffix_styling = true,
		label = undefined,
		...rest
	}: InputProps = $props();
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
	{#if Affix}
		<span
			class={cn('flex h-full items-center rounded-[inherit] rounded-r-none text-gray-700', {
				'border-r bg-background-200 p-3': affix_styling,
				'pl-3': !affix_styling
			})}
		>
			{#if typeof Affix === 'string'}
				{Affix}
			{:else}
				<Affix
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
		class={cn(input_variants({ size }), class_name)}
		bind:value
		bind:this={ref}
		autocapitalize="none"
		autocomplete="off"
		autocorrect="off"
		spellcheck="false"
		{...rest}
	/>
	{#if Suffix}
		<span
			class={cn('flex h-full items-center rounded-[inherit] rounded-l-none text-gray-700', {
				'border-l bg-background-200 p-3': suffix_styling,
				'pr-3': !suffix_styling
			})}
		>
			{#if typeof Suffix === 'string'}
				{Suffix}
			{:else}
				<Suffix
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
