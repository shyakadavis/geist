<script lang="ts">
	import { Icons } from '$lib/assets/icons/index.js';
	import { cn } from '$lib/utils.js';
	import type { Snippet } from 'svelte';
	import { badge_variants, type Size, type Variant } from './index.js';

	type Props = {
		variant: Variant;
		size?: Size;
		icon?: typeof Icons.Shield;
		class?: string;
		href?: string;
		children?: Snippet;
	};

	let {
		class: class_name = undefined,
		href = undefined,
		variant,
		size = 'md',
		icon: Icon = undefined,
		children,
		...rest
	}: Props = $props();
</script>

<svelte:element
	this={href ? 'a' : 'span'}
	{href}
	class={cn(badge_variants({ variant, size, className: class_name }))}
	{...rest}
>
	{#if Icon}
		<Icon aria-hidden="true" class="size-4" />
	{/if}
	{@render children?.()}
</svelte:element>
