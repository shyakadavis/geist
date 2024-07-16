<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import Accordion from './accordion-animation';

	export let id: string;
	let class_name: string | undefined = undefined;
	export { class_name as class };

	function format_string(str: string) {
		return str.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
	}

	const accordions: Accordion[] = [];

	onMount(() => {
		document.querySelectorAll('details').forEach((el) => {
			accordions.push(new Accordion(el));
		});

		return () => {
			// Cleanup when the component is destroyed
			accordions.forEach((accordion) => accordion.destroy());
		};
	});
</script>

<section class="grid border-t p-12">
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
	<div
		class="group relative mt-4 flex w-full overflow-x-auto rounded-xl border border-gray-alpha-400 bg-background-100 md:overflow-visible xl:mt-7"
	>
		<section class="w-full">
			<div class={cn('w-full p-6', class_name)}>
				<slot></slot>
			</div>
			<details class="group">
				<summary
					class="flex h-[48px] w-full cursor-pointer items-center gap-3 rounded-b-xl border-t bg-background-200 px-4 text-left text-sm text-gray-900 outline-none focus-visible:shadow-focus-ring group-open:rounded-b-none group-open:border-b"
				>
					<Icons.ChevronRightSmall
						aria-hidden="true"
						class="size-4 transition-transform group-open:rotate-90"
					/>
					<p class="relative inline-flex h-[1.5em] select-none flex-col overflow-hidden">
						<span class="transition-transform ease-in-out group-open:-translate-y-full">
							Show code
						</span>
						<span
							class="absolute top-full transition-transform ease-in-out group-open:-translate-y-full"
						>
							Hide code
						</span>
					</p>
				</summary>
				<div class="content p-6">Something small enough to escape casual notice.</div>
			</details>
		</section>
	</div>
</section>
