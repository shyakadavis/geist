<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import { fade } from 'svelte/transition';

	type $$Props = DialogPrimitive.OverlayProps;

	let class_name: $$Props['class'] = undefined;
	export let transition: $$Props['transition'] = fade;
	export let transitionConfig: $$Props['transitionConfig'] = {
		duration: 150
	};
	export { class_name as class };
</script>

<DialogPrimitive.Overlay
	{transition}
	{transitionConfig}
	class={cn('fixed inset-0 z-50 bg-background-100/80 backdrop-blur-[1px]', class_name)}
	{...$$restProps}
/>
