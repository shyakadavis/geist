<script lang="ts">
import { Icons } from "$lib/assets/icons";
import { cn } from "$lib/utils";
import { onMount } from "svelte";
import Accordion from "./accordion-animation";

export let id: string;
// biome-ignore lint/style/useConst: <explanation>
let class_name: string | undefined = undefined;
export { class_name as class };

function format_string(str: string) {
	return str.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

const accordions: Accordion[] = [];

onMount(() => {
	// biome-ignore lint/complexity/noForEach: <explanation>
	document.querySelectorAll("details").forEach((el) => {
		accordions.push(new Accordion(el as HTMLDetailsElement));
	});

	return () => {
		// Cleanup when the component is destroyed
		// biome-ignore lint/complexity/noForEach: <explanation>
		accordions.forEach((accordion) => accordion.destroy());
	};
});
</script>

<section class="grid border-t p-12">
	<a
		class="focus-visible:shadow-focus-ring group relative -ml-5 inline-block pl-5 no-underline outline-none scroll-mt-8 w-fit"
		href="#{id}"
		{id}
	>
		<h2 class="text-2xl font-semibold tracking-tighter">
			<Icons.Link
				aria-hidden="true"
				class="size-4 absolute left-0 top-[8px] opacity-0 outline-none group-hover:opacity-100 group-focus:opacity-100"
			/>
			{format_string(id)}
		</h2>
	</a>
	<div
		class="mt-4 xl:mt-7 border-gray-alpha-400 bg-background-100 group relative rounded-xl border flex w-full overflow-x-auto md:overflow-visible"
	>
		<section class="w-full">
			<div class={cn('w-full p-6', class_name)}>
				<slot></slot>
			</div>
			<details class="group">
				<summary
					class="bg-background-200 border-t flex h-[48px] rounded-b-xl group-open:rounded-b-none group-open:border-b w-full cursor-pointer items-center gap-3 px-4 text-left text-sm text-gray-900"
				>
					<Icons.ChevronRightSmall
						aria-hidden="true"
						class="size-4 group-open:rotate-90 transition-transform"
					/>
					<div class="relative inline-flex items-center gap-1 select-none overflow-hidden">
						<p class="relative inline-flex flex-col h-[1.5em] overflow-hidden">
							<span class="transform transition-all ease-in-out group-open:-translate-y-full">
								Show
							</span>
							<span
								class="absolute top-full transform transition-all ease-in-out group-open:-translate-y-full"
							>
								Hide
							</span>
						</p>
						<p>code</p>
					</div>
				</summary>
				<div class="p-6 content">Something small enough to escape casual notice.</div>
			</details>
		</section>
	</div>
</section>
