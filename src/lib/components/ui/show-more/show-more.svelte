<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';

	export let expanded: boolean;
</script>

<div class="relative flex min-h-[30px] w-[calc(100%-40px)] items-center p-5">
	<div aria-hidden="true" class="h-px w-full -translate-x-px bg-gray-alpha-400"></div>
	<Button variant="secondary" size="sm" shape="rounded" aria-label="Show less" on:click>
		Show less
		<Icons.ChevronLeft
			class={cn('size-4 -rotate-90 transition-transform duration-200 ease-in-out', {
				'rotate-90': expanded
			})}
			aria-hidden="true"
		/>
	</Button>
	<div aria-hidden="true" class="h-px w-full translate-x-px bg-gray-alpha-400"></div>
</div>
