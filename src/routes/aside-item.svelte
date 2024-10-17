<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import type { Link } from '$lib/config/sitemap';
	import { cn } from '$lib/utils';

	type Props = {
		link: Link;
		active: boolean;
		disabled?: boolean | undefined;
	};

	let { link, active, disabled = undefined }: Props = $props();
</script>

<li>
	<svelte:element
		this={disabled ? 'span' : 'a'}
		class={cn('group no-underline outline-none', {
			'pointer-events-none select-none opacity-50': disabled
		})}
		href={link.href}
		aria-current={active ? 'true' : 'false'}
	>
		<span
			class={cn(
				'group relative -ml-2 flex h-[40px] items-center gap-2.5 rounded-md px-3 py-1.5 text-sm font-normal text-gray-900 outline-none hover:bg-gray-100 group-focus-visible:shadow-focus-ring',
				{
					'bg-gray-alpha-100 text-gray-1000': active
				}
			)}
		>
			{#if link.icon}
				{@const Icon = link.icon}
				<span class="text-gray-1000">
					<Icon aria-hidden="true" width="16" height="16" />
				</span>
			{/if}
			<span>{link.title}</span>

			{#if link.status === 'new'}
				<Badge variant="blue" size="sm">New</Badge>
			{/if}
			{#if link.status === 'soon'}
				<Badge variant="gray-subtle" size="sm">Soon</Badge>
			{/if}
			{#if link.status === 'draft'}
				<Badge variant="purple-subtle" size="sm">Draft</Badge>
			{/if}
		</span>
	</svelte:element>
</li>
