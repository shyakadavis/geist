<script lang="ts">
	import { Icons } from '$lib/assets/icons/index.js';
	import { cn } from '$lib/utils.js';
	import type { Snippet } from 'svelte';
	import { Link } from '../link/index.js';
	import { error_variants, type Size } from './index.js';

	type Props = {
		class?: string;
		size?: Size;
		label?: string;
		error?: {
			message: string;
			action: string;
			link: string;
		};
		children?: Snippet;
	};

	let {
		class: class_name = undefined,
		size = 'md',
		label = undefined,
		error = undefined,
		children,
		...rest
	}: Props = $props();
</script>

<p class={cn(error_variants({ size, className: class_name }))} {...rest}>
	<Icons.Stop aria-hidden="true" class="size-4" />
	{#if error}
		<span>{error.message}</span>
		<span>
			<Link
				href={error.link}
				external={error.link.startsWith('https')}
				class="font-medium underline underline-offset-4 hover:opacity-70"
			>
				{error.action}
			</Link>
		</span>
	{:else}
		{#if label}
			<b>{label}:</b>
		{/if}
		{@render children?.()}
	{/if}
</p>
