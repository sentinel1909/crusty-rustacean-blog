import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get() {
  const posts = await getCollection("blog");
  return rss({
    title: "Crusty Rustacean - The Blog",
    description: "Thoughts on Rust, mostly monthly...mostly...",
    site: "https://blog.crusty-rustacean.dev",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedDate,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language`,
  });
}
