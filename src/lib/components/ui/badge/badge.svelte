<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { type Props, badgeVariants } from './index.js';

	type $$Props = Props;

	let className: string | undefined | null = undefined;
	export let href: string | undefined = undefined;
	export let variant: $$Props['variant'];
	export let size: $$Props['size'] = 'md';
	export { className as class };
	export let icon: $$Props['icon'] = undefined;
</script>

<svelte:element
	this={href ? 'a' : 'span'}
	{href}
	class={cn(badgeVariants({ variant, size, className }))}
	{...$$restProps}
>
	{#if icon}
		<svelte:component this={icon} class="size-4" />
	{/if}
	<slot />
</svelte:element>
