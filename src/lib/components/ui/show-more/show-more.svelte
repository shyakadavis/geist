<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';

	type Props = {
		expanded: boolean;
		onclick: () => void;
	};

	let { expanded, onclick }: Props = $props();
</script>

<div class="relative flex min-h-[30px] w-[calc(100%-40px)] items-center p-5">
	<div aria-hidden="true" class="h-px w-full -translate-x-px bg-gray-alpha-400"></div>
	<Button variant="secondary" size="sm" shape="rounded" aria-label="Show less" {onclick}>
		{#if expanded}
			Show Less
		{:else}
			Show More
		{/if}
		<span class="size-3" aria-hidden="true">
			<Icons.ChevronLeft
				class={cn('-rotate-90 transition-transform duration-200 ease-in-out', {
					'rotate-90': expanded
				})}
				aria-hidden="true"
			/>
		</span>
	</Button>
	<div aria-hidden="true" class="h-px w-full translate-x-px bg-gray-alpha-400"></div>
</div>
