import type { Post } from "../types/Post";

export function groupPostsByDir(posts: Post[]): { [name: string]: Post[] } {
  return posts.reduce(
    (acc, post) => {
      const key = post.dir as string;
      return {
        ...acc,
        [key]: Object.hasOwn(acc, key) ? [...acc[key], post] : [post],
      };
    },
    {} as { [name: string]: Post[] }
  );
}
