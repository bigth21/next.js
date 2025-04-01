import {getPost} from "@/lib/posts";

export default async function Page({ params }: {params: Promise<{ slug: string }>}) {
    const {slug} = await params
    const post = await getPost(Number(slug))
    return <div>Page {post.title}</div>
};