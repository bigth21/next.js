import {NextResponse} from "next/server";

export async function GET() {
  return NextResponse.json([
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
  ]);
}