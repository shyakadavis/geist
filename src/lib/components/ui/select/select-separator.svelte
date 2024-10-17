<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Select as SelectPrimitive } from 'bits-ui';

	type Props = SelectPrimitive.SeparatorProps;

	let { class: class_name = undefined, ...rest }: Props = $props();
</script>

<SelectPrimitive.Separator class={cn('bg-muted -mx-1 my-1 h-px', class_name)} {...rest} />
