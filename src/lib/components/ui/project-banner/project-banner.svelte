<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { projectBanner_variants, type NormalProjectBanner } from './index.js';

	type Props = NormalProjectBanner;

	let { ...rest }: Props = $props();

	const { base, container, container_content, icon, callToAction } = projectBanner_variants();
</script>

<div class={cn(base({ variant: rest.variant }))}>
	<div class={cn(container({ variant: rest.variant }))}>
		<div class={cn(container_content({ variant: rest.variant }))}>
			<div class={cn(icon({ variant: rest.variant }))}>
				<rest.icon />
			</div>

			<p>
				{rest.label}
			</p>
		</div>

		{#if rest.callToAction.href}
			<a href={rest.callToAction.href} class={cn(callToAction({ variant: rest.variant }))}>
				{rest.callToAction.label}
			</a>
		{:else}
			<button
				onclick={(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) =>
					rest.callToAction.onClick?.(event)}
				class={cn(callToAction({ variant: rest.variant }))}
			>
				{rest.callToAction.label}
			</button>
		{/if}
	</div>
</div>
