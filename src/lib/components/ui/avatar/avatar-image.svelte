<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Avatar as AvatarPrimitive } from 'bits-ui';

	type $$Props = AvatarPrimitive.ImageProps;

	let class_name: $$Props['class'] = undefined;
	export let src: $$Props['src'] = undefined;
	export let alt: $$Props['alt'] = undefined;
	export { class_name as class };
</script>

<AvatarPrimitive.Image
	{src}
	{alt}
	class={cn('aspect-square h-full w-full', class_name)}
	{...$$restProps}
/>
