<script lang="ts">
	import type { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils.js';
	import { Avatar as AvatarPrimitive } from 'bits-ui';

	type $$Props = AvatarPrimitive.Props & {
		icon?: typeof Icons.Bell;
	};

	let class_name: $$Props['class'] = undefined;
	export let delay_ms: $$Props['delayMs'] = undefined;
	export let icon: $$Props['icon'] = undefined;
	export { class_name as class };
</script>

<AvatarPrimitive.Root
	delayMs={delay_ms}
	class={cn('relative size-10 rounded-full border border-gray-alpha-400', class_name)}
	{...$$restProps}
>
	<div class="flex size-full shrink-0 overflow-hidden rounded-[inherit]">
		<slot />
	</div>
	{#if icon}
		<svelte:component
			this={icon}
			class="absolute -bottom-[5px] -left-[3px] size-3.5 rounded-full bg-background-200"
			aria-hidden="true"
		/>
	{/if}
</AvatarPrimitive.Root>
