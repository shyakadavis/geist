<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Command as CommandPrimitive } from 'bits-ui';

	type Props = CommandPrimitive.EmptyProps;

	let { class: class_name = undefined, children, ...rest }: Props = $props();
</script>

<CommandPrimitive.Empty class={cn('py-6 text-center text-sm', class_name)} {...rest}>
	{@render children?.()}
</CommandPrimitive.Empty>
