<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { Badge } from '$lib/components/ui/badge';
	import Demo from './demo.svelte';
	import DescriptionList from './description-list.svelte';

	const backgrounds = [
		{ title: 'Color 1', description: 'Default background', color: 'gray-100' },
		{ title: 'Color 2', description: 'Hover background', color: 'gray-200' },
		{ title: 'Color 3', description: 'Active background', color: 'gray-300' }
	];
</script>

<DescriptionList items={backgrounds} />

<p class="mt-10 text-gray-900">
	If your UI component's default background is Background 1, you can used Color 1 as your hover
	background and Color 2 as your active background. On smaller UI elements like badges, you can use
	Color 2 or Color 3 as the background.
</p>

<Demo>
	<div class="border-gray-400 p-2 md:p-12">
		<ul>
			{@render info_status()}
			{@render warning_status()}
			{@render info_status()}
			{@render info_status()}
		</ul>
	</div>

	<div
		class="flex h-[120px] grow items-center justify-center gap-2 border-t md:h-auto md:border-l md:border-t-0"
	>
		<Badge variant="gray">Hobby</Badge>
		<Badge variant="blue-subtle">Pro</Badge>
		<Badge variant="purple-subtle">Enterprise</Badge>
	</div>
</Demo>

{#snippet info_status()}
	<li class="flex h-10 w-full cursor-pointer items-center gap-3 rounded-sm px-3 md:w-[420px]">
		<Icons.Information class="size-4" />
		<p class="font-mono text-[13px] leading-5 text-gray-900">APR 26 15:54:21.12</p>
		<div class="h-5 w-px bg-gray-400"></div>
		<p class="font-mono text-[13px] leading-5 text-gray-900">
			<span class="hidden md:inline-block">/dashboard</span>/overview
		</p>
	</li>
{/snippet}

{#snippet warning_status()}
	<li
		class="flex h-10 w-full cursor-pointer items-center gap-3 rounded-sm bg-amber-100 px-3 text-amber-900 md:w-[420px]"
	>
		<Icons.Warning class="size-4" />
		<p class="font-mono text-[13px] leading-5">APR 26 15:54:21.12</p>
		<div class="h-5 w-px bg-gray-400"></div>
		<p class="font-mono text-[13px] leading-5">
			<span class="hidden md:inline-block">/dashboard</span>/overview
		</p>
	</li>
{/snippet}
