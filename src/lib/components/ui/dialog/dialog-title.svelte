<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Dialog as DialogPrimitive } from 'bits-ui';

	type Props = DialogPrimitive.TitleProps;

	let { class: class_name = undefined, children, ...rest }: Props = $props();
</script>

<DialogPrimitive.Title
	class={cn('text-lg font-semibold leading-none tracking-tight', class_name)}
	{...rest}
>
	{@render children?.()}
</DialogPrimitive.Title>
