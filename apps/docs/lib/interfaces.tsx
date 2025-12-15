
export interface PostMeta {
  title: string;
  japanese: string;
  date: string | null;
  tags: string[];
  number: number;
}

export interface Post {
  slug: string;
  meta: PostMeta;
}

export interface PostsByTag {
    tagTitle: string;
    filteredPosts: Post[];
}