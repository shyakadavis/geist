<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils';
	import { scale } from 'svelte/transition';
	import { copy_button_variants, snippet_variants, type Props } from '.';

	type $$Props = Props;

	export let text: $$Props['text'];
	export let prompt: $$Props['prompt'] = true;
	export let variant: $$Props['variant'] = 'default';
	export let on_copy: $$Props['on_copy'] = undefined;
	export let inverted: $$Props['inverted'] = false;
	let class_name: $$Props['class'] = undefined;
	export { class_name as class };

	let copied = false;

	async function copy_snippet() {
		if (typeof text == 'string') {
			await navigator.clipboard.writeText(text);
		} else {
			await navigator.clipboard.writeText(text.join('\n'));
		}

		copied = true;

		if (on_copy) {
			on_copy();
		}

		setTimeout(() => (copied = false), 750);
	}
</script>

<div
	class={cn(snippet_variants({ variant, className: class_name }), {
		'bg-gray-1000 text-gray-100': inverted
	})}
>
	{#if typeof text == 'string'}
		<pre
			class={cn('overflow-y-auto whitespace-nowrap text-left font-mono text-[13px] leading-5', {
				"before:content-['$']": prompt
			})}>
			{text}
		</pre>
	{:else}
		{#each text as line}
			<pre
				class={cn('overflow-y-auto whitespace-nowrap text-left font-mono text-[13px] leading-5', {
					"before:content-['$']": prompt
				})}>
			{line}
		</pre>
		{/each}
	{/if}

	<button
		on:click={copy_snippet}
		type="button"
		class={cn(copy_button_variants({ variant }), {
			'bg-gray-1000 text-gray-100': inverted
		})}
	>
		{#if copied}
			<div in:scale={{ start: 0.75, duration: 250 }}>
				<Icons.Check class="size-4" />
				<span class="sr-only">Copied</span>
			</div>
		{:else}
			<div in:scale={{ start: 0.75, duration: 250 }}>
				<Icons.Copy class="size-4" />
				<span class="sr-only">Copy</span>
			</div>
		{/if}
	</button>
</div>
