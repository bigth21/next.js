import React, {useState} from "react";

interface PostFormProps {
  initialTitle?: string;
  initialBody?: string;
  onSubmit: (title: string, body: string) => void;
}


export default function PostForm({initialTitle, initialBody, onSubmit}: PostFormProps) {
  const [title, setTitle] = useState(initialTitle || '')
  const [body, setBody] = useState(initialBody || '')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onSubmit(title, body)
  }

  return <>
    <form onSubmit={handleSubmit}>
      <input type="text" id={"title"} name={"title"} value={title} onChange={(e) => setTitle(e.target.value)}/>
      <input type="text" id={"body"} name={"body"} value={body} onChange={(e) => setBody(e.target.value)}/>
      <button type={"submit"}>Create</button>
    </form></>
}