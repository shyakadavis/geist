<script lang="ts">
	import { cn } from '$lib/utils';
	import DescriptionList from './description-list.svelte';

	const backgrounds = [
		{ title: 'Background 1', description: 'Default element background', color: 'background-100' },
		{ title: 'Background 2', description: 'Default element background', color: 'background-200' }
	];
</script>

<DescriptionList items={backgrounds} />

<section
	class="mt-10 flex h-[700px] w-full flex-col border border-gray-400 bg-background-100 md:h-[412px] md:flex-row"
>
	{@render bg_infographic({ bg: 'bg-background-100', border: 'md:border-r' })}
	{@render bg_infographic({ bg: 'bg-background-200', border: 'border-t md:border-t-0' })}
</section>

{#snippet bg_infographic({ bg, border }: { bg: string; border?: string })}
	<div
		class={cn(
			'flex h-[50%] items-center justify-center border-gray-400 md:h-[100%] md:w-[50%]',
			bg,
			border
		)}
	>
		<div
			class={cn(
				'relative flex h-[164px] w-[164px] items-center justify-center rounded-[12px] border border-gray-400 bg-background-100'
			)}
		>
			<p
				class="text-mono flex size-6 items-center justify-center rounded-full bg-gray-alpha-100 font-mono text-xs text-gray-900"
			>
				1
			</p>
			<p
				class="text-mono absolute bottom-[-57px] flex size-6 items-center justify-center rounded-full bg-gray-alpha-100 font-mono text-xs text-gray-900"
			>
				2
			</p>
		</div>
	</div>
{/snippet}
