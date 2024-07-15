<script lang="ts">
import { cn } from "$lib/utils.js";
import { type Props, badgeVariants } from "./index.js";

type $$Props = Props;

// biome-ignore lint/style/useConst: <explanation>
let className: string | undefined | null = undefined;
// biome-ignore lint/style/useConst: <explanation>
export let href: string | undefined = undefined;
export let variant: $$Props["variant"];
// biome-ignore lint/style/useConst: <explanation>
export let size: $$Props["size"] = "md";
export { className as class };
// biome-ignore lint/style/useConst: <explanation>
export let icon: $$Props["icon"] = undefined;
</script>

<svelte:element
	this={href ? 'a' : 'span'}
	{href}
	class={cn(badgeVariants({ variant, size, className }))}
	{...$$restProps}
>
	{#if icon}
		<svelte:component this={icon} class="size-4" />
	{/if}
	<slot />
</svelte:element>
