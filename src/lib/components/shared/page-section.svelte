<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { format_string } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import Markdown from 'svelte-exmarkdown';

	type Props = {
		id: string;
		subtitle?: string;
		image?: Snippet;
		children?: Snippet;
	};

	let { id, subtitle, image, children }: Props = $props();
</script>

<div class="grid p-12 [&:not(:last-child)]:border-b">
	<a
		class="group relative -ml-5 inline-block w-fit scroll-mt-20 pl-5 no-underline outline-none focus-visible:shadow-focus-ring"
		href="#{id}"
		{id}
	>
		<h2 class="text-2xl font-semibold tracking-tighter">
			<Icons.Link
				aria-hidden="true"
				class="absolute left-0 top-[8px] size-4 opacity-0 outline-none group-hover:opacity-100 group-focus:opacity-100"
			/>
			{format_string(id)}
		</h2>
	</a>
	{#if subtitle}
		<div
			class="prose prose-neutral mt-2 max-w-none text-gray-900 transition-colors dark:prose-invert marker:content-['-'] prose-a:text-gray-900 prose-a:hover:text-gray-1000 prose-strong:font-normal prose-strong:text-gray-1000 xl:mt-4"
		>
			<Markdown md={subtitle} />
			{@render image?.()}
		</div>
	{/if}

	{@render children?.()}
</div>
