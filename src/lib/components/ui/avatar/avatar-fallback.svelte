<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Avatar as AvatarPrimitive } from 'bits-ui';

	type Props = AvatarPrimitive.FallbackProps;

	let { class: class_name = undefined, children, ...rest }: Props = $props();
</script>

<AvatarPrimitive.Fallback
	class={cn('flex h-full w-full items-center justify-center rounded-full bg-gray-100', class_name)}
	{...rest}
>
	{@render children?.()}
</AvatarPrimitive.Fallback>
