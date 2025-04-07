import {NextRequest, NextResponse} from "next/server";

const posts = [
  {
    id: 1,
    title: 'title1',
    body: 'body1',
    likes: 5
  },
  {
    id: 2,
    title: 'title2',
    body: 'body2',
    likes: 10
  }
]

export async function GET(req: NextRequest, context: { params: { id: string }}) {
  const { id } = await context.params;
  const postId = Number(id);
  const post = posts
    .find(post => post.id === postId);
  return NextResponse.json(post);
}