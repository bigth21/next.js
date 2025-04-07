'use client'

import {useState} from "react";

export default function LikesButton({initialLikes}: {initialLikes: number}) {
  const [likes, setLikes] = useState<number>(initialLikes)

  return <button onClick={() => setLikes(prev => prev + 1)}>{likes}</button>;
}