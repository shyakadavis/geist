<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Switch as SwitchPrimitive } from 'bits-ui';
	import { switch_variants, type Props } from '.';

	type $$Props = Props;
	type $$Events = SwitchPrimitive.Events;

	interface Props_1 { [key: string]: any }

	let {
		class: class_name = undefined,
		checked = $bindable(undefined),
		variant = 'default',
		size = 'md',
		icon = undefined,
		direction = 'switch-last',
		children,
		...rest
	}: Props_1 = $props();
	
</script>

<label class="flex items-center gap-2">
	{#if direction === 'switch-last'}
		<span class="whitespace-nowrap text-xs font-medium text-accents-5">
			{@render children?.()}
		</span>
	{/if}
	<SwitchPrimitive.Root
		bind:checked
		class={cn(switch_variants({ variant, size, className: class_name }), class_name)}
		{...rest}
		on:click
		on:keydown
	>
		{#if icon}
			<SwitchPrimitive.Thumb asChild let:attrs>
				<span
					class={cn(
						'pointer-events-none grid place-items-center rounded-full bg-gray-700 text-background-100 ring-0 transition-transform [box-shadow:_0_0_4px_rgba(0,0,0,.12),0_1px_1px_rgba(0,0,0,.16)] data-[state=unchecked]:translate-x-0 data-[state=checked]:bg-gray-1000 group-data-[disabled=true]:bg-gray-200 group-data-[disabled=true]:text-gray-700',
						{
							'size-3 data-[state=checked]:translate-x-[13.5px]': size === 'md',
							'size-[22px] data-[state=checked]:translate-x-[15.5px]': size === 'lg'
						}
					)}
					{...attrs}
				>
					{#if checked}
						<svelte:component
							this={icon.checked}
							aria-hidden="true"
							class="size-full max-h-4 max-w-4"
						/>
					{:else}
						<svelte:component
							this={icon.unchecked}
							aria-hidden="true"
							class="size-full max-h-4 max-w-4"
						/>
					{/if}
				</span>
			</SwitchPrimitive.Thumb>
		{:else}
			<SwitchPrimitive.Thumb
				class={cn(
					'pointer-events-none block rounded-full bg-gray-700 ring-0 transition-transform [box-shadow:_0_0_4px_rgba(0,0,0,.12),0_1px_1px_rgba(0,0,0,.16)] data-[state=unchecked]:translate-x-0 data-[state=checked]:bg-gray-1000 group-data-[disabled=true]:bg-gray-200',
					{
						'size-3 data-[state=checked]:translate-x-[13.5px]': size === 'md',
						'size-[22px] data-[state=checked]:translate-x-[15.5px]': size === 'lg'
					}
				)}
			/>
		{/if}
	</SwitchPrimitive.Root>
	{#if direction === 'switch-first'}
		<span class="whitespace-nowrap text-xs font-medium text-accents-5">
			{@render children?.()}
		</span>
	{/if}
</label>
