<script lang="ts">
	import { Icons } from '$lib/assets/icons/index.js';
	import { cn } from '$lib/utils.js';
	import { Link } from '../link/index.js';
	import { type Props, error_variants } from './index.js';

	type $$Props = Props;

	let class_name: string | undefined | null = undefined;
	export let size: $$Props['size'] = 'md';
	export let label: $$Props['label'] = undefined;
	export let error: $$Props['error'] = undefined;
	export { class_name as class };
</script>

<p class={cn(error_variants({ size, className: class_name }))} {...$$restProps}>
	<Icons.Stop aria-hidden="true" class="size-4" />
	{#if error}
		<span>{error.message}</span>
		<span>
			<Link
				href={error.link}
				external={error.link.startsWith('https')}
				class="font-medium underline underline-offset-4 hover:opacity-70"
			>
				{error.action}
			</Link>
		</span>
	{:else}
		{#if label}
			<b>{label}:</b>
		{/if}
		<slot></slot>
	{/if}
</p>
