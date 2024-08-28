<script lang="ts">
	import { Snippet } from '$lib/components/ui/snippet';
</script>

<Snippet onCopy={() => alert('You copied the text!')} text="npm create svelte" class="w-[300px]" />
