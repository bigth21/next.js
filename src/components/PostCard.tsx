import {Post} from "@/lib/posts";
import Link from "next/link";
import LikesButton from "@/components/LikesButton";

export default function PostCard({ post }: { post: Post}) {
    return (
        <div>
            <Link href={`/blog/${post.id}`}><h1>{post.title}</h1></Link>
            <p>{post.body}</p>
            <LikesButton initialLikes={post.likes}></LikesButton>
        </div>
    )
}