<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';

	type Props = ContextMenuPrimitive.SeparatorProps;

	let { class: class_name = undefined, ...rest }: Props = $props();
</script>

<ContextMenuPrimitive.Separator class={cn('-mx-1 my-1 h-px bg-gray-400', class_name)} {...rest} />
