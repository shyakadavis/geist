<script lang="ts">
import { cn } from "$lib/utils";

export let title: string;
export let description: string;
export let href: string;
// biome-ignore lint/style/useConst: This is a Svelte state variable
let class_name: string | undefined = undefined;
export { class_name as class };
</script>

<a
	class={cn(
		'group relative border-b flex h-full flex-col gap-6 p-8 no-underline outline-none odd:border-r hover:bg-background-100 transition-colors delay-0',
		class_name,
	)}
	{href}
>
	<slot></slot>
	<div class="mt-auto">
		<p class="font-semibold">{title}</p>
		<p class="text-gray-900">{description}</p>
	</div>
	<div
		class="z-10 pointer-events-none absolute inset-0 border-2 border-blue-700 opacity-0 group-focus-visible:opacity-100"
	></div>
</a>
