<script lang="ts">
	import type { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils.js';
	import { Avatar as AvatarPrimitive } from 'bits-ui';

	type Props = AvatarPrimitive.RootProps & {
		icon?: typeof Icons.Bell;
	};

	let {
		class: class_name = undefined,
		icon: Icon = undefined,
		children,
		...rest
	}: Props = $props();
</script>

<AvatarPrimitive.Root
	class={cn('relative size-10 rounded-full border border-gray-alpha-400', class_name)}
	{...rest}
>
	<div class="flex size-full shrink-0 overflow-hidden rounded-[inherit]">
		{@render children?.()}
	</div>
	{#if Icon}
		<Icon
			class="absolute -bottom-[5px] -left-[3px] size-3.5 rounded-full bg-background-200"
			aria-hidden="true"
		/>
	{/if}
</AvatarPrimitive.Root>
