<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { Badge } from '$lib/components/ui/badge';
	import { aside_items } from '$lib/config/sitemap';
	import { cn } from '$lib/utils';

	export let search: string;
</script>

{#each Object.entries(aside_items) as item}
	{@const [group, links] = item}
	{@const filteredLinks = links.filter(
		(link) =>
			link.title.toLowerCase().includes(search.toLowerCase()) ||
			search.toLowerCase().includes(link.title.toLowerCase())
	)}
	{#if filteredLinks.length > 0}
		<span class="px-2 py-3 pb-3 text-xs font-light capitalize text-gray-700 first:pb-3 first:pt-2">
			{group}
		</span>
	{/if}
	{#each filteredLinks as link}
		{@const disabled = link.status == 'soon'}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<svelte:element
			this={disabled ? 'span' : 'a'}
			href={link.href}
			aria-disabled={disabled}
			on:click={close}
			data-focused={false}
			class={cn(
				'flex place-items-center gap-2 rounded-md px-2 py-2 text-sm data-[focused=true]:bg-gray-400',
				{
					'pointer-events-none select-none opacity-50': disabled
				}
			)}
		>
			{#if link.icon}
				<span class="text-gray-1000">
					<svelte:component this={link.icon} aria-hidden="true" width="16" height="16" />
				</span>
			{:else}
				<span class="text-gray-1000">
					<Icons.ArrowRight width="16" height="16" class="text-gray-600" aria-hidden="true" />
				</span>
			{/if}
			{link.title}
			{#if link.status === 'new'}
				<Badge variant="blue" size="sm">New</Badge>
			{/if}
			{#if link.status === 'soon'}
				<Badge variant="gray-subtle" size="sm">Soon</Badge>
			{/if}
			{#if link.status === 'draft'}
				<Badge variant="purple-subtle" size="sm">Draft</Badge>
			{/if}
		</svelte:element>
	{/each}
{/each}
