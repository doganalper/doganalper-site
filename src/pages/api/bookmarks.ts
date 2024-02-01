import type { APIRoute } from "astro";

import getRaindropBookmarks from "src/utils/raindrop";

export const prerender = false;

export const GET: APIRoute = async () => {
  const bookmarks = await getRaindropBookmarks({
    perPage: 10,
  });

  return new Response(JSON.stringify(bookmarks), { status: 200 });
};
