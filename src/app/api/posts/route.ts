import {NextRequest, NextResponse} from "next/server";
import {posts} from "@/app/api/posts/data";

export async function POST(req: NextRequest) {
  let {title, body} = await req.json();
  const lastPost = posts[posts.length - 1]

  const newPost = {id: lastPost.id + 1, title, body, likes: 0}
  posts.push(newPost)

  return NextResponse.json(newPost.id)
}

export async function GET() {
  return NextResponse.json(posts);
}