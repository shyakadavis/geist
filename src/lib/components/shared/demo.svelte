<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import Markdown from 'svelte-exmarkdown';
	import { scale } from 'svelte/transition';
	import Accordion from './accordion-animation';
	import { get_highlighted_code } from './shiki';

	let class_name: string | undefined = undefined;
	export let id: string;
	export let code: string;
	export let subtitle: string | undefined = undefined;
	export { class_name as class };

	// e.g. "with-icons" -> "With Icons"
	function format_string(str: string) {
		return str.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
	}

	// Show/hide code details animation
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

	// Code highlighting
	let highlighted_code = '';
	onMount(async () => {
		highlighted_code = await get_highlighted_code(code);
	});

	let copied = false;
	function copy_code() {
		navigator.clipboard.writeText(code);
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 1000);
	}
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
		<p
			class="prose prose-neutral mt-2 max-w-none text-gray-900 transition-colors dark:prose-invert marker:content-['-'] prose-a:text-gray-900 prose-a:hover:text-gray-1000 prose-strong:font-normal prose-strong:text-gray-1000 xl:mt-4"
		>
			<Markdown md={subtitle} />
			<slot name="image"></slot>
		</p>
	{/if}
	<div
		class="group relative mt-4 overflow-x-auto rounded-xl border border-gray-alpha-400 bg-background-100 xl:mt-7"
	>
		<section id="component-demo" class={cn('w-full p-6', class_name)}>
			<slot></slot>
		</section>
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
			<div
				class="content relative p-6 font-mono text-sm [&>pre>code]:whitespace-pre-wrap [&>pre>code]:break-words"
			>
				{@html highlighted_code}

				<button
					type="button"
					class="absolute right-10 top-10 hidden items-center justify-center rounded-md border-gray-alpha-400 bg-background-100 p-2 transition-colors hover:bg-gray-alpha-200 md:flex"
					on:click={copy_code}
				>
					{#if copied}
						<div in:scale={{ duration: 200 }}>
							<Icons.Check aria-hidden="true" class="size-4" />
							<span class="sr-only">Copied</span>
						</div>
					{:else}
						<div
							class="text-background-100 transition-colors group-hover:text-gray-1000"
							in:scale={{ duration: 100 }}
						>
							<Icons.Copy aria-hidden="true" class="size-4" />
							<span class="sr-only">Copy code</span>
						</div>
					{/if}
				</button>
			</div>
		</details>
	</div>
</div>

<style>
	summary::-webkit-details-marker {
		display: none;
	}
</style>
