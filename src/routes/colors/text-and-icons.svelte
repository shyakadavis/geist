<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { Link } from '$lib/components/ui/link';
	import Demo from './demo.svelte';
	import DescriptionList from './description-list.svelte';

	const backgrounds = [
		{ title: 'Color 9', description: 'Secondary text and icons', color: 'gray-900' },
		{ title: 'Color 10', description: 'Primary text and icons', color: 'gray-1000' }
	];
</script>

<DescriptionList items={backgrounds} />

<Demo class="h-[260px] md:h-[198px]">
	<div
		class="flex h-[65%] w-[63%] items-center justify-center border-gray-400 md:h-full md:w-[50%]"
	>
		<div class="flex w-[316px] flex-col gap-1">
			<p class="text-gray-1000">The Frontend Cloud</p>
			<p class="text-sm text-gray-900">
				Build, scale, and secure a faster, personalized web with Vercel.
			</p>
			<Link href="https://vercel.com/" external variant="success" class="mt-2 self-start">
				Learn More
			</Link>
		</div>
	</div>
	<div
		class="md:h-ful flex h-[35%] w-full items-center justify-center gap-7 border-t md:h-full md:w-[50%] md:gap-5 md:border-l md:border-t-0"
	>
		<Icons.Dollar class="size-4 text-green-900" />
		<Icons.ChartPie class="size-4 text-blue-900" />
		<Icons.ChartBarMiddle class="size-4 text-purple-900" />
		<Icons.Star class="size-4 text-amber-900" />
		<Icons.Bell class="size-4 text-pink-900" />
		<Icons.CheckCircle class="size-4 text-teal-900" />
	</div>
</Demo>
