<script lang="ts">
	import { Icons } from '$lib/assets/icons/index.js';
	import { cn } from '$lib/utils.js';
	import { Button as LinkPrimitive } from 'bits-ui';
	import { link_variants, type Variant } from './index.js';

	type Props = LinkPrimitive.RootProps & {
		variant?: Variant;
		external?: boolean;
		href: string;
	};

	let {
		class: class_name = undefined,
		variant = 'default',
		href,
		external = false,
		children,
		...rest
	}: Props = $props();
</script>

<LinkPrimitive.Root
	class={cn(link_variants({ variant }), class_name)}
	{href}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener' : undefined}
	{...rest}
>
	{@render children?.()}
	{#if external}
		<Icons.External aria-hidden="true" />
	{/if}
</LinkPrimitive.Root>
