<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';

	type $$Props = ContextMenuPrimitive.SeparatorProps;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<ContextMenuPrimitive.Separator
	class={cn('-mx-1 my-1 h-px bg-gray-400', className)}
	{...$$restProps}
/>
