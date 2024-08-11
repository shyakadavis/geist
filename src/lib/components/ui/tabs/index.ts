import { Tabs as TabsPrimitive } from 'bits-ui';
import Content from './tabs-content.svelte';
import List from './tabs-list.svelte';
import Trigger from './tabs-trigger.svelte';

const Root = TabsPrimitive.Root;

import { tv } from 'tailwind-variants';

export const tabs_variants = tv({
	base: 'group relative inline-flex items-center justify-center gap-1.5 whitespace-nowrap px-1.5 py-3 text-sm font-medium capitalize ring-offset-background-200 transition-colors first:pl-0 hover:text-gray-1000 focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-color focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:text-gray-900 disabled:hover:text-current data-[state=active]:text-gray-1000',
	variants: {
		variant: {
			default: '',
			secondary: ''
		}
	},
	defaultVariants: {
		variant: 'default'
	}
});

export {
	Content,
	List,
	Root,
	Root as Tabs,
	Content as TabsContent,
	List as TabsList,
	Trigger as TabsTrigger,
	Trigger
};
