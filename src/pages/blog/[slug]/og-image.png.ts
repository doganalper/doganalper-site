import type { APIRoute } from 'astro'
import { getCollection, getEntryBySlug } from 'astro:content'
import renderOgImage from 'src/utils/renderOgImage'

export const prerender = true

type Slugs = Awaited<ReturnType<typeof getCollection>>[0]['slug']
export async function getStaticPaths() {
  const posts = await getCollection('blog')

  return posts.map((page) => ({
    params: { slug: page.slug },
    props: page,
  }))
}

export const GET: APIRoute = async function GET({ params }) {
  const page = await getEntryBySlug('blog', params.slug as Slugs)
  return renderOgImage(page?.data.title, page.data.description)
}
