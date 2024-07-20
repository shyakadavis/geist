<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { type Props, empty_state_variants } from './index.js';

	type $$Props = Props;

	let class_name: string | undefined | null = undefined;
	export let variant: $$Props['variant'] = undefined;
	export let title: $$Props['title'];
	export let description: $$Props['description'];
	export let icon_size: $$Props['icon_size'] = 32;
	export { class_name as class };
	export let icon: $$Props['icon'] = undefined;

	$: icon_parent_size = icon_size ? icon_size + 28 : 32;
</script>

<div class={cn(empty_state_variants({ variant, className: class_name }))} {...$$restProps}>
	{#if icon}
		<span
			class="grid place-items-center rounded-lg border border-gray-alpha-400 bg-background-100 p-[14px]"
			style="width: {icon_parent_size}px; height: {icon_parent_size}px;"
		>
			<svelte:component this={icon} aria-hidden="true" width={icon_size} height={icon_size} />
		</span>
	{/if}
	<div class="grid place-items-center gap-2">
		<p class="text-lg font-medium text-gray-1000">{title}</p>
		<p class="text-balance text-sm">{description}</p>
	</div>
	<slot></slot>
</div>
