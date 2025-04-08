'use client'

import {getPost, Post, updatePost} from "@/lib/posts";
import React, {useEffect, useState} from "react";
import {redirect, useRouter} from "next/navigation";
import PostForm from "@/components/PostForm";
import Loading from "@/components/Loading";

export default function EditPage({params}: { params: Promise<{ postId: string }> }) {
  const { postId } = React.use(params)
  const id = Number(postId)

  const router = useRouter()

  const [post, setPost] = useState<Post>()
  useEffect(() => {
    getPost(id).then(post => setPost(post))
  }, []);

  console.log(`id: ${id}`)
  console.log(`post: ${JSON.stringify(post)}`)

  async function handleSubmit(title: string, body: string) {
    await updatePost(id, title, body)
    router.push(`/blog/${id}`)
  }

  if (!post) {
    return <Loading></Loading>
  }

  return (
    <>
      <PostForm initialTitle={post.title} initialBody={post.body} onSubmit={handleSubmit}></PostForm>
    </>
  )
}