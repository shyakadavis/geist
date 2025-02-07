<script lang="ts">
	import type { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils.js';
	import { Switch as SwitchPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import { switch_variants, type Size, type Variant } from '.';

	type Props = WithoutChildrenOrChild<SwitchPrimitive.RootProps> & {
		variant?: Variant;
		size?: Size;
		icon?: {
			checked: typeof Icons.Accessibility;
			unchecked: typeof Icons.Accessibility;
		};
		direction?: 'switch-first' | 'switch-last';
		children?: Snippet;
	};

	let {
		class: class_name = undefined,
		checked = $bindable(false),
		variant = 'default',
		size = 'md',
		icon = undefined,
		direction = 'switch-last',
		children,
		...rest
	}: Props = $props();
</script>

<label class="flex items-center gap-2">
	<SwitchPrimitive.Root
		bind:checked
		class={cn(switch_variants({ variant, size }), class_name)}
		{...rest}
	>
		{#if icon}
			<SwitchPrimitive.Thumb>
				{#snippet child({ props })}
					<span
						{...props}
						class={cn(
							'pointer-events-none grid place-items-center rounded-full bg-background-200 text-background-100 ring-0 transition-transform [box-shadow:_0_0_4px_rgba(0,0,0,.12),0_1px_1px_rgba(0,0,0,.16)] dark:bg-gray-1000',
							// checked
							'data-[state=checked]:bg-background-1000 data-[state=unchecked]:translate-x-0',
							// disabled
							'group-data-[disabled=true]:bg-gray-200 group-data-[disabled=true]:text-gray-700',
							{
								'size-3 data-[state=checked]:translate-x-[13.5px]': size === 'md',
								'size-[22px] data-[state=checked]:translate-x-[15.5px]': size === 'lg'
							}
						)}
					>
						{#if checked}
							{@const Checked = icon.checked}
							<Checked
								aria-hidden="true"
								class="size-full max-h-4 max-w-4 text-gray-900 dark:text-gray-200"
							/>
						{:else}
							{@const Unchecked = icon.unchecked}
							<Unchecked
								aria-hidden="true"
								class="size-full max-h-4 max-w-4 text-gray-900 dark:text-gray-200"
							/>
						{/if}
					</span>
				{/snippet}
			</SwitchPrimitive.Thumb>
		{:else}
			<SwitchPrimitive.Thumb
				class={cn(
					'pointer-events-none block rounded-full bg-background-200 ring-0 transition-transform [box-shadow:_0_0_4px_rgba(0,0,0,.12),0_1px_1px_rgba(0,0,0,.16)] dark:bg-gray-1000',
					// checked
					'data-[state=unchecked]:translate-x-0',
					// disabled
					'group-data-[disabled=true]:bg-gray-200',
					{
						'size-3 data-[state=checked]:translate-x-[13.5px]': size === 'md',
						'size-[22px] data-[state=checked]:translate-x-[15.5px]': size === 'lg'
					}
				)}
			/>
		{/if}
	</SwitchPrimitive.Root>

	<span
		class={cn('whitespace-nowrap text-xs font-medium text-accents-5', {
			'order-last': direction === 'switch-first',
			'order-first': direction === 'switch-last'
		})}
	>
		{@render children?.()}
	</span>
</label>
