<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Dialog as DialogPrimitive } from 'bits-ui';

	type Props = DialogPrimitive.OverlayProps;

	let { class: class_name = undefined, ...rest }: Props = $props();
</script>

<DialogPrimitive.Overlay
	class={cn('fixed inset-0 z-50 bg-background-100/80 backdrop-blur-[1px]', class_name)}
	{...rest}
/>
