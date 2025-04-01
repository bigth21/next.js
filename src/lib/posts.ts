export interface Post {
    id: number,
    title: string,
    body: string,
}

const posts: Post[] = [
    {
        id: 1,
        title: 'title1',
        body: 'body1',
    },
    {
        id: 2,
        title: 'title2',
        body: 'body2',
    }
]

export async function getPosts(): Promise<Post[]> {
    return posts
}

export async function getPost(id: number): Promise<Post> {
    const result = posts.find(post => post.id === id);
    return result ? result : Promise.reject(new Error('Post not found'));
}