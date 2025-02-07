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
	class={cn(container())}
	style="
    --book-text-color: {rest.text_color ? rest.text_color : 'hsla(var(--gray-1000))'};
    --book-default-width: 196;
    --book-width:{rest.width ? rest.width : 'var(--book-default-width)'};
"
>
	<div
		id="book"
		class={cn(book())}
		style="--book-color: {rest.color ? rest.color : 'hsla(var(--amber-600))'};"
	>
		<div id="book-front" class={cn(front())}>
			{#if rest.variant !== 'simple'}
				<div id="book-stripe" class={cn(stripe())}>
					<div id="book-bind-#1" class={cn(bind())}></div>
					<div id="book-stripe-illustration" class={cn(stripe_illustration())}>
						{#if rest.illustration}
							<rest.illustration />
						{/if}
					</div>
					{#if rest.textured}
						<div id="book-textured" class={cn(textured())}></div>
					{/if}
				</div>
			{/if}
			<div
				id="book-body"
				class={cn(body(), rest.variant === 'simple' && rest.color ? 'bg-[var(--book-color)]' : '')}
			>
				<div
					id="book-bind-#2"
					class={cn(bind(), 'opacity-20', {
						'opacity-100':
							(rest.textured && rest.variant === 'simple') ||
							(rest.variant === 'simple' && rest.color)
					})}
				></div>
				<div id="book-body-illustration" class={cn(body_illustration({ variant: rest.variant }))}>
					<span
						class="text-balance font-sans text-[10.5cqw] font-semibold leading-[1.25em] tracking-[-.02em]"
					>
						{rest.title}
					</span>
					{#if rest.illustration && rest.variant === 'simple'}
						<rest.illustration />
					{:else if rest.variant === 'simple'}
						<Icons.SimpleIllustration />
					{:else}
						<Icons.LogoVercel aria-hidden="true" height="16" width="16" />
					{/if}
				</div>
			</div>
			{#if rest.textured}
				<div id="book-textured" class={cn(textured())}></div>
			{/if}
		</div>
		<div id="book-pages" class={cn(pages())}></div>
		<div
			id="book-back"
			class={cn(
				back(),
				rest.variant === 'simple' && rest.color ? 'bg-[var(--book-color)]' : 'bg-gray-200'
			)}
		></div>
	</div>
</div>
