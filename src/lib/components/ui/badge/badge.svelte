<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { type Props, badge_variants } from './index.js';

	type $$Props = Props;

	let class_name: string | undefined | null = undefined;
	export let href: string | undefined = undefined;
	export let variant: $$Props['variant'];
	export let size: $$Props['size'] = 'md';
	export { class_name as class };
	export let icon: $$Props['icon'] = undefined;
</script>

<svelte:element
	this={href ? 'a' : 'span'}
	{href}
	class={cn(badge_variants({ variant, size, className: class_name }))}
	{...$$restProps}
>
	{#if icon}
		<svelte:component this={icon} class="size-4" />
	{/if}
	<slot />
</svelte:element>
