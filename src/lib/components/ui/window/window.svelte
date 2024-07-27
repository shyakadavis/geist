<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Props } from './index.js';

	type $$Props = Props;

	let class_name: $$Props['class'] = undefined;
	export let title: $$Props['title'];
	export { class_name as class };
</script>

<div
	class={cn('flex flex-col rounded-md border bg-background-200 shadow-sm', class_name)}
	{...$$restProps}
>
	<div class="relative flex h-9 w-full border-b px-2">
		<div class="flex place-items-center gap-2">
			<span class="size-3 rounded-full bg-[#ff5f56]"></span>
			<span class="size-3 rounded-full bg-[#ffbd2e]"></span>
			<span class="size-3 rounded-full bg-[#27c93f]"></span>
		</div>
		<p
			class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-xs text-accents-5"
		>
			{title}
		</p>
	</div>
	<div class="flex-grow">
		<slot />
	</div>
</div>
