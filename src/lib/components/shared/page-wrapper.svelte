<script lang="ts">
import { cn } from "$lib/utils";

// biome-ignore lint/style/useConst: <explanation>
let class_name: string | undefined = undefined;
export { class_name as class };
export let title: string;
export let description: string;
</script>

<section
	class={cn(
		'relative flex h-full w-full flex-col px-0 pb-8 xl:mx-auto xl:-translate-x-px xl:px-0 xl:pb-0',
		class_name,
	)}
>
	<div class="max-w-[1200px] min-w-[300px] border-r">
		<section class="p-12">
			<h1
				class="text-gray-1000 text-2xl tracking-tighter font-semibold sm:text-3xl md:text-4xl mb-3"
			>
				{title}
			</h1>
			<p class="text-gray-900 text-base sm:text-lg md:text-xl">
				{description}
			</p>
		</section>
		<slot></slot>
	</div>
	<slot name="footer"></slot>
</section>
