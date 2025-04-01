import {getPosts} from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default async function Page() {
    const posts = await getPosts();

    return (
        <ul>
            {posts.map(post => (<PostCard key={post.id} post={post} />))}
        </ul>
    )
}