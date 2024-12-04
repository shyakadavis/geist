<script lang="ts">
	import { cn } from '$lib/utils';
	import { tv, type VariantProps } from 'tailwind-variants';
	import AvatarFallback from './avatar-fallback.svelte';
	import AvatarImage from './avatar-image.svelte';
	import Avatar from './avatar.svelte';

	const avatar_group_variants = tv({
		base: 'flex',
		variants: {
			orientation: {
				horizontal: 'flex-row',
				vertical: 'flex-col'
			},
			spacing: {
				sm: '-space-x-2 -space-y-2',
				md: '-space-x-2.5 -space-y-2.5',
				lg: '-space-x-4 -space-y-4'
			}
		},
		defaultVariants: {
			orientation: 'horizontal',
			spacing: 'md'
		}
	});

	type AvatarGroupProps = VariantProps<typeof avatar_group_variants> & {
		members: { src: string; alt: string }[];
		limit?: number;
		size: number;
	};

	type Props = {
		class?: string | undefined;
		members: AvatarGroupProps['members'];
		limit?: AvatarGroupProps['limit'];
		orientation?: AvatarGroupProps['orientation'];
		spacing?: AvatarGroupProps['spacing'];
		size: AvatarGroupProps['size'];
	};

	let {
		class: class_name = undefined,
		members,
		limit = 3,
		orientation = 'horizontal',
		spacing = 'md',
		size
	}: Props = $props();

	let visible_avatars = $derived(members.slice(0, limit));
	let hidden_avatars = $derived(members.slice(limit));
	let placeholder_font_styles = $state('');

	if (size <= 32) {
		placeholder_font_styles = 'font-size: 0.625rem; line-height: 0.75rem;';
	} else {
		placeholder_font_styles = 'font-size: 0.875rem; line-height: 1.25rem;';
	}
</script>

<div
	class={cn(
		avatar_group_variants({ orientation, spacing }),
		class_name,
		orientation === 'vertical' ? '-space-x-0' : '-space-y-0'
	)}
>
	{#each visible_avatars as { src, alt }}
		<Avatar style="width: {size}px; height: {size}px">
			<AvatarImage {src} {alt} />
			<AvatarFallback>
				<span class="font-semibold" style={placeholder_font_styles}>
					{alt
						?.split(' ')
						?.map((word) => word[0])
						?.join('')
						?.toUpperCase()}
				</span>
			</AvatarFallback>
		</Avatar>
	{/each}
	{#if hidden_avatars.length > 0}
		<Avatar style="width: {size}px; height: {size}px" class="border-gray-400">
			<AvatarFallback class="font-semibold" style={placeholder_font_styles}>
				+{hidden_avatars.length}
			</AvatarFallback>
		</Avatar>
	{/if}
</div>
