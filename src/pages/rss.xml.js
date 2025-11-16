import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get(context) {
  const blog = await getCollection("blog");
  return rss({
    title: "Alper's Blog",
    description:
      "Things I write about what I think about anything, mostly development",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      link: `/blog/${post.slug}`,
      author: "Alper Doğan",
      categories: [post.data.tag],
      customData: `<language>${post.data.language || "en"}</language>`,
    })),
  });
}
