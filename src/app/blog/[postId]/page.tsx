import {getPost} from "@/lib/posts";
import Link from "next/link";
import React from "react";

export default async function Page({params}: { params: Promise<{ postId: string }> }) {
  const { postId } = await params
  const id = Number(postId)
  const post = await getPost(id)
  return (
    <>
      <div>
        <div>Page {post.title}</div>
        <div>Page {post.body}</div>
        <div>Page {post.likes}</div>
      </div>
      <Link href={`/blog/${id}/edit`} style={buttonStyle}>
        Edit
      </Link>
    </>
  )
};

const buttonStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '10px 20px',
  backgroundColor: '#0070f3',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
  fontSize: '16px',
  fontWeight: 'bold',
  textAlign: 'center'
};
