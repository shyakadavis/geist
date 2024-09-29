<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Tabs as TabsPrimitive } from 'bits-ui';

	type $$Props = TabsPrimitive.ContentProps;

	interface Props { [key: string]: any }

	let { class: className = undefined, value, children, ...rest }: Props = $props();
	
</script>

<TabsPrimitive.Content
	class={cn(
		'mt-2 ring-offset-background-200 focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-color focus-visible:ring-offset-2',
		className
	)}
	{value}
	{...rest}
>
	{@render children?.()}
</TabsPrimitive.Content>
