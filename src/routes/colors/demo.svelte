<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLElement> & {
		children: Snippet;
	};

	let { class: class_name, children, ...rest }: Props = $props();
</script>

<section
	class={cn(
		'mt-10 flex w-full flex-col border border-gray-400 bg-background-100 md:flex-row',
		class_name
	)}
	{...rest}
>
	{@render children()}
</section>
