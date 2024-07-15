<script lang="ts">
import { Icons } from "$lib/assets/icons";
import { cn } from "$lib/utils";

export let id: string;
// biome-ignore lint/style/useConst: <explanation>
let class_name: string | undefined = undefined;
export { class_name as class };

function format_string(str: string) {
	return str.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}
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
				class="size-4 absolute left-0 top-[8px] opacity-0 outline-none group-hover:opacity-100 group-focus:opacity-100 capitalize"
			/>
			{format_string(id)}
		</h2>
	</a>
	<div
		class="mt-4 xl:mt-7 border-gray-alpha-400 bg-background-100 group relative rounded-xl border flex w-full overflow-x-auto md:overflow-visible"
	>
		<div class={cn('w-full p-6', class_name)}>
			<slot></slot>
		</div>
	</div>
</section>
