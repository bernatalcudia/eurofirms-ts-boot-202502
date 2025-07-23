import { GetPosts } from "./types"
import { User, Post } from "../data/models"
import { SystemError, NotFoundError } from "../errors"
import { PostType } from "./types"

export const getPosts: GetPosts = (userId: string) => {
    return User.findById(userId)
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user)
                throw new NotFoundError("user not found")
            return Post.find().lean()

        })
        .then(posts => {
            const normalizedPosts = posts.map<PostType>(post => {
                return {
                    id: post._id.toString(),
                    author: post.author.toString(),
                    image: post.image,
                    text: post.text,
                    date: post.date
                }
            })
            return normalizedPosts
        })
}