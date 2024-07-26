<script lang="ts">
	import { cn } from '$lib/utils';

	export let title: string;
	let className: string | null | undefined = undefined;
	export { className as class };
</script>

<div class={cn('flex flex-col rounded-md border', className)}>
	<div class="flex h-9 place-items-center justify-between border-b px-2">
		<div class="flex place-items-center gap-2">
			<div class="size-3 rounded-full bg-[#ff5f56]"></div>
			<div class="size-3 rounded-full bg-[#ffbd2e]"></div>
			<div class="size-3 rounded-full bg-[#27c93f]"></div>
		</div>
		<div class="text-sm text-gray-600">
			{title}
		</div>
		<div class="w-[52px]"></div>
	</div>
	<div class="flex-grow">
		<slot />
	</div>
</div>
