<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils.js';
	import { Select as SelectPrimitive, type WithoutChild } from 'bits-ui';

	type Props = WithoutChild<SelectPrimitive.TriggerProps> & {
		size?: 'xs' | 'sm' | 'md' | 'lg';
		affix?: typeof Icons.Accessibility;
		suffix?: typeof Icons.Accessibility;
	};

	let {
		ref = $bindable(null),
		class: class_name,
		children,
		size = 'md',
		affix: Affix = undefined,
		suffix: Suffix = undefined,
		...rest
	}: Props = $props();
</script>

<SelectPrimitive.Trigger
	class={cn(
		'group/select flex w-fit items-center justify-between gap-2 rounded-md border border-gray-alpha-400 bg-background-100 ring-offset-background-200 transition-colors ease-in-out placeholder:text-gray-900 hover:border-gray-alpha-500 focus:shadow-shadow-input focus:outline-none [&>span]:line-clamp-1',
		// disabled
		'disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-700 disabled:hover:border-gray-alpha-400',
		{
			'h-6 px-2 py-1 text-xs': size === 'xs',
			'h-8 px-2 py-1 text-sm': size === 'sm',
			'h-10 px-3 py-2 text-sm': size === 'md',
			'h-12 px-4 py-3 text-lg': size === 'lg'
		},
		class_name
	)}
	{...rest}
>
	{#if Affix}
		<Affix
			class={cn(
				'text-gray-900 transition-[colors,transform] ease-in-out group-hover/select:text-gray-1000',
				{
					'size-3': size === 'xs',
					'size-4': size === 'sm' || size === 'md' || size === 'lg'
				}
			)}
		/>
	{/if}
	{@render children?.()}
	{#if Suffix}
		<Suffix
			class={cn(
				'text-gray-900 transition-[colors,transform] ease-in-out group-hover/select:text-gray-1000',
				{
					'size-3': size === 'xs',
					'size-4': size === 'sm' || size === 'md' || size === 'lg'
				}
			)}
		/>
	{:else}
		<Icons.ChevronDown
			class={cn(
				'text-gray-900 transition-[colors,transform] ease-in-out group-hover/select:text-gray-1000 group-disabled/select:text-current group-data-[state=open]/select:rotate-180',
				{
					'size-3': size === 'xs',
					'size-4': size === 'sm' || size === 'md' || size === 'lg'
				}
			)}
		/>
	{/if}
</SelectPrimitive.Trigger>
