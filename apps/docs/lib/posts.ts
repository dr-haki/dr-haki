import fs from "fs";
import path from "path";
import matter from "gray-matter";
import slugify from "slugify";
import remarkBreaks from 'remark-breaks';
import remarkObsidianLinks from '../plugins/remark-obsidian-links';
import { Post } from "./interfaces";

const contentDir = path.join(process.cwd(), "content");

export function getPostSlugs() {
  return fs.readdirSync(contentDir).filter((file) => file.endsWith(".md"));
}

export function getPostBySlug(slug: string) {
  if (!slug) throw new Error("getPostBySlug: slug is undefined");

  // ✅ decode URL encoding (so %20 becomes space)
  const decoded = decodeURIComponent(slug);

  // ✅ normalize using slugify for consistent comparison
  const normalizedSlug = slugify(decoded, { lower: true, strict: true });

  const files = getPostSlugs();

  // ✅ Find markdown file that matches normalized slug
  const match = files.find((file) => {
    const fileSlug = slugify(file.replace(/\.md$/, ""), { lower: true, strict: true });
    return fileSlug === normalizedSlug;
  });

  if (!match) {
    throw new Error(`No markdown file found for slug: ${slug}`);
  }

  const fullPath = path.join(contentDir, match);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { slug: normalizedSlug, meta: data, content };
}

export async function getPostHtml(slug: string) {
  const { meta, content } = getPostBySlug(slug);
  const { unified } = await import("unified");
  const remarkParse = (await import("remark-parse")).default;
  const remarkGfm = (await import("remark-gfm")).default;
  const remarkRehype = (await import("remark-rehype")).default;
  const rehypeSlug = (await import("rehype-slug")).default;
  const rehypeStringify = (await import("rehype-stringify")).default;
  const remarkHeadingClasses = (await import("../plugins/remark-heading-classes")).default;

  const result = await unified()
    .use(remarkParse)
    .use(remarkObsidianLinks)
    .use(remarkBreaks)
    .use(remarkHeadingClasses, {
      levels: {
        1: "heading-xxl",
        2: "heading-xl",
        3: "heading-l",
        4: "heading-m",
        5: "heading-s",
        6: "heading-xs"
      }
    })
    .use(remarkRehype)
    .use(remarkGfm)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(content);

  return { meta, contentHtml: result.toString() };
}

function postContainsTag(post: Post, tag: string): boolean {
  return post.meta.tags.includes(tag);
}

export function getPostByTag(posts: Post[], tag: string): Post[] {
  if (!tag) throw new Error("getPostByTag: tag is undefined");

  return posts.filter((post) => postContainsTag(post, tag));
}

/**
 * Get all posts with metadata (for homepage)
 */
export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();

  const posts: Post[] = slugs.map((file) => {
    const slug = slugify(file.replace(/\.md$/, ""), { lower: true, strict: true });
    const fullPath = path.join(contentDir, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    const post: Post = {
      slug,
      meta: {
        title: data.title || slug,
        japanese: data.japanese || "",
        date: data.created || null,
        tags: data.tags || [],
        number: data.number || 0,
      },
    };

    return post;
  });

  // sort by number descending
  return [...posts].sort((a, b) => {
    const numA = a.meta?.number ?? Infinity;
    const numB = b.meta?.number ?? Infinity;
    return  numB - numA;
  });
}
