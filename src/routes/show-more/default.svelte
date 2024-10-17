<script lang="ts">
	import { ShowMore } from '$lib/components/ui/show-more';

	let expanded = $state(false);

	function toggle() {
		expanded = !expanded;
	}
</script>

<ShowMore {expanded} onclick={toggle} />
