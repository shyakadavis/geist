<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	type Props = {
		title: string;
		description: string;
		href: string;
		class?: string | undefined;
		children?: Snippet;
	};

	let { title, description, href, class: class_name = undefined, children }: Props = $props();

	function is_link_external(href: string) {
		return href.startsWith('http');
	}
</script>

<a
	class={cn(
		'group relative flex h-full flex-col gap-6 p-8 no-underline outline-none transition-colors delay-0 odd:border-r hover:bg-background-100 [&:not(:nth-last-child(-n+2))]:border-b',
		class_name
	)}
	{href}
	target={is_link_external(href) ? '_blank' : undefined}
	rel={is_link_external(href) ? 'noopener noreferrer' : undefined}
>
	{@render children?.()}
	<div class="mt-auto">
		<p class="font-semibold">{title}</p>
		<p class="text-gray-900">{description}</p>
	</div>
	<div
		class="pointer-events-none absolute inset-0 z-10 border-2 border-blue-700 opacity-0 group-focus-visible:opacity-100"
	></div>
</a>
