<!--
SVelte 4 doesn't do TypeScript Discriminating unions - at least in a way that easily makes sense. Consider this a hack.
See: https://github.com/sveltejs/svelte/issues/9130

Svelte 5 will fix this through the $props() rune: https://github.com/sveltejs/svelte/issues/9130#issuecomment-1812133175

Right now, the typing is a bit of a mess.

But basically, here is the goal; if a user provides `svg_only`, then the button should be an icon-only button, with a required `aria-label` prop.
If `svg_only` is not provided, then the button should be a normal button, but the `tiny` size should not be available.
 -->
<script lang="ts">
	import { Spinner } from '$lib/components/ui/spinner';
	import { cn } from '$lib/utils.js';
	import { Button as ButtonPrimitive } from 'bits-ui';
	import { type Events, type Props, button_variants } from './index.js';

	type $$Props = Props;
	type $$Events = Events;
	$: props = $$props as $$Props;

	// Common props
	let class_name: $$Props['class'] = undefined;
	export let builders: $$Props['builders'] = [];
	export let variant: $$Props['variant'] = 'default';
	export { class_name as class };
</script>

{#if props.svg_only}
	<ButtonPrimitive.Root
		aria-label={props['aria-label']}
		{builders}
		class={cn(button_variants({ variant, svg_size: props.size, className: class_name }), {
			'rounded-full': props.shape === 'circle'
		})}
		type="button"
		{...$$restProps}
		on:click
		on:keydown
	>
		<slot></slot>
	</ButtonPrimitive.Root>
{:else}
	<ButtonPrimitive.Root
		{builders}
		class={cn(button_variants({ variant, size: props.size, className: class_name }), {
			'rounded-full': props.shape === 'rounded',
			'shadow-shadow-border-small': props.shadow
		})}
		type="button"
		{...$$restProps}
		on:click
		on:keydown
		disabled={props.loading || props.disabled}
	>
		{#if props.loading}
			<Spinner size={props.size === 'lg' ? 24 : 16} />
		{/if}
		{#if props.affix}
			<svelte:component this={props.affix} aria-hidden="true" />
		{/if}
		<slot />
		{#if props.suffix}
			<svelte:component this={props.suffix} aria-hidden="true" />
		{/if}
	</ButtonPrimitive.Root>
{/if}
