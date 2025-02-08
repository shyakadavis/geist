import { Icons } from '$lib/assets/icons';

export type Aside = Record<string, Link[]>;
export type Link = {
	title: string;
	href: string;
	icon?: typeof Icons.LogoNext;
	status?: 'new' | 'soon' | 'draft';
};

export const aside_items: Aside = {
	foundations: [
		{
			title: 'Introduction',
			href: '/'
		},
		{
			title: 'Colors',
			href: '/colors'
		},
		{
			title: 'Icons',
			href: '/icons'
		}
	],
	brands: [
		{
			title: 'Vercel',
			href: 'brands#vercel',
			icon: Icons.LogoVercel,
			status: 'soon'
		},
		{
			title: 'Svelte',
			href: 'brands#svelte',
			icon: Icons.LogoSvelte,
			status: 'soon'
		},
		{
			title: 'Turbo',
			href: 'brands#turbo',
			icon: Icons.LogoTurborepo,
			status: 'soon'
		},
		{
			title: 'v0',
			href: 'brands#v0',
			icon: Icons.LogoV0,
			status: 'soon'
		}
	],
	components: [
		{
			title: 'Avatar',
			href: '/avatar'
		},
		{
			title: 'Badge',
			href: '/badge'
		},
		{
			title: 'Book',
			href: '/book',
			status: 'new'
		},
		{
			title: 'Button',
			href: '/button'
		},
		{
			title: 'Calendar',
			href: '/calendar',
			status: 'draft'
		},
		{
			title: 'Checkbox',
			href: '/checkbox'
		},
		{
			title: 'Choicebox',
			href: '/choicebox',
			status: 'draft'
		},
		{
			title: 'Code Block',
			href: '/code-block',
			status: 'soon'
		},
		{
			title: 'Collapse',
			href: '/collapse'
		},
		{
			title: 'Combobox',
			href: '/combobox',
			status: 'draft'
		},
		{
			title: 'Context Menu',
			href: '/context-menu'
		},
		{
			title: 'Description',
			href: '/description'
		},
		{
			title: 'Drawer',
			href: '/drawer'
		},
		{
			title: 'Empty State',
			href: '/empty-state'
		},
		{
			title: 'Error',
			href: '/error'
		},
		{
			title: 'Feedback',
			href: '/feedback',
			status: 'draft'
		},
		{
			title: 'Gauge',
			href: '/gauge',
			status: 'draft'
		},
		{
			title: 'Grid',
			href: '/grid',
			status: 'soon'
		},
		{
			title: 'Input',
			href: '/input'
		},
		{
			title: 'Keyboard Input',
			href: '/keyboard-input'
		},
		{
			title: 'Loading Dots',
			href: '/loading-dots'
		},
		{
			title: 'Menu',
			href: '/menu'
		},
		{
			title: 'Modal',
			href: '/modal'
		},
		{
			title: 'Note',
			href: '/note'
		},
		{
			title: 'Pagination',
			href: '/pagination'
		},
		{
			title: 'Progress',
			href: '/progress'
		},
		{
			title: 'Project Banner',
			href: '/project-banner',
			status: 'new'
		},
		{
			title: 'Radio',
			href: '/radio'
		},
		{
			title: 'Scroller',
			href: '/scroller',
			status: 'soon'
		},
		{
			title: 'Select',
			href: '/select',
			status: 'draft'
		},
		{
			title: 'Show more',
			href: '/show-more'
		},
		{
			title: 'Skeleton',
			href: '/skeleton'
		},
		{
			title: 'Snippet',
			href: '/snippet'
		},
		{
			title: 'Spinner',
			href: '/spinner'
		},
		{
			title: 'Stack',
			href: '/stack',
			status: 'soon'
		},
		{
			title: 'Status Dot',
			href: '/status-dot'
		},
		{
			title: 'Switch',
			href: '/switch'
		},
		{
			title: 'Table',
			href: '/table'
		},
		{
			title: 'Tabs',
			href: '/tabs'
		},
		{
			title: 'Textarea',
			href: '/textarea'
		},
		{
			title: 'Theme Switcher',
			href: '/theme-switcher'
		},
		{
			title: 'Toast',
			href: '/toast',
			status: 'soon'
		},
		{
			title: 'Toggle',
			href: '/toggle',
			status: 'soon'
		},
		{
			title: 'Tooltip',
			href: '/tooltip'
		},
		{
			title: 'Window',
			href: '/window'
		}
	]
};
