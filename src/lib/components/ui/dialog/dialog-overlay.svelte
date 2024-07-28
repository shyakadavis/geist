<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import { fade } from 'svelte/transition';

	type $$Props = DialogPrimitive.OverlayProps;

	let className: $$Props['class'] = undefined;
	export let transition: $$Props['transition'] = fade;
	export let transitionConfig: $$Props['transitionConfig'] = {
		duration: 150
	};
	export { className as class };
</script>

<!-- TODO: Messed up when I removed opacity modifiers. 🤦‍♂️ i.e. being able to do `bg-background-200/80`. And Tailwind v4 will deprecate the `opacity` utility class. A resolution will require re-writing the tokens in app.css because doing `opacity-80` doesn't show the blur, for example. -->
<DialogPrimitive.Overlay
	{transition}
	{transitionConfig}
	class={cn('fixed inset-0 z-50 bg-background-100 opacity-80 backdrop-blur-sm', className)}
	{...$$restProps}
/>
