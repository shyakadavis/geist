<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Command as CommandPrimitive } from 'bits-ui';

	type Props = CommandPrimitive.ListProps;

	let { class: class_name = undefined, children, ...rest }: Props = $props();
</script>

<!-- TODO: Confirm this -->
<!-- ? This element is oddly trapping focus when you tab from `input` trying to get to `close`. i.e. it's input->list->close. Manually specifying `-1` because I don't think it should be focusable. -->
<CommandPrimitive.List
	tabindex={-1}
	class={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', class_name)}
	{...rest}
>
	{@render children?.()}
</CommandPrimitive.List>
