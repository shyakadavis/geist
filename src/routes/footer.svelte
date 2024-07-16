<script lang="ts">
	import { Icons } from '$lib/assets/icons';

	export let next_title: string;
	export let next_href: string;
</script>

<div
	class="flex grow flex-col justify-end border-r border-gray-alpha-400 px-4 py-4 xl:px-12 xl:pb-8 xl:pt-0"
>
	<div class="ml-auto pt-8">
		<nav aria-label="pagination">
			<a aria-label="Go to next page: {next_title}" class="group" href={next_href}>
				<span
					class="mb-0.5 text-sm text-gray-900 transition-colors delay-0 group-hover:text-gray-1000"
				>
					Next
				</span>
				<div class="relative">
					<span class="text-lg font-medium">
						{next_title}
					</span>
					<span
						class="absolute mt-0.5 text-gray-900 transition-colors delay-0 group-hover:text-gray-1000"
					>
						<Icons.ChevronRight aria-hidden="true" class="size-5" />
					</span>
				</div>
			</a>
		</nav>
	</div>
</div>
