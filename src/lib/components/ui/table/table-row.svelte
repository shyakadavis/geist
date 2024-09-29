<script lang="ts">
	import { cn, type PrimitiveTrAttributes } from '$lib/utils.js';

	type Props = PrimitiveTrAttributes & {
		'data-state'?: unknown;
	};

	let { class: class_name = undefined, ref = $bindable(null), children, ...rest }: Props = $props();
</script>

<tr
	bind:this={ref}
	class={cn(
		'transition-colors data-[state=selected]:bg-background-200 odd:group-data-[striped=true]:bg-background-200 group-data-[interactive=true]:hover:bg-gray-100',
		class_name
	)}
	{...rest}
>
	{@render children?.()}
</tr>
