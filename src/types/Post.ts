export type PostType =
  | "data-structures"
  | "algorithms"
  | "design-patterns"
  | "software-architecture";

export interface Post {
  frontmatter: Record<string, any>;
  dir: PostType;
  file: string;
}
