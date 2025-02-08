<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import Success from './success.svelte';
	import success_code from './success.svelte?raw';
	import Warning from './warning.svelte';
	import warning_code from './warning.svelte?raw';
	import Error from './error.svelte';
	import error_code from './error.svelte?raw';

	let { data } = $props();
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo
		id="succes"
		subtitle="For positive, temporary mitigations put in place to protect a project, e.g., Attack Challenge Mode"
		code={success_code}
	>
		<Success />
	</Demo>

	<Demo
		id="warning"
		subtitle="When a project is in an exceptional state which requires non-immediate action to exit, e.g., during a rollback"
		code={warning_code}
	>
		<Warning />
	</Demo>

	<Demo
		id="error"
		subtitle="When a project is approaching or experiencing critical downtime which requires immediate attention, e.g., when payment is overdue"
		code={error_code}
	>
		<Error />
	</Demo>
</PageWrapper>
