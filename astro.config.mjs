import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import vercel from '@astrojs/vercel/serverless'
import sitemap from '@astrojs/sitemap'
import { remarkReadingTime } from './reading-time.mjs'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), sitemap({
    filter: (page) => !page.includes("og-image.png")
  })],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: 'nord',
      langs: ['ts', 'js', 'astro'],
      wrap: true,
    },
  },
  output: 'server',
  adapter: vercel({
    analytics: true,
  }),
  site: 'https://www.alperdogan.dev/',
})
