<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Accordion as CollapsePrimitive } from 'bits-ui';
	import { slide } from 'svelte/transition';

	type $$Props = CollapsePrimitive.ContentProps;

	let class_name: $$Props['class'] = undefined;
	export let transition: $$Props['transition'] = slide;
	export let transitionConfig: $$Props['transitionConfig'] = {
		duration: 200
	};
	export { class_name as class };
</script>

<CollapsePrimitive.Content
	class={cn('overflow-hidden text-base transition-all', class_name)}
	{transition}
	{transitionConfig}
	{...$$restProps}
>
	<div class="pb-4 pt-0">
		<slot />
	</div>
</CollapsePrimitive.Content>
