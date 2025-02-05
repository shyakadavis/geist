<script lang="ts">
	import { Icons } from "$lib/assets/icons";
    import Book from "$lib/components/ui/book/book.svelte";
</script>

<div class="flex gap-8 items-end">
    <Book title='The user experience of the Frontend Cloud' width={300} variant='simple' />
    <Book title='Design Engineering at Vercel' width={200} variant='simple' textColor='white' color='#7DC1C1' textured />
    <Book title='The user experience of the Frontend Cloud' width={150} textured />
</div>

<h1>book</h1>
