<script lang="ts">
	import type { Icons } from '$lib/assets/icons';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { cn } from '$lib/utils.js';
	import { Tabs as TabsPrimitive } from 'bits-ui';

	type Props = TabsPrimitive.TriggerProps & {
		icon?: typeof Icons.LogoGithub;
		tooltip?: string;
	};

	let {
		class: class_name = undefined,
		value,
		icon: Icon = undefined,
		tooltip = undefined,
		children,
		...rest
	}: Props = $props();
</script>

<!-- TODO: Instead of `group`, wouldn't it be cleaner to use `has selector` on the parent to remove the shadow and have normal variants on this child? -->

<!-- TODO: Wouldn't it be cool if `TabsPrimitive.Trigger` could accept an array of builders like how button do, and thus not resort to this `tabindex` hack? -->
<Tooltip.Provider>
	<Tooltip.Root delayDuration={300}>
		<Tooltip.Trigger tabindex={-1} class="first:pl-0">
			<TabsPrimitive.Trigger
				class={cn(
					'group relative inline-flex items-center justify-center gap-1.5 whitespace-nowrap px-1.5 py-3 text-sm font-medium capitalize ring-offset-background-200 transition-colors hover:text-gray-1000 focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-color focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:text-gray-900 disabled:hover:text-current data-[state=active]:text-gray-1000',
					// secondary
					'group-data-[variant=secondary]:rounded-md group-data-[variant=secondary]:bg-gray-alpha-200 group-data-[variant=secondary]:px-1.5 group-data-[variant=secondary]:py-1 group-data-[variant=secondary]:text-[0.8125rem] group-data-[variant=secondary]:leading-5 group-data-[variant=secondary]:text-gray-1000 group-data-[variant=secondary]:hover:bg-gray-alpha-300 group-data-[variant=secondary]:data-[state=active]:bg-gray-1000 group-data-[variant=secondary]:data-[state=active]:text-background-100',
					class_name
				)}
				{value}
				{...rest}
			>
				{#if Icon}
					<Icon aria-hidden="true" class="size-4" />
				{/if}
				{@render children?.()}
				<!-- TODO: Animate with cross-fade -->
				<div
					aria-hidden="true"
					class="absolute -bottom-1 h-0.5 w-full group-data-[variant=secondary]:hidden group-data-[state=active]:bg-gray-1000"
				></div>
			</TabsPrimitive.Trigger>
		</Tooltip.Trigger>
		{#if tooltip}
			<Tooltip.Content>{tooltip}</Tooltip.Content>
		{/if}
	</Tooltip.Root>
</Tooltip.Provider>
