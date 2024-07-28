<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { DropdownMenu as MenuPrimitive } from 'bits-ui';

	type $$Props = MenuPrimitive.LabelProps & {
		inset?: boolean;
	};

	let className: $$Props['class'] = undefined;
	export let inset: $$Props['inset'] = undefined;
	export { className as class };
</script>

<MenuPrimitive.Label
	class={cn('h-10 px-2 text-sm font-semibold', inset && 'pl-8', className)}
	{...$$restProps}
>
	<slot />
</MenuPrimitive.Label>
