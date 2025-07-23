import { Schema, Types } from "mongoose"

import { Logic, PostType } from "./types"

import { IUser, User, IPost, Post } from "./models"

import { SystemError, DuplicityError, CredentialsError, NotFoundError, OwnershipError } from "./errors"

const { ObjectId } = Schema.Types

const logic: Logic = {
    registerUser(name: string, email: string, username: string, password: string) {

        const user = new User<IUser>({ name, email, username, password })

        return user.save()
            .catch(error => {
                if (error.code === 11000)
                    throw new DuplicityError("User already exists")

                throw new SystemError(error.message)
            })
            .then(user => { })
    },
    authenticateUser(username: string, password: string) {

        return User.findOne({ username })
            .catch(error => {
                throw new SystemError(error.message)
            })
            .then(user => {
                if (!user || user.password !== password)
                    throw new CredentialsError(" wrong credentials")

                return user.id
            })
    },

    getUserName(userId) {

        return User.findById(userId)
            .catch(error => {
                throw new SystemError(error.message)
            })
            .then(user => {
                if (!user)
                    throw new NotFoundError("User not found")

                return user.name
            })
    },

    createPost(userId: string, image: string, text: string) {

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
    },

    getPosts(userId: string) {
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
    },

    deletePost(userId, postId) {
        return User.findById(userId)
            .catch(error => {
                throw new SystemError(error.message)
            })
            .then(user => {
                if (!user)
                    throw new NotFoundError("user not found")

                return Post.findById(postId)
                    .catch(error => {
                        throw new SystemError(error.message)
                    })
                    .then(post => {
                        if (!post)
                            throw new NotFoundError("post not found")
                        if (post.author.toString() !== userId) throw new OwnershipError("user is not the author of the post")

                        return Post.deleteOne({ _id: postId })
                            .catch(error => {
                                throw new SystemError(error.message)
                            })

                    })
                    .then(() => { })
            })
    },
}

export default logic