'use client'

import {createPost} from "@/lib/posts";
import React, {useState} from "react";
import {redirect} from "next/navigation";
import PostForm from "@/components/PostForm";

export default function WritePage() {
  async function handleSubmit(title: string, body: string) {
    const id = await createPost(title, body)
    redirect(`/blog/${id}`)
  }

  return (
    <>
      <PostForm onSubmit={handleSubmit}></PostForm>
    </>
  )

}