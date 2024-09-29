<script lang="ts">
	import { Icons } from '$lib/assets/icons/index.js';
	import { cn } from '$lib/utils.js';
	import { type Props, note_variants } from './index.js';

	type $$Props = Props;

	interface Props_1 { [key: string]: any }

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
	}: Props_1 = $props();
	
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
	{@render action?.({ disabled, })}
</div>
