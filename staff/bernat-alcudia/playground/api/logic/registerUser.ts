import { User } from "../data/models"
import { RegisterUser } from "./types"
import { errors, validate } from "com"

const { SystemError, DuplicityError } = errors

export const registerUser: RegisterUser = (name: string, email: string, username: string, password: string) => {

    validate.name(name, "name")
    validate.email(email, "email")
    validate.username(username, "username")
    validate.password(password, "password")

    return User.create({ name, email, username, password })
        .catch(error => {
            if (error.code === 11000)
                throw new DuplicityError("User already exists")

            throw new SystemError(error.message)
        })
        .then(user => { })
}