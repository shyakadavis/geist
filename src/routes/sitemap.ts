import { Icons } from '$lib/assets/icons';

export type Aside = Record<string, Link[]>;
export type Link = {
	title: string;
	href: string;
	icon?: typeof Icons.LogoNext;
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
			icon: Icons.LogoVercel
		},
		{
			title: 'Next.js',
			href: 'brands#next.js',
			icon: Icons.LogoNext
		},
		{
			title: 'Turbo',
			href: 'brands#turbo',
			icon: Icons.LogoTurborepo
		},
		{
			title: 'v0',
			href: 'brands#v0',
			icon: Icons.LogoV0
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
			href: '/book'
		},
		{
			title: 'Button',
			href: '/button'
		},
		{
			title: 'Calendar',
			href: '/calendar'
		},
		{
			title: 'Checkbox',
			href: '/checkbox'
		},
		{
			title: 'Choicebox',
			href: '/choicebox'
		},
		{
			title: 'Code Block',
			href: '/code-block'
		},
		{
			title: 'Collapse',
			href: '/collapse'
		},
		{
			title: 'Combobox',
			href: '/combobox'
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
			href: '/feedback'
		},
		{
			title: 'Gauge',
			href: '/gauge'
		},
		{
			title: 'Grid',
			href: '/grid'
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
			title: 'Radio',
			href: '/radio'
		},
		{
			title: 'Scroller',
			href: '/scroller'
		},
		{
			title: 'Select',
			href: '/select'
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
			href: '/stack'
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
			title: 'Text',
			href: '/text'
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
			href: '/toast'
		},
		{
			title: 'Toggle',
			href: '/toggle'
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
