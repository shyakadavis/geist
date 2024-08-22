<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Skeleton } from '$lib/components/ui/skeleton';
</script>

<div class="flex flex-col items-start gap-4">
	<Skeleton>
		<Button>Hidden by skeleton</Button>
	</Skeleton>

	<Skeleton show={false}>
		<Button>Not hidden by skeleton</Button>
	</Skeleton>
</div>
