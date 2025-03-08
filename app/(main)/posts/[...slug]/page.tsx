import { notFound } from "next/navigation"
import { allPosts, Post } from "contentlayer/generated"
import { headers } from 'next/headers'
import { GetServerSideProps, Metadata } from "next"
import { Mdx } from "@/components/mdx-components"

export const runtime = "edge";

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug);
  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

// export async function generateStaticParams(): Promise<PostProps["params"][]> {
//   return allPosts.map((post) => ({
//     slug: post.slugAsParams.split("/"),
//   }))
// }

export default async function PostPage({ params }: PostProps) {
  
   
  const headersList = headers();
  const requestMethod = headersList.get('x-request-method');
  // @ts-ignore
  let post : Post = null;
  let safe = "";
  let page = "1";

  if (requestMethod === 'POST') {
     safe = headersList.get('x-form-safe') as string;
     page = headersList.get('x-form-page') as string;
    // @ts-ignore
    const safePost = allPosts.find((post) => post.safePage == parseInt(page))
    post = safePost!;
  }else{
    post = (await getPostFromParams(params))!;
  }

  if (!post) {
    notFound()
  }

  return (
    <article className="py-6 prose dark:prose-invert">
      <h1 className="mb-2">{post.title}</h1>
      {post.description && (
        <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
          {post.description}
        </p>
      )}
      <hr className="my-4" />
      {
        requestMethod === 'POST' ? <Mdx code={post.body.code} currentPage={parseInt(page)} safe={safe} /> : <Mdx code={post.body.code} />
      }
    </article>
  )
}