<script lang="ts">
	import { page } from '$app/stores';
	import { Badge } from '$lib/components/ui/badge';
	import { aside_items } from '$lib/config/sitemap';
	import AsideItem from './aside-item.svelte';

	let is_active = $derived((href: string) => {
		if (href.includes('#')) {
			// For URLs with hash fragments like 'brands#vercel'
			const [path, hash] = href.split('#');
			return $page.url.pathname.split('/')[1] === path && $page.url.hash === `#${hash}`;
		}

		// For simple URLs like '/icons'
		return $page.url.pathname === href;
	});
</script>

<aside
	class="sticky bottom-0 top-[64px] z-10 order-1 hidden w-[260px] flex-col border-l border-r border-gray-alpha-400 xl:flex"
	style="height:calc(100vh - 64px)"
>
	<div class="relative flex h-full min-h-0 grow flex-col">
		<div
			class="relative flex h-full min-h-0 grow flex-col space-y-4 overflow-y-auto px-6 pb-[14px] pt-4"
		>
			{#each Object.entries(aside_items) as item}
				{@const [group, links] = item}
				<dl>
					<dt
						class="mb-0.5 flex h-10 items-center gap-2 py-1.5 pl-1 text-sm font-bold capitalize text-gray-1000"
					>
						{group}
						{#if group === 'components'}
							<Badge variant="pink-subtle" size="sm">Internal</Badge>
						{/if}
					</dt>
					<dd>
						<ul class="relative space-y-0.5" style="width:calc(100% + 8px)">
							{#each links as link}
								<AsideItem
									active={is_active(link.href)}
									{link}
									disabled={link?.status === 'soon'}
								/>
							{/each}
						</ul>
					</dd>
				</dl>
			{/each}
		</div>
		<div
			class="absolute left-0 right-0 top-0 h-4 w-full bg-gradient-to-b from-background-200"
		></div>
	</div>
</aside>
