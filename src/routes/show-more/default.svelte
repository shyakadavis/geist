<script lang="ts">
	import { ShowMore } from '$lib/components/ui/show-more';

	let expanded = false;

	function toggle() {
		expanded = !expanded;
	}
</script>

<ShowMore {expanded} on:click={toggle} />
