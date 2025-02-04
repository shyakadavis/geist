<script lang="ts">
    import { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils.js';
	import type { Snippet } from 'svelte';
    import { book_variants, type NormalBook } from './index.js';

    type Props = NormalBook;

    let { ...rest }: Props = $props();
</script>

{#if rest.illustration}
    <rest.illustration />
{:else}
    <Icons.LogoVercel aria-hidden="true" height="16" width="16" />
{/if}


<div id="book-container" class="group [perspective:900px] [--book-default-width:196] [--book-color:var(--ds-gray-200)] [--book-text-color:var(--ds-gray-1000)] [--book-depth:29cqw] [--book-border-radius:6px_4px_4px_6px] [--hover-rotate:-20deg] [--hover-scale:1.066] [--hover-translate-x:-8px] [--aspect-ratio:49/60] inline-block w-fit" style="--book-width: {rest.width};">
    <div id="book" class="group-hover:[transform:rotateY(-20deg)] w-fit [rotateY(0deg)] relative [transform-style:preserve-3d] min-w-[calc(var(--book-width)*1px)] transition-transform duration-[250ms] ease-out [container-type:inline-size]" style="--book-color: {rest.color};">
        <div id="front" class="">
            <div id="stack_1"></div>
        </div>

        <div id="pages">

        </div>

        <div id="back">

        </div>
    </div>
</div>

<style>
    #book-container {
        --bg-shadow: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 12%, rgba(255, 255, 255, 0.25) 29.25%, rgba(255, 255, 255, 0) 50.5%, rgba(255, 255, 255, 0) 75.25%, rgba(255, 255, 255, 0.25) 91%, rgba(255, 255, 255, 0)), linear-gradient(90deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.1) 12%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.02) 50%, rgba(0, 0, 0, 0.2) 73.5%, rgba(0, 0, 0, 0.5) 75.25%, rgba(0, 0, 0, 0.15) 85.25%, rgba(0, 0, 0, 0));
    }
</style>