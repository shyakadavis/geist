<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		size?: number;
		children?: Snippet;
	};

	let { size = 2, children }: Props = $props();
</script>

<div style:--loading-dots-size="{size}px" class="inline-flex items-center gap-1">
	{@render children?.()}
	{#each { length: 3 } as _}
		<span class="inline-block size-[var(--loading-dots-size)] rounded-full bg-gray-900"></span>
	{/each}
</div>

<style>
	span {
		animation-name: loading-dots;
		animation-duration: 1.4s;
		animation-iteration-count: infinite;
		animation-fill-mode: both;
	}

	span:nth-of-type(2) {
		animation-delay: 0.2s;
	}

	span:nth-of-type(3) {
		animation-delay: 0.4s;
	}

	@keyframes loading-dots {
		0% {
			opacity: 0.2;
		}
		20% {
			opacity: 1;
		}
		to {
			opacity: 0.2;
		}
	}
</style>
