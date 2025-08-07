import { GetUser } from "./types"
import { User } from "../data/models"
import { errors, validate } from "com"

const { SystemError, NotFoundError } = errors

export const getUser: GetUser = (userId: string) => {
    validate.id(userId, "userId")

    return User.findById(userId).select("-password -__v").lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user)
                throw new NotFoundError("user not found")

            const { _id, name, email, username } = user

            return {
                id: _id.toString(),
                name,
                email,
                username
            }
        })
}