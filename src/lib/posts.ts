import apiClient from "@/lib/apiClient";

export interface Post {
    id: number,
    title: string,
    body: string,
    likes: number
}

function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function createPost(title: string, body: string): Promise<number> {
    return await apiClient.post('/api/posts', {title, body})
}

export async function getPosts(): Promise<Post[]> {
    await delay(1000);
    return await apiClient.get('/api/posts')
}

export async function getPost(id: number): Promise<Post> {
    return await apiClient.get(`/api/posts/${id}`)
}

export async function updatePost(id: number, title: string, body: string): Promise<void> {
    await apiClient.put(`/api/posts/${id}`, {title, body})
}