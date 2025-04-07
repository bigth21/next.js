import axios from "axios";

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
    const response = await axios.post('http://localhost:3000/api/posts', {title, body})
    return response.data;
}


export async function getPosts(): Promise<Post[]> {
    await delay(1000);
    const response = await axios.get('http://localhost:3000/api/posts')
    return response.data
}

export async function getPost(id: number): Promise<Post> {
    const response = await axios.get(`http://localhost:3000/api/posts/${id}`)
    return response.data
}