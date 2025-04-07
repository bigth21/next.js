'use client'

import {createPost} from "@/lib/posts";
import React, {useState} from "react";
import {redirect} from "next/navigation";

export default function WritePage() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const id = await createPost(title, body)
    redirect(`/blog/${id}`)
  }

  return <>
    <form onSubmit={handleSubmit}>
      <input type="text" id={"title"} name={"title"} onChange={(e) => setTitle(e.target.value)}/>
      <input type="text" id={"body"} name={"body"} onChange={(e) => setBody(e.target.value)}/>
      <button type={"submit"}>Create</button>
    </form></>
}