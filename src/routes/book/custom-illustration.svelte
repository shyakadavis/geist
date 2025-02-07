<script lang="ts">
	import Book from '$lib/components/ui/book/book.svelte';
	import Icon from './icon.svg?component';
	import Line from './line.svg?component';
</script>

<div class="flex items-end gap-8">
	<Book illustration={Line} title="The user experience of the Frontend Cloud" />
	<Book illustration={Icon} title="The user experience of the Frontend Cloud" variant="simple" />
</div>
