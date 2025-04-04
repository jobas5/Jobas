import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "@consts";

type Context = {
  site: string;
};

export async function GET(context: Context) {
  const posts = await getCollection("blog");
  const projects = await getCollection("projects");
  const books = await getCollection("books");

  const items = [...posts, ...projects, ...books];

  items.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.summary,
      pubDate: item.data.date,
      link: item.slug.startsWith("blog")
        ? `/blog/${item.slug}/`
        : item.slug.startsWith("projects")
          ? `/projects/${item.slug}/`
          : `/books/${item.slug}/`,
    })),
  });
}
