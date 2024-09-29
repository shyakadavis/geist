<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Command as CommandPrimitive } from 'bits-ui';

	type Props = CommandPrimitive.RootProps;

	let {
		value = $bindable(undefined),
		class: className = undefined,
		children,
		...rest
	}: Props = $props();
</script>

<CommandPrimitive.Root
	class={cn('flex h-full w-full flex-col overflow-hidden rounded-md bg-background-100', className)}
	bind:value
	{...rest}
>
	{@render children?.()}
</CommandPrimitive.Root>
