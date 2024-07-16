<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Link } from './sitemap';

	export let link: Link;
	export let active: boolean;
</script>

<li>
	<a
		class="group no-underline outline-none"
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
				<span class="text-gray-1000">
					<svelte:component this={link.icon} aria-hidden="true" width="16" height="16" />
				</span>
			{/if}
			<span>{link.title}</span>
		</span>
	</a>
</li>
