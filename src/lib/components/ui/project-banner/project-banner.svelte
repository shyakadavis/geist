<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { project_banner_variants, type NormalProjectBanner } from './index.js';

	type Props = NormalProjectBanner;

	let { ...rest }: Props = $props();

	const { base, container, container_content, icon, call_to_action } = project_banner_variants();
</script>

<aside class={cn(base({ variant: rest.variant }))}>
	<div class={cn(container({ variant: rest.variant }))}>
		<div class={cn(container_content({ variant: rest.variant }))}>
			<div class={cn(icon({ variant: rest.variant }))}>
				<rest.icon />
			</div>

			{#if typeof rest.label === 'string'}
				<p>
					{rest.label}
				</p>
			{:else}
				{@render rest.label()}
			{/if}
		</div>

		{#if rest.call_to_action.href}
			<a href={rest.call_to_action.href} class={cn(call_to_action({ variant: rest.variant }))}>
				{rest.call_to_action.label}
			</a>
		{:else}
			<button
				onclick={rest.call_to_action.onclick}
				class={cn(call_to_action({ variant: rest.variant }))}
			>
				{rest.call_to_action.label}
			</button>
		{/if}
	</div>
</aside>
