<script lang="ts">
	import { afterUpdate, onMount } from 'svelte';
	import { is_desktop, is_overflowing } from '.';
	import * as Dialog from '../dialog';
	import * as Drawer from '../drawer';

	let el: HTMLDivElement;

	function check_overflow(element: HTMLDivElement) {
		return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
	}

	function update_overflow() {
		if (el) {
			const overflow = check_overflow(el);
			is_overflowing.set(overflow);
		}
	}

	onMount(update_overflow);

	afterUpdate(update_overflow);
</script>

{#if $is_desktop}
	<Dialog.Content
		transitionConfig={{ y: -15 }}
		bind:el
		class="max-h-[80vh] overflow-y-auto bg-background-100 p-0 dark:bg-background-200 sm:rounded-xl"
		hide_close_button
		overlay_classes="bg-[#000] opacity-25 dark:opacity-75"
	>
		<slot></slot>
	</Dialog.Content>
{:else}
	<!-- TODO: Handle overflowing content on small screens. Right, it needs to be specified consumer-side. -->
	<Drawer.Content hide_dismiss_bar class="bg-background-100 dark:bg-background-200">
		<slot></slot>
	</Drawer.Content>
{/if}
