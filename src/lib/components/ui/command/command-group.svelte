<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Command as CommandPrimitive } from 'bits-ui';

	type Props = CommandPrimitive.GroupProps;

	let { class: class_name = undefined, children, ...rest }: Props = $props();
</script>

<CommandPrimitive.Group
	class={cn(
		'overflow-hidden p-1 text-gray-1000 [&_[data-cmdk-group-heading]]:px-2 [&_[data-cmdk-group-heading]]:py-1.5 [&_[data-cmdk-group-heading]]:text-xs [&_[data-cmdk-group-heading]]:font-medium [&_[data-cmdk-group-heading]]:text-gray-900',
		class_name
	)}
	{...rest}
>
	{@render children?.()}
</CommandPrimitive.Group>
