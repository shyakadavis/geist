<script lang="ts">
	import { Icons } from '$lib/assets/icons';

	type Link = {
		title: string;
		href: string;
	};

	type Props = {
		next?: Link | undefined;
		previous?: Link | undefined;
	};

	let { next = undefined, previous = undefined }: Props = $props();
</script>

<nav class="flex w-full flex-wrap items-center justify-between">
	{#if previous}
		<a
			aria-label="Go to previous page: {previous.title}"
			href={previous.href}
			class="relative grid gap-0.5 py-1 pl-7 pr-2 text-gray-900 transition-colors hover:text-gray-1000"
		>
			<span class="text-xs"> Previous </span>
			<p class="text-base font-medium">
				<Icons.ChevronLeft aria-hidden="true" class="absolute bottom-2 left-1 size-4" />
				<span class="text-gray-1000">
					{previous.title}
				</span>
			</p>
		</a>
	{/if}
	<div aria-hidden="true" class="grow"></div>
	{#if next}
		<a
			aria-label="Go to next page: {next.title}"
			href={next.href}
			class="relative grid gap-0.5 py-1 pl-2 pr-7 text-gray-900 transition-colors hover:text-gray-1000"
		>
			<span class="text-xs"> Next </span>
			<p class="text-base font-medium">
				<span class="text-gray-1000">
					{next.title}
				</span>
				<Icons.ChevronRight aria-hidden="true" class="absolute bottom-2 right-1 size-4" />
			</p>
		</a>
	{/if}
</nav>
