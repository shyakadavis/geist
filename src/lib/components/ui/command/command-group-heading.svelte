<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Command as CommandPrimitive } from 'bits-ui';

	type Props = CommandPrimitive.GroupHeadingProps;

	let { class: class_name = undefined, children, ...rest }: Props = $props();
</script>

<CommandPrimitive.GroupHeading
	class={cn(
		'[&_[data-cmdk-group-heading]]:px-2 [&_[data-cmdk-group-heading]]:font-medium [&_[data-cmdk-group-heading]]:capitalize [&_[data-cmdk-group-heading]]:text-gray-900',
		class_name
	)}
	{...rest}
>
	{@render children?.()}
</CommandPrimitive.GroupHeading>
