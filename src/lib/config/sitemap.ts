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
			href: '/colors',
			status: 'soon'
		},
		{
			title: 'Icons',
			href: '/icons',
			status: 'draft'
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
			title: 'Next.js',
			href: 'brands#next.js',
			icon: Icons.LogoNext,
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
			href: '/avatar',
			status: 'new'
		},
		{
			title: 'Badge',
			href: '/badge',
			status: 'new'
		},
		{
			title: 'Book',
			href: '/book',
			status: 'soon'
		},
		{
			title: 'Button',
			href: '/button',
			status: 'draft'
		},
		{
			title: 'Calendar',
			href: '/calendar',
			status: 'soon'
		},
		{
			title: 'Checkbox',
			href: '/checkbox',
			status: 'draft'
		},
		{
			title: 'Choicebox',
			href: '/choicebox',
			status: 'soon'
		},
		{
			title: 'Code Block',
			href: '/code-block',
			status: 'soon'
		},
		{
			title: 'Collapse',
			href: '/collapse',
			status: 'soon'
		},
		{
			title: 'Combobox',
			href: '/combobox',
			status: 'soon'
		},
		{
			title: 'Context Menu',
			href: '/context-menu',
			status: 'draft'
		},
		{
			title: 'Description',
			href: '/description',
			status: 'soon'
		},
		{
			title: 'Drawer',
			href: '/drawer',
			status: 'new'
		},
		{
			title: 'Empty State',
			href: '/empty-state',
			status: 'draft'
		},
		{
			title: 'Error',
			href: '/error',
			status: 'draft'
		},
		{
			title: 'Feedback',
			href: '/feedback',
			status: 'soon'
		},
		{
			title: 'Gauge',
			href: '/gauge',
			status: 'soon'
		},
		{
			title: 'Grid',
			href: '/grid',
			status: 'soon'
		},
		{
			title: 'Input',
			href: '/input',
			status: 'draft'
		},
		{
			title: 'Keyboard Input',
			href: '/keyboard-input',
			status: 'draft'
		},
		{
			title: 'Loading Dots',
			href: '/loading-dots',
			status: 'soon'
		},
		{
			title: 'Menu',
			href: '/menu',
			status: 'new'
		},
		{
			title: 'Modal',
			href: '/modal',
			status: 'draft'
		},
		{
			title: 'Note',
			href: '/note',
			status: 'soon'
		},
		{
			title: 'Pagination',
			href: '/pagination',
			status: 'soon'
		},
		{
			title: 'Progress',
			href: '/progress',
			status: 'soon'
		},
		{
			title: 'Radio',
			href: '/radio',
			status: 'soon'
		},
		{
			title: 'Scroller',
			href: '/scroller',
			status: 'soon'
		},
		{
			title: 'Select',
			href: '/select',
			status: 'soon'
		},
		{
			title: 'Show more',
			href: '/show-more',
			status: 'soon'
		},
		{
			title: 'Skeleton',
			href: '/skeleton',
			status: 'soon'
		},
		{
			title: 'Snippet',
			href: '/snippet',
			status: 'soon'
		},
		{
			title: 'Spinner',
			href: '/spinner',
			status: 'soon'
		},
		{
			title: 'Stack',
			href: '/stack',
			status: 'soon'
		},
		{
			title: 'Status Dot',
			href: '/status-dot',
			status: 'soon'
		},
		{
			title: 'Switch',
			href: '/switch',
			status: 'soon'
		},
		{
			title: 'Table',
			href: '/table',
			status: 'soon'
		},
		{
			title: 'Tabs',
			href: '/tabs',
			status: 'soon'
		},
		{
			title: 'Text',
			href: '/text',
			status: 'soon'
		},
		{
			title: 'Textarea',
			href: '/textarea',
			status: 'soon'
		},
		{
			title: 'Theme Switcher',
			href: '/theme-switcher',
			status: 'new'
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
			href: '/tooltip',
			status: 'soon'
		},
		{
			title: 'Window',
			href: '/window',
			status: 'new'
		}
	]
};
