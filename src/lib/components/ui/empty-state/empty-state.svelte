<script lang="ts">
	import type { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils.js';
	import type { Snippet } from 'svelte';
	import { empty_state_variants, type Variant } from './index.js';

	type Props = {
		title: string;
		description: string;
		class?: string;
		variant?: Variant;
		icon?: typeof Icons.Shield;
		icon_size?: number;
		children?: Snippet;
	};

	let {
		class: class_name = undefined,
		variant = undefined,
		title,
		description,
		icon: Icon = undefined,
		icon_size = 32,
		children,
		...rest
	}: Props = $props();

	let icon_parent_size = $derived(icon_size ? icon_size + 28 : 32);
</script>

<div class={cn(empty_state_variants({ variant, className: class_name }))} {...rest}>
	{#if Icon}
		<span
			class="grid place-items-center rounded-lg border border-gray-alpha-400 bg-background-100 p-[14px]"
			style="width: {icon_parent_size}px; height: {icon_parent_size}px;"
		>
			<Icon aria-hidden="true" width={icon_size} height={icon_size} />
		</span>
	{/if}
	<div class="grid place-items-center gap-2">
		<p class="text-lg font-medium text-gray-1000">{title}</p>
		<p class="text-balance text-sm">{description}</p>
	</div>
	{@render children?.()}
</div>
