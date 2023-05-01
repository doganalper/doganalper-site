import type { CollectionEntry } from 'astro:content'

export type BlogEntry = CollectionEntry<'blog'> & {
	data: {
		publishDate: string
	}
}
