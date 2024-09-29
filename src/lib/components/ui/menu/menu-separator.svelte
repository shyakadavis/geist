<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { DropdownMenu as MenuPrimitive } from 'bits-ui';

	type $$Props = MenuPrimitive.SeparatorProps;

	interface Props { [key: string]: any }

	let { class: className = undefined, ...rest }: Props = $props();
	
</script>

<MenuPrimitive.Separator class={cn('-mx-1 my-1 h-px bg-gray-400', className)} {...rest} />
