type PostType = {
    id: string
    author: string
    image: string
    text: string
    date: Date
}




type Logic = {
    registerUser(name: string, email: string, username: string, password: string): Promise<void>
    authenticateUser(username: string, password: string): Promise<string>
    getUserName(userId: string): Promise<string>

    createPost(userId: string, image: string, text: string): Promise<void>
    getPosts(userId: string): Promise<PostType[]>
    deletePost(userId: string, postId: string): Promise<void>
}

export {
    Logic,
    PostType
}