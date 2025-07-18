import { Logic } from "./types"
import { IUser, User } from "./models"

import { SystemError, DuplicityError, CredentialsError, NotFoundError } from "./errors"

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
}

export default logic