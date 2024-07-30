<script lang="ts">
	import { Icons } from '$lib/assets/icons/index.js';
	import { cn } from '$lib/utils.js';
	import { type Props, note_variants } from './index.js';

	type $$Props = Props;

	let class_name: string | undefined | null = undefined;
	export let variant: $$Props['variant'] = 'secondary';
	export let size: $$Props['size'] = 'md';
	export let fill: $$Props['fill'] = false;
	export let disabled: $$Props['disabled'] = false;
	export let label: $$Props['label'] = undefined;
	export { class_name as class };
</script>

<div
	data-disabled={disabled}
	class={cn(note_variants({ variant, size, className: class_name, fill }))}
	{...$$restProps}
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
			<slot />
		</div>
	</div>
	<slot name="action" {disabled}></slot>
</div>
