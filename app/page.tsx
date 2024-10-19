import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function Home() {
  //@ts-ignore
  const filteredPost = allPosts.filter((post) => post.safePage == 0);
  return (
    <div className="flex flex-col gap-3">
        {/* <div>
          <h1>Welcome to my form</h1>
          <form action="/posts/deploying-next-apps" method="POST">
            <input type="text" name="safe" placeholder="Your name" value="test" required  readOnly/>
            <input type="number" name="page" placeholder="Your email" value={1} required  readOnly/>
            <button type="submit">Submit</button>
          </form>
        </div> */}
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold text-slate-600">Posts</h2>
        <hr className="border-slate-300 dark:border-slate-800" />
      </div>
      <div className="prose dark:prose-invert flex flex-col gap-2">
        {filteredPost.map((post) => (
          <article key={post._id} className="flex flex-col gap-1 rounded-xl border border-slate-300 dark:border-slate-800 py-2 px-3 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-dashed ">
              <Link href={post.slug} className="no-underline hover:underline">
                <h3 className="m-0">{post.title}</h3>
              </Link>
            {post.description && <p className="m-0 text-sm line-clamp-2">{post.description}</p>}
            <div className="flex justify-end items-center">
              <Link href={post.slug} className="no-underline text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 hover:border-slate-900 dark:hover:border-slate-50 border-b border-dotted">
                Read more
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
