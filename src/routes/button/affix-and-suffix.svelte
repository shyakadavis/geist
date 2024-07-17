<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="flex flex-row justify-between gap-4">
	<Button affix={Icons.ArrowLeft}>Upload</Button>
	<Button suffix={Icons.ArrowRight}>Upload</Button>
	<Button affix={Icons.ArrowLeft} suffix={Icons.ArrowRight}>Upload</Button>
</div>
