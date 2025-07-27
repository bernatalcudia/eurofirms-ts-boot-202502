import { GetUserName } from "./types"
import { User } from "../data/models"
import { errors, validate } from "com"

const { SystemError, NotFoundError } = errors

export const getUserName: GetUserName = (userId: string) => {
    validate.id(userId, "userId")

    return User.findById(userId)
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user)
                throw new NotFoundError("user not found")

            return user.name
        })
}