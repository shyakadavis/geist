<script lang="ts">
	import { Icons } from '$lib/assets/icons/index.js';
	import { cn } from '$lib/utils.js';
	import { Button as LinkPrimitive } from 'bits-ui';
	import { type Events, type Props, link_variants } from './index.js';

	type $$Props = Props;
	type $$Events = Events;

	let class_name: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = 'default';
	export let href: $$Props['href'];
	export let builders: $$Props['builders'] = [];
	export let external: $$Props['external'] = false;
	export { class_name as class };
</script>

<LinkPrimitive.Root
	{builders}
	class={cn(link_variants({ variant, className: class_name }))}
	{href}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
	{...$$restProps}
	on:click
	on:keydown
>
	<slot />
	{#if external}
		<Icons.External aria-hidden="true" />
	{/if}
</LinkPrimitive.Root>
