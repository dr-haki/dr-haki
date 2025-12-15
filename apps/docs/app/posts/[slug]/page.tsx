import { getPostSlugs, getPostHtml, getAllPosts, getPostByTag } from "../../../lib/posts";
import { space_mono } from '../../fonts'
import { Tags } from "@repo/ui/components/Tags";
import DrNavbar from "@repo/ui/components/DrNavbar";

export async function generateStaticParams() {
  const slugs = getPostSlugs().filter(Boolean);
  return slugs.map((slug: string) => ({
    slug: slug.replace(/\.md$/, "").toLowerCase().replace(/\s+/g, "-"), // clean URL
  }));
}

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params; // await here
  const { meta, contentHtml } = await getPostHtml(slug);

    const allPosts = getAllPosts();


  return (
    <main>
      <div className="page-wrapper">
        <DrNavbar></DrNavbar>
              <div className="post-wrapper">
                  <article className="px-4 md:px-64 mb-32 col-span-12 lg:col-span-10 xl:col-span-8 lg:px-16" >
                      <h1 className={`${space_mono.className} title-posts`} >{meta.title}</h1>
                      <p className="japanese-subtitle" >{meta.japanese}</p>
                      <Tags key={`Tags-key`} tags={meta.tags}></Tags>
                      <hr/>
                      <p className="text-gray-500 text-sm mb-6">{meta.date}</p>
                      <div
                        className="post-content prose prose-neutral prose-lg dark:prose-invert max-w-none leading-relaxed
                                  prose-p:mb-6 prose-li:my-1 prose-blockquote:italic prose-blockquote:pl-4"
                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                      />

                  </article>
              </div>
      </div>
      
      
    </main>
    
  );
}

