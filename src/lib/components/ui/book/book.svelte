<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils.js';
	import { book_variants, type NormalBook } from './index.js';

	type Props = NormalBook;

	let { ...rest }: Props = $props();

	const {
		container,
		book,
		front,
		stripe,
		body,
		bind,
		stripe_illustration,
		body_illustration,
		textured,
		pages,
		back
	} = book_variants();
</script>

<div
	class={cn(container(), {})}
	style="
    --book-text-color: {rest.text_color ? rest.text_color : 'hsla(var(--gray-1000))'}; 
    --book-default-width: 196;
    --book-width:{rest.width ? rest.width : 'var(--book-default-width)'};
"
>
	<div
		class={cn(book())}
		style="--book-color: {rest.color ? rest.color : 'hsla(var(--amber-600))'};"
	>
		<div class={cn(front())}>
			{#if rest.variant !== 'simple'}
				<div class={cn(stripe())}>
					<div class={cn(bind())}></div>
					<div class={cn(stripe_illustration())}>
						{#if rest.illustration}
							<rest.illustration />
						{/if}
					</div>
					{#if rest.textured}
						<div class={cn(textured())}></div>
					{/if}
				</div>
			{/if}
			<div
				class={cn(
					body(),
					rest.variant === 'simple' && rest.color ? 'bg-[var(--book-color)]' : 'bg-gray-200'
				)}
			>
				<div class={cn(bind())}></div>
				<div class={cn(body_illustration({ variant: rest.variant }))}>
					<span
						class="text-balance font-sans text-[10.5cqw] font-semibold leading-[1.25em] tracking-[-.02em]"
						>{rest.title}</span
					>
					{#if rest.illustration && rest.variant === 'simple'}
						<rest.illustration />
					{:else if rest.variant === 'simple'}
						<Icons.SimpleIllustration />
					{:else}
						<Icons.LogoVercel aria-hidden="true" height="16" width="16" />
					{/if}
				</div>
			</div>
			{#if rest.textured && rest.variant === 'simple'}
				<div class={cn(textured())}></div>
			{/if}
		</div>
		<div class={cn(pages())}></div>
		<div
			class={cn(
				back(),
				rest.variant === 'simple' && rest.color ? 'bg-[var(--book-color)]' : 'bg-gray-200'
			)}
		></div>
	</div>
</div>
