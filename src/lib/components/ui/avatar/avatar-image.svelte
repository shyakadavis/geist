<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Avatar as AvatarPrimitive } from 'bits-ui';

	type Props = AvatarPrimitive.ImageProps;

	let {
		class: class_name = undefined,
		src = undefined,
		alt = undefined,
		...rest
	}: Props = $props();
</script>

<AvatarPrimitive.Image
	{src}
	{alt}
	class={cn('aspect-square h-full w-full', class_name)}
	{...rest}
/>
