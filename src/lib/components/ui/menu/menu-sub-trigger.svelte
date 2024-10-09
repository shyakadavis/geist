<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils.js';
	import { DropdownMenu as MenuPrimitive } from 'bits-ui';

	type Props = MenuPrimitive.SubTriggerProps & {
		inset?: boolean;
	};

	let { class: class_name = undefined, inset = undefined, children, ...rest }: Props = $props();
</script>

<MenuPrimitive.SubTrigger
	class={cn(
		'flex h-10 cursor-pointer select-none items-center rounded-md px-2 text-sm outline-none data-[highlighted]:bg-gray-200 data-[state=open]:bg-gray-200',
		inset && 'pl-8',
		class_name
	)}
	{...rest}
>
	{@render children?.()}
	<Icons.ChevronRight class="ml-auto size-4" />
</MenuPrimitive.SubTrigger>
