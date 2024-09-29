<script lang="ts">
	import { cn, type PrimitiveTableSectionAttributes } from '$lib/utils.js';

	type Props = PrimitiveTableSectionAttributes & {
		striped?: boolean;
		interactive?: boolean;
	};

	let {
		class: class_name = undefined,
		striped = false,
		interactive = false,
		ref = $bindable(null),
		children,
		...rest
	}: Props = $props();
</script>

<!-- TODO: Find a way to add space to the top of the because this `div` breaks the app. -->
<!-- <div aria-hidden="true" class="h-3"></div> -->
<tbody
	bind:this={ref}
	data-striped={striped}
	data-interactive={interactive}
	class={cn('group', class_name)}
	{...rest}
>
	{@render children?.()}
</tbody>
