import type { MarkdownInstance } from "astro";
import type { Post } from "../types/Post";
import path from "node:path";

export function formattingPosts(
  posts: MarkdownInstance<Record<string, any>>[]
): Post[] {
  return posts.map((post) => {
    return {
      frontmatter: post.frontmatter,
      dir: path.dirname(post.file).split("/").at(-1) as string,
      file: path.basename(post.file, ".md"),
    };
  });
}
