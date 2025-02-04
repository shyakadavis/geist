<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils.js';
	import { Accordion as CollapsePrimitive } from 'bits-ui';

	type Props = CollapsePrimitive.TriggerProps;

	let { class: class_name = undefined, children, ...rest }: Props = $props();
</script>

<CollapsePrimitive.Header class="flex">
	<CollapsePrimitive.Trigger
		class={cn(
			'flex flex-1 items-center justify-between transition-all [&[data-state=open]>svg]:rotate-180',
			'group-data-[size=sm]:py-3 group-data-[size=sm]:text-base group-data-[size=sm]:font-medium',
			'group-data-[size=md]:py-6 group-data-[size=md]:text-2xl group-data-[size=md]:font-semibold',
			class_name
		)}
		{...rest}
	>
		{@render children?.()}
		<Icons.ChevronDown class="size-4 transition-transform duration-200" />
	</CollapsePrimitive.Trigger>
</CollapsePrimitive.Header>
