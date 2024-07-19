<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { Button } from '$lib/components/ui/button';
	import { EmptyState } from '$lib/components/ui/empty-state';
</script>

<EmptyState
	description="This should detail the actions you can take on this screen, as well as why it's valuable."
	icon={Icons.ChartBarPeak}
	icon_size={32}
	title="Title"
>
	<Button variant="secondary">Primary Action</Button>
	<!-- <Link external href="/" variant="secondary">
        Learn more
      </Link> -->
</EmptyState>
