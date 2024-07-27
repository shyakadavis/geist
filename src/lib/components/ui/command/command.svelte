<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Command as CommandPrimitive } from 'cmdk-sv';

	type $$Props = CommandPrimitive.CommandProps;

	export let value: $$Props['value'] = undefined;

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<CommandPrimitive.Root
	class={cn('flex h-full w-full flex-col overflow-hidden rounded-md bg-background-100', className)}
	bind:value
	{...$$restProps}
>
	<slot />
</CommandPrimitive.Root>
