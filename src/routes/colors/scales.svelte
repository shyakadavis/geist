<script lang="ts">
	import { scales } from './data';
	import Scale from './scale.svelte';
</script>

<ul class="grid gap-6 py-10">
	{#each Object.entries(scales) as [scale, colors]}
		<li class="flex flex-col items-start gap-2 md:flex-row md:items-center">
			{@render color_scale({ scale, colors })}
		</li>
	{/each}
</ul>

{#snippet color_scale({ scale, colors }: { scale: string; colors: string[] })}
	<p class="w-[100px] flex-shrink-0 text-sm font-medium text-gray-1000">{scale}</p>
	<ul class="grid w-full grid-cols-10 gap-1 md:gap-2">
		{#each colors as color}
			<li>
				<Scale {color} />
			</li>
		{/each}
	</ul>
{/snippet}
