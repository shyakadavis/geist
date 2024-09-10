<script lang="ts">
	import { Snippet } from '$lib/components/ui/snippet';
</script>

<Snippet
	on_copy={() => alert('You copied the text!')}
	text="pnpm create svelte@latest"
	class="w-[300px]"
/>
