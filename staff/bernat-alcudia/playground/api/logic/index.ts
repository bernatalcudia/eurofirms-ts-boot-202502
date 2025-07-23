import { Schema, Types } from "mongoose"

import { Logic, PostType } from "./types"

// import { IUser, User, IPost, Post } from "../data/models"

// import { SystemError, DuplicityError, CredentialsError, NotFoundError, OwnershipError } from "../errors"
import { registerUser } from "./registerUser"
import { authenticateUser } from "./authenticateUser"
import { getUserName } from "./getUsername"
import { createPost } from "./createPost"
import { getPosts } from "./getPosts"
import { deletePost } from "./deletePost"


const { ObjectId } = Schema.Types

const logic: Logic = {
    registerUser,
    authenticateUser,
    getUserName,
    createPost,
    getPosts,
    deletePost,
}

export { logic }