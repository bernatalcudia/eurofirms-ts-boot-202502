import { CreatePost } from "./types"
import { User, Post } from "../data/models"
import { SystemError, NotFoundError } from "../errors"

export const createPost: CreatePost = (userId: string, image: string, text: string) => {

    return User.findById(userId)
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user)
                throw new NotFoundError("user not found")

            return Post.create({ author: userId, image, text })
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })
        .then(post => { })
}