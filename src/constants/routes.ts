import type { IRouteItem } from 'src/types/route'

export default <IRouteItem[]>[
	{
		href: '/',
		text: 'Home',
		slug: 'home',
	},
	{
		href: '/blog',
		text: 'Blog',
		slug: 'blog',
		soon: true,
	},
]
