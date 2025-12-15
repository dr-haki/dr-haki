
import { getAllPosts, getPostByTag } from "../lib/posts";
import { space_mono } from './fonts'

import Link from "next/link";
import DrNavbar from "@repo/ui/components/DrNavbar";

export default function Home() {
  const allPosts = getAllPosts();

  const addZero = (n: number): string => {
    return String(n).padStart(2, "0");
  }

  return (
    <main>
      <div className="page-wrapper">
        <DrNavbar></DrNavbar>
        <hr />
              <div className="post-wrapper">
                  <div className="px-4 md:px-64 mb-32 col-span-12 lg:col-span-10 xl:col-span-8 sm:col-span-12 lg:px-16"> 
                            <h1 className={`${space_mono.className} title-posts`} >Welcome to the Logs</h1>
                            <p className="japanese-subtitle" >デジタル道教徒</p>
                            <p>Studying the Tao in the age of technology.</p>
                            <hr/>
                            <ul className={`${space_mono.className} main-list-posts`}>
                              {allPosts.map((post) => (
                                <li key={post.slug}>
                                  <Link
                                    className="home-link border-gradient border-gradient-purple"
                                    href={`/posts/${post.slug}`}
                                  >
                                  {addZero(post.meta.number)}  :  [ {post.meta.title} ]
                                  </Link>
                                </li>
                              ))}
                            </ul>
                        </div>
              </div>
      </div>
      
      
      
    </main>
  );
}
