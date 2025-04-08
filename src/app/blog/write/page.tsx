'use client'

import {createPost} from "@/lib/posts";
import React, {useState} from "react";
import {redirect} from "next/navigation";
import PostEditForm from "@/components/PostEditForm";

export default function WritePage() {
  async function handleSubmit(title: string, body: string) {
    const id = await createPost(title, body)
    redirect(`/blog/${id}`)
  }

  return (
    <>
      <PostEditForm onSubmit={handleSubmit}></PostEditForm>
    </>
  )

}