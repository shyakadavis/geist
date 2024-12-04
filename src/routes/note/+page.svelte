<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import Action from './action.svelte';
	import action_code from './action.svelte?raw';
	import Cyan from './cyan.svelte';
	import cyan_code from './cyan.svelte?raw';
	import Default from './default.svelte';
	import default_code from './default.svelte?raw';
	import Disabled from './disabled.svelte';
	import disabled_code from './disabled.svelte?raw';
	import Error from './error.svelte';
	import error_code from './error.svelte?raw';
	import Labels from './labels.svelte';
	import labels_code from './labels.svelte?raw';
	import Secondary from './secondary.svelte';
	import secondary_code from './secondary.svelte?raw';
	import Success from './success.svelte';
	import success_code from './success.svelte?raw';
	import Violet from './violet.svelte';
	import violet_code from './violet.svelte?raw';
	import Warning from './warning.svelte';
	import warning_code from './warning.svelte?raw';

	let { data } = $props();
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="default" code={default_code}>
		<Default />
	</Demo>

	<Demo id="action" code={action_code}>
		<Action />
	</Demo>

	<Demo id="success" code={success_code}>
		<Success />
	</Demo>

	<Demo id="error" code={error_code}>
		<Error />
	</Demo>

	<Demo id="warning" code={warning_code}>
		<Warning />
	</Demo>

	<Demo id="secondary" code={secondary_code}>
		<Secondary />
	</Demo>

	<Demo id="violet" code={violet_code}>
		<Violet />
	</Demo>

	<Demo id="cyan" code={cyan_code}>
		<Cyan />
	</Demo>

	<Demo id="disabled" code={disabled_code}>
		<Disabled />
	</Demo>

	<Demo id="labels" code={labels_code}>
		<Labels />
	</Demo>
</PageWrapper>
