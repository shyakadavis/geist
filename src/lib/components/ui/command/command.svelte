<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Command as CommandPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		value = $bindable(''),
		class: className,
		...restProps
	}: CommandPrimitive.RootProps = $props();
</script>

<CommandPrimitive.Root
	class={cn('flex h-full w-full flex-col overflow-hidden rounded-md bg-background-100', className)}
	bind:value
	bind:ref
	{...restProps}
/>
