<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import { note_variants, type Fill, type Size, type Variant } from './index.js';

	export type Props = {
		class?: string;
		variant?: Variant;
		size?: Size;
		fill?: Fill;
		disabled?: boolean;
		label?: string | boolean;
		children: Snippet;
		action?: Snippet;
	};
</script>

<script lang="ts">
	import { Icons } from '$lib/assets/icons/index.js';
	import { cn } from '$lib/utils.js';

	let {
		class: class_name = undefined,
		variant = 'secondary',
		size = 'md',
		fill = false,
		disabled = false,
		label = undefined,
		children,
		action,
		...rest
	}: Props = $props();
</script>

<div
	data-disabled={disabled}
	class={cn(note_variants({ variant, size, className: class_name, fill }))}
	{...rest}
>
	<div class="flex items-center gap-2">
		{#if label}
			<span class="font-semibold">{label}:</span>
		{:else if label !== false}
			<span class="h-4">
				{#if variant === 'secondary' || variant === 'violet' || variant === 'cyan'}
					<Icons.Information aria-hidden="true" class="size-4" />
				{:else if variant === 'success'}
					<Icons.CheckCircle aria-hidden="true" class="size-4" />
				{:else if variant === 'error'}
					<Icons.Stop aria-hidden="true" class="size-4" />
				{:else if variant === 'warning'}
					<Icons.Warning aria-hidden="true" class="size-4" />
				{/if}
			</span>
		{/if}
		<div>
			{@render children?.()}
		</div>
	</div>
	{@render action?.()}
</div>
