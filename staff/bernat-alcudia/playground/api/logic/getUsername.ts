import { GetUserName } from "./types"
import { User } from "../data/models"
import { SystemError, NotFoundError } from "../errors"
import { validate } from "../validate"

export const getUserName: GetUserName = (userId: string) => {
    validate.id(userId, "userId")

    return User.findById(userId)
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user)
                throw new NotFoundError("User not found")

            return user.name
        })
}