import { User } from "../data/models"
import { RegisterUser } from "./types"
import { DuplicityError, SystemError } from "../errors"

export const registerUser: RegisterUser = (name: string, email: string, username: string, password: string) => {

    return User.create({ name, email, username, password })
        .catch(error => {
            if (error.code === 11000)
                throw new DuplicityError("User already exists")

            throw new SystemError(error.message)
        })
        .then(user => { })
}