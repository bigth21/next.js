import {NextRequest, NextResponse} from "next/server";
import {posts} from "@/app/api/posts/data";

export async function GET(req: NextRequest, context: { params: { id: string }}) {
  const { id } = await context.params;
  const postId = Number(id);
  const post = posts
    .find(post => post.id === postId);
  return NextResponse.json(post);
}