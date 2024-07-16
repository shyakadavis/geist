<script>
	import { page } from '$app/stores';
	import extend from 'just-extend';
	import { ModeWatcher } from 'mode-watcher';
	import { MetaTags } from 'svelte-meta-tags';
	import '../app.css';
	import Aside from './aside.svelte';
	import Header from './header.svelte';

	export let data;

	$: metaTags = extend(true, {}, data.baseMetaTags, $page.data.pageMetaTags);
</script>

<MetaTags {...metaTags} />
<ModeWatcher />
<div>
	<Header />
	<main
		class="sidebar -mx-px -mt-px flex max-w-[1220px] flex-col md:mx-auto xl:mt-0 xl:grid xl:grid-cols-[260px_1fr]"
	>
		<Aside />
		<div class="order-2 grow">
			<slot></slot>
		</div>
	</main>
</div>
