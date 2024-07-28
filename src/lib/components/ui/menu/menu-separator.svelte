<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { DropdownMenu as MenuPrimitive } from 'bits-ui';

	type $$Props = MenuPrimitive.SeparatorProps;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<MenuPrimitive.Separator class={cn('-mx-1 my-1 h-px bg-gray-400', className)} {...$$restProps} />
