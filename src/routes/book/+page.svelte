<script lang="ts">
	import { Icons } from "$lib/assets/icons";
    import Book from "$lib/components/ui/book/book.svelte";
</script>

<div class="flex gap-8 items-end">
    <Book title='The user experience of the Frontend Cloud' variant='simple' />
    <Book title='Design Engineering at Vercel' width={200} textColor='white' textured />
    <Book title='The user experience of the Frontend Cloud' width={150} textured illustration={Icons.Accessibility} />
</div>

<h1>book</h1>
