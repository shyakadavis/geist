<script lang="ts">
	import { page } from '$app/stores';
	import { Icons } from '$lib/assets/icons';
	import { aside_items, type Link } from './sitemap';

	function generate_prev_next_links(current_href: string): {
		prev: Link | null;
		next: Link | null;
	} {
		const all_links: Link[] = Object.values(aside_items)
			.flat()
			.filter((link) => link.status !== 'soon');
		const current_index = all_links.findIndex((link) => link.href === current_href);

		if (current_index === -1) {
			return { prev: null, next: null };
		}

		const prev = current_index > 0 ? all_links[current_index - 1] : null;
		const next = current_index < all_links.length - 1 ? all_links[current_index + 1] : null;

		return { prev, next };
	}

	const { prev, next } = generate_prev_next_links($page.url.pathname);
</script>

<div
	class="flex grow flex-col justify-end border-r border-t border-gray-alpha-400 px-4 py-4 xl:px-12 xl:pb-8 xl:pt-0"
>
	<nav aria-label="pagination" class="flex pt-8">
		{#if prev}
			<a
				aria-label="Go to previous page: {prev.title}"
				class="group flex items-end justify-between gap-2"
				href={prev.href}
			>
				<Icons.ChevronLeft
					aria-hidden="true"
					class="mb-1 size-4 text-gray-900 transition-colors delay-0 group-hover:text-gray-1000"
				/>
				<p class="flex flex-col">
					<span class="text-xs text-gray-900 transition-colors delay-0 group-hover:text-gray-1000">
						Previous
					</span>
					<span class="text-lg font-medium">
						{prev.title}
					</span>
				</p>
			</a>
		{/if}
		<div class="grow" aria-hidden="true"></div>
		{#if next}
			<a
				aria-label="Go to next page: {next.title}"
				class="group flex items-end justify-between gap-2"
				href={next.href}
			>
				<p class="flex flex-col">
					<span class="text-xs text-gray-900 transition-colors delay-0 group-hover:text-gray-1000">
						Next
					</span>
					<span class="text-lg font-medium">
						{next.title}
					</span>
				</p>
				<Icons.ChevronRight
					aria-hidden="true"
					class="mb-1 size-4 text-gray-900 transition-colors delay-0 group-hover:text-gray-1000"
				/>
			</a>
		{/if}
	</nav>
</div>
