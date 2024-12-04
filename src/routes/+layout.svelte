<script lang="ts">
	import { page } from '$app/stores';
	import { ModeWatcher } from 'mode-watcher';
	import { MetaTags, deepMerge } from 'svelte-meta-tags';
	import '../app.css';
	import Aside from './aside.svelte';
	import Header from './header.svelte';

	let { data, children } = $props();

	let metaTags = $derived(deepMerge(data.baseMetaTags, $page.data.pageMetaTags));
</script>

<MetaTags {...metaTags} />
<!-- TODO: [svelte] hydration_html_changed
The value of an `{@html ...}` block in node_modules/​.pnpm/​mode-watcher@0.4.0_svelte@5.0.0-next.260/​node_modules/​mode-watcher/​dist/​mode-watcher.svelte changed between server and client renders. The client value will be ignored in favour of the server value -->
<ModeWatcher />
<div>
	<Header />
	<main
		class="sidebar -mx-px -mt-px flex max-w-[1220px] flex-col md:mx-auto xl:mt-0 xl:grid xl:grid-cols-[260px_1fr]"
	>
		<Aside />
		<div class="order-2 grow">
			{@render children?.()}
		</div>
	</main>
</div>
