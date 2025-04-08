import {NextRequest, NextResponse} from "next/server";
import {posts} from "@/app/api/posts/data";

export async function GET(req: NextRequest, context: { params: { id: string }}) {
  const { id } = await context.params;
  const postId = Number(id);
  const post = posts
    .find(post => post.id === postId);
  return NextResponse.json(post);
}

export async function PUT(req: NextRequest, context: { params: { id: string }}): Promise<NextResponse> {
  const { id } = await context.params;
  const postId = Number(id);
  let {title, body} = await req.json();
  const post = posts.find(post => post.id === postId)
  if (post) {
    post.title = title;
    post.body = body;
  }
  return new NextResponse(null, { status: 200 })
}