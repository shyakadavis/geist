<script lang="ts">
	import { mediaQuery } from 'svelte-legos';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import { goto } from '$app/navigation';
	import CommandList from './command/command-list.svelte';

	export let open = false;
	const isDesktop = mediaQuery('(min-width: 600px)');

	let search = '';

	const close = () => (open = false);

	let listRef: HTMLDivElement;

	let selectedIndex = 0;

	const navigate = (up: boolean) => {
		const children = Array.from(listRef.children).filter(
			(a) => a.hasAttribute('aria-selected') && a.tagName == 'A'
		);

		let startIndex: number = selectedIndex;

		for (let i = 0; i < children.length; i++) {
			const child = children[i];
			if (child.getAttribute('aria-selected') == 'true') {
				child.setAttribute('aria-selected', 'false');
				break;
			}
		}

		let i = startIndex;

		if (up) {
			if (i - 1 >= 0) {
				i--;
			}
		} else {
			if (i + 1 < children.length) {
				i++;
			}
		}

		const child = children[i] as HTMLButtonElement;

		child.setAttribute('aria-selected', 'true');

		selectedIndex = i;

		if (child) {
			const top = listRef.offsetHeight + listRef.scrollTop;
			const elementBottom = child.offsetHeight + child.offsetTop;
			if (top < elementBottom) {
				const scrollTop = elementBottom + 8 - listRef.offsetHeight;
				listRef.scrollTop = scrollTop;
			}

			if (top - child.offsetTop + 110 > listRef.offsetHeight) {
				const scrollTop = child.offsetTop - listRef.offsetHeight / 2;
				listRef.scrollTop = scrollTop;
			}
		}
	};

	const docEnter = () => {
		const children = Array.from(listRef.children);

		children.forEach((child) => {
			if (child.getAttribute('aria-selected') == 'true') {
				goto((child as HTMLAnchorElement).href);
				open = false;
				return;
			}
		});
	};

	const listMouseMove = (e: MouseEvent) => {
		const option = findAncestor(e.target as Node, (a) => a?.hasAttribute('aria-selected') ?? false);
		const children = Array.from(listRef.children);
		if (!option) {
			for (let i = 0; i < children.length; i++) {
				const child = children[i];
				child.setAttribute('aria-selected', 'false');
			}
			return;
		}

		for (let i = 0; i < children.length; i++) {
			const child = children[i];
			child.setAttribute('aria-selected', 'false');
		}

		option.setAttribute('aria-selected', 'true');

		for (let i = 0; i < children.length; i++) {
			const child = children[i];
			if (child.getAttribute('aria-selected') == 'true') {
				selectedIndex = i;
				break;
			}
		}
	};

	const docKeydown = (e: KeyboardEvent) => {
		if ((e.key == 'ArrowDown' || e.key == 'ArrowUp') && open) {
			e.preventDefault();
			navigate(e.key == 'ArrowUp');
		}

		if (e.key == 'Enter' && open) {
			e.preventDefault();
			docEnter();
		}
	};

	/** Will recursively search the DOM for the node matching the passed function 
	 * until it reaches the document at which point it will return null.
	 * 
	 * ```ts
	 * // Ex: You get the target from the mouse event target 
	 * // and search up the document for the required node
	 * let ancestor = e.target;
	 * e.stopPropagation();
				ancestor = findAncestor(ancestor, (target) => {
						return target?.getAttribute("data-value") !== null;
				});
	* ```
	* 
	* @param target the current node in the document
	* @param found function to determine if the passed node is the node you are looking for in the document
	* @returns 
	*/
	const findAncestor = (
		target: Node,
		found: (target: HTMLElement | null) => boolean
	): HTMLElement | null => {
		if (target.parentNode === document) return null;

		if (found(target as HTMLElement)) return target as HTMLElement;

		return findAncestor(target.parentNode as Node, found);
	};
</script>

<svelte:document on:keydown={docKeydown} />

{#if $isDesktop}
	<Dialog.Root bind:open>
		<Dialog.Content class="bg-background-100 p-0 sm:max-w-[640px]" includeX={false}>
			<div class="flex flex-col">
				<div class="flex h-[53px] place-items-center justify-between border-b px-3">
					<input
						bind:value={search}
						type="text"
						class="h-full flex-grow border-none bg-transparent text-lg outline-none placeholder:text-gray-600 focus:outline-none"
						placeholder="Search..."
					/>
					<button on:click={close}>
						<kbd
							class="pointer-events-none inline-flex h-5 min-w-5 select-none items-center justify-center gap-1 rounded-md border bg-background-100 px-1 font-mono text-xs font-medium text-gray-900"
						>
							Esc
						</kbd>
					</button>
				</div>
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					class="flex h-[436px] flex-col overflow-y-auto p-2"
					bind:this={listRef}
					on:mousemove={listMouseMove}
				>
					<CommandList {search} />
				</div>
			</div>
		</Dialog.Content>
	</Dialog.Root>
{:else}
	<Drawer.Root bind:open>
		<Drawer.Content class="h-3/4 bg-background-100 p-0">
			<div class="flex flex-col">
				<div class="flex h-[53px] place-items-center justify-between border-b px-3">
					<input
						bind:value={search}
						type="text"
						class="h-full flex-grow border-none bg-transparent text-lg outline-none placeholder:text-gray-600 focus:outline-none"
						placeholder="Search..."
					/>
					<button on:click={close}>
						<kbd
							class="pointer-events-none inline-flex h-5 min-w-5 select-none items-center justify-center gap-1 rounded-md border bg-background-100 px-1 font-mono text-xs font-medium text-gray-900"
						>
							Esc
						</kbd>
					</button>
				</div>
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					class="flex flex-col overflow-y-auto p-2"
					style="max-height: calc(75svh - 53px);"
					bind:this={listRef}
					on:mousemove={listMouseMove}
				>
					<CommandList {search} />
				</div>
			</div>
		</Drawer.Content>
	</Drawer.Root>
{/if}
