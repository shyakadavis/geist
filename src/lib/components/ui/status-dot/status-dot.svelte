<script lang="ts">
	import { cn } from '$lib/utils';
	import { status_dot_variants, type Variant } from '.';

	type Props = {
		state: Exclude<Variant, undefined>;
		label?: boolean;
	};

	let { state, label = false }: Props = $props();
</script>

<span
	class="inline-flex items-center gap-2"
	aria-label="This deployment is {state.toLocaleLowerCase()}"
	title="This deployment is {state.toLocaleLowerCase()}"
>
	<span class={cn(status_dot_variants({ variant: state }))}></span>
	{#if label}
		<span class="text-sm lowercase first-letter:capitalize">
			{state}
		</span>
	{/if}
</span>
