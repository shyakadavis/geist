<script lang="ts">
	import { cn } from '$lib/utils';
	import Footer from './footer.svelte';

	let class_name: string | undefined = undefined;
	export { class_name as class };
	export let title: string;
	export let description: string;
</script>

<section
	class={cn(
		'relative flex h-full w-full flex-col px-0 pb-8 xl:mx-auto xl:-translate-x-px xl:px-0 xl:pb-0',
		class_name
	)}
>
	<div class="min-w-[300px] max-w-[1200px] border-r">
		<section class="border-b p-12">
			<h1
				class="mb-3 text-2xl font-semibold tracking-tighter text-gray-1000 sm:text-3xl md:text-4xl"
			>
				{title}
			</h1>
			<p class="text-base text-gray-900 sm:text-lg md:text-xl">
				{description}
			</p>
		</section>
		<slot></slot>
	</div>
	<Footer />
</section>
