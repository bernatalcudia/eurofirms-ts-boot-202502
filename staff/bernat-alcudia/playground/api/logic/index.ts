import { Schema, Types } from "mongoose"

import { Logic, PostType } from "./types"

// import { UserDocType, User, PostDocType, Post } from "../data/models"

// import { SystemError, DuplicityError, CredentialsError, NotFoundError, OwnershipError } from "../errors"
import { registerUser } from "./registerUser"
import { authenticateUser } from "./authenticateUser"
import { getUser } from "./getUser"
import { createPost } from "./createPost"
import { getPosts } from "./getPosts"
import { deletePost } from "./deletePost"


const { ObjectId } = Schema.Types

export const logic: Logic = {
    registerUser,
    authenticateUser,
    getUser,
    createPost,
    getPosts,
    deletePost,
}

