import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import vercelStatic from '@astrojs/vercel/static'

// https://astro.build/config
export default defineConfig({
	integrations: [vue(), tailwind(), mdx()],
	output: 'static',
	adapter: vercelStatic({
		analytics: true,
	}),
	experimental: {
		viewTransitions: true
	},
	site: 'https://www.alperdogan.dev/'
})
