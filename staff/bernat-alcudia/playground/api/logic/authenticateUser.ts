import { AuthenticateUser } from "./types"
import { User } from "../data/models"
import { errors, validate } from "com"

const { CredentialsError, SystemError } = errors

export const authenticateUser: AuthenticateUser = (username: string, password: string) => {
    validate.username(username, "username")
    validate.password(password, "password")

    return User.findOne({ username })
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user || user.password !== password)
                throw new CredentialsError(" wrong credentials")

            return user.id
        })
}