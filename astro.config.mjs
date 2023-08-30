import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import vercel from '@astrojs/vercel/serverless'
import sitemap from '@astrojs/sitemap'
import { remarkReadingTime } from './reading-time.mjs'

// https://astro.build/config
export default defineConfig({
	integrations: [vue(), tailwind(), mdx(), sitemap()],
	markdown: {
		remarkPlugins: [remarkReadingTime],
	},
	output: 'hybrid',
	adapter: vercel({
		analytics: true,
	}),
	site: 'https://www.alperdogan.dev/',
})
