import {getPost} from "@/lib/posts";

export default async function Page({params}: { params: Promise<{ slug: string }> }) {
  const {slug} = await params
  const post = await getPost(Number(slug))
  return (
    <div>
      <div>Page {post.title}</div>
      <div>Page {post.body}</div>
      <div>Page {post.likes}</div>
    </div>
  )
};