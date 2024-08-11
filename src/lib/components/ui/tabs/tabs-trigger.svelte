<script lang="ts">
	import type { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils.js';
	import { Tabs as TabsPrimitive } from 'bits-ui';

	type $$Props = TabsPrimitive.TriggerProps & {
		icon?: typeof Icons.LogoGithub;
	};
	type $$Events = TabsPrimitive.TriggerEvents;

	let class_name: $$Props['class'] = undefined;
	export let value: $$Props['value'];
	export let icon: $$Props['icon'] = undefined;
	export { class_name as class };
</script>

<!-- TODO: Instead of `group`, wouldn't it be cleaner to use `has selector` on the parent to remove the shadow and have normal variants on this child? -->

<!-- TODO: Add tooltip to assist when the trigger is disabled -->
<TabsPrimitive.Trigger
	class={cn(
		'group relative inline-flex items-center justify-center gap-1.5 whitespace-nowrap px-1.5 py-3 text-sm font-medium capitalize ring-offset-background-200 transition-colors first:pl-0 hover:text-gray-1000 focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-color focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:text-gray-900 disabled:hover:text-current data-[state=active]:text-gray-1000',
		// secondary
		'group-data-[variant=secondary]:rounded-md group-data-[variant=secondary]:bg-gray-alpha-200 group-data-[variant=secondary]:px-1.5 group-data-[variant=secondary]:py-1 group-data-[variant=secondary]:text-[0.8125rem] group-data-[variant=secondary]:leading-5 group-data-[variant=secondary]:text-gray-1000 group-data-[variant=secondary]:hover:bg-gray-alpha-300 group-data-[variant=secondary]:data-[state=active]:bg-gray-1000 group-data-[variant=secondary]:data-[state=active]:text-background-100',
		class_name
	)}
	{value}
	{...$$restProps}
	on:click
>
	<svelte:component this={icon} aria-hidden="true" class="size-4" />
	<slot></slot>
	<!-- TODO: Animate with cross-fade -->
	<div
		class="absolute -bottom-1 h-0.5 w-full group-data-[variant=secondary]:hidden group-data-[state=active]:bg-gray-1000"
	></div>
</TabsPrimitive.Trigger>
