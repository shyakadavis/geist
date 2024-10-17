<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Dialog as DialogPrimitive } from 'bits-ui';

	type Props = DialogPrimitive.DescriptionProps;

	let { class: class_name = undefined, children, ...rest }: Props = $props();
</script>

<DialogPrimitive.Description class={cn('text-sm text-gray-700', class_name)} {...rest}>
	{@render children?.()}
</DialogPrimitive.Description>
