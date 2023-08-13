import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
	integrations: [vue(), tailwind(), mdx()],
	output: 'hybrid',
	adapter: vercel({
		analytics: true,
	}),
	experimental: {
		viewTransitions: true,
	},
	site: 'https://www.alperdogan.dev/',
})
