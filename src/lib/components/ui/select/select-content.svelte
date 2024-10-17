<script lang="ts">
	import * as Select from '$lib/components/ui/select/index.js';
	import { cn } from '$lib/utils.js';
	import { Select as SelectPrimitive } from 'bits-ui';

	type Props = SelectPrimitive.ContentProps;

	let {
		class: class_name = undefined,
		sideOffset = 4,
		position = 'floating',
		children,
		...rest
	}: Props = $props();
</script>

<SelectPrimitive.Portal>
	<SelectPrimitive.Content
		{sideOffset}
		class={cn(
			'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-background-100 text-gray-1000 shadow-md',
			// open animation
			'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
			// open animation
			'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
			position === 'floating' &&
				'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
			class_name
		)}
		{position}
		{...rest}
	>
		<Select.ScrollUpButton />
		<SelectPrimitive.Viewport
			class={cn(
				'p-1',
				position === 'floating' &&
					'h-[var(--bits-select-trigger-height)] w-full min-w-[var(--bits-select-trigger-width)]'
			)}
		>
			{@render children?.()}
		</SelectPrimitive.Viewport>
		<Select.ScrollDownButton />
	</SelectPrimitive.Content>
</SelectPrimitive.Portal>
