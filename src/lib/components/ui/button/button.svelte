<script lang="ts">
	import { Spinner } from '$lib/components/ui/spinner/index.js';
	import { cn } from '$lib/utils.js';
	import { Button as ButtonPrimitive } from 'bits-ui';
	import { button_variants, type NormalButton, type SVGButton } from './index.js';

	type Props = ButtonPrimitive.RootProps & (NormalButton | SVGButton);

	let { children, class: class_name = undefined, ...rest }: Props = $props();
</script>

<!-- If a user provides `svg_only` prop, then the button should be an icon-only button -->
{#if rest.svg_only}
	<ButtonPrimitive.Root
		class={cn(
			button_variants({ variant: rest.variant, svg_size: rest.size }),
			{
				'rounded-full': rest.shape === 'circle'
			},
			class_name
		)}
		{...rest}
	>
		{@render children?.()}
	</ButtonPrimitive.Root>
{:else}
	<ButtonPrimitive.Root
		disabled={rest.loading || rest.disabled}
		class={cn(
			button_variants({ variant: rest.variant, size: rest.size }),
			{
				'rounded-full': rest.shape === 'rounded',
				'shadow-shadow-border-small': rest.shadow
			},
			class_name
		)}
		{...rest}
	>
		{#if rest.loading}
			<Spinner size={rest.size === 'lg' ? 24 : 16} />
		{/if}
		{#if rest.affix}
			{@const Icon = rest.affix}
			<Icon aria-hidden="true" />
		{/if}
		{@render children?.()}
		{#if rest.suffix}
			{@const Icon = rest.suffix}
			<Icon aria-hidden="true" />
		{/if}
	</ButtonPrimitive.Root>
{/if}
