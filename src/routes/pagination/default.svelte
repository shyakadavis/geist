<script lang="ts">
	import { Pagination } from '$lib/components/ui/pagination';

	const previous = { title: 'Home', href: '#' };

	const next = { title: 'Introduction', href: '#' };
</script>

<Pagination {previous} {next} />
