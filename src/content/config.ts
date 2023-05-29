import { z, defineCollection } from 'astro:content'
import BlogTags from 'src/constants/blogTags'

const blogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		tag: z.enum(BlogTags),
		image: z.string().optional(),
		description: z.string().min(20).max(120),
		publishDate: z.date(),
		draft: z.boolean().optional()
	}),
})

export const collections = {
	blog: blogCollection,
}
