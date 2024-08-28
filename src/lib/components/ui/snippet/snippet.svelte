<script lang="ts">
	import { cn } from '$lib/utils';
	import { Icons } from '$lib/assets/icons';
	import { scale } from 'svelte/transition';
	import { tv } from 'tailwind-variants';

	const style = tv({
		base: 'border-border relative flex w-fit min-h-[42px] place-items-center gap-2 rounded-md border py-2.5 pl-2.5 pr-12',
		variants: {
			variant: {
				default: 'border-border text-foreground',
				success: 'border-blue-600 bg-blue-600 bg-opacity-15 text-blue-600 border-opacity-35',
				error: 'border-red-600 bg-red-600 bg-opacity-15 text-red-600 border-opacity-35',
				warning: 'border-amber-600 bg-amber-600 bg-opacity-15 text-amber-600 border-opacity-35'
			}
		}
	});

	const button_style = tv({
		base: 'text-muted-foreground hover:text-foreground absolute right-3 top-1/2 -translate-y-1/2 transition-colors',
		variants: {
			variant: {
				default: 'text-foreground',
				success: 'text-blue-700',
				error: 'text-red-600',
				warning: 'text-amber-600'
			}
		}
	});

	type Props = {
		text: string | string[];
		class?: string;
		prompt?: boolean;
		variant?: 'default' | 'success' | 'error' | 'warning';
		on_copy?: () => void;
		// TODO: Add dark variant (really not sure what expected behavior)
	};

	type $$Props = Props;

	export let text: $$Props['text'];
	export let prompt: $$Props['prompt'] = true;
	export let variant: $$Props['variant'] = 'default';
	export let on_copy: $$Props['on_copy'] = undefined;
	let class_name: $$Props['class'] = undefined;
	export { class_name as class };

	let copied = false;

	const copy = async () => {
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
	};
</script>

<div class={cn(style({ variant }), class_name)}>
	<code class="flex flex-col text-nowrap text-[13px]">
		{#if typeof text == 'string'}
			<span>
				{#if prompt}
					<span>$</span>
				{/if}
				{text}
			</span>
		{:else}
			{#each text as line}
				<span>
					{#if prompt}
						<span>$</span>
					{/if}
					{line}
				</span>
			{/each}
		{/if}
	</code>
	<button on:click={copy} type="button" class={cn(button_style({ variant }))}>
		{#if copied}
			<div in:scale={{ start: 0.75, duration: 250 }}>
				<Icons.Check class="size-4" />
			</div>
		{:else}
			<div in:scale={{ start: 0.75, duration: 250 }}>
				<Icons.Copy class="size-4" />
			</div>
		{/if}
	</button>
</div>
