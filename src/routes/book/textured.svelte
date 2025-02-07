<script lang="ts">
	import Book from '$lib/components/ui/book/book.svelte';
</script>

<div class="flex flex-col gap-12">
	<div class="flex items-end gap-8">
		<Book color="#7DC1C1" textured title="Design Engineering at Vercel" />
		<Book color="#9D2127" textured title="Design Engineering at Vercel" />
		<Book color="#FED954" textured title="Design Engineering at Vercel" />
	</div>
	<div class="flex items-end gap-8">
		<Book
			color="#7DC1C1"
			text_color="white"
			textured
			title="Design Engineering at Vercel"
			variant="simple"
		/>
		<Book
			color="#9D2127"
			text_color="#ece4db"
			textured
			title="Design Engineering at Vercel"
			variant="simple"
		/>
		<Book
			color="#FED954"
			text_color="#9d3b05"
			textured
			title="Design Engineering at Vercel"
			variant="simple"
		/>
	</div>
</div>
