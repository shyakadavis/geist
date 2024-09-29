<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Label as LabelPrimitive } from 'bits-ui';

	type Props = LabelPrimitive.RootProps & {
		value?: string;
	};

	let { class: class_name = undefined, value = undefined, children, ...rest }: Props = $props();
</script>

<LabelPrimitive.Root
	class={cn(
		'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:text-gray-600',
		class_name
	)}
	{...rest}
>
	{#if value}
		<p class="mb-2 text-xs text-gray-900">{value}</p>
	{/if}
	{@render children?.()}
</LabelPrimitive.Root>
