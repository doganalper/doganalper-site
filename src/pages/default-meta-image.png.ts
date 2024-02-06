import type { APIRoute } from "astro";
import renderOgImage from "src/utils/renderOgImage";

export const prerender = true;

export const GET: APIRoute = async function GET() {
  return renderOgImage("Alper Doğan", ".dev");
};
