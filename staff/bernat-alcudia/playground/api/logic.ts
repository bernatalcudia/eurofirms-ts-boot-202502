import { Logic } from "./types"
import { IUser, User } from "./models"

import data from "./data"
import { SystemError, DuplicityError, CredentialsError, NotFoundError } from "./errors"

const logic: Logic = {
    registerUser(name: string, email: string, username: string, password: string) {
        const user = new User<IUser>({ name, email, username, password })

        return user.save()
            .catch(error => { throw new SystemError(error.message) })
            .then(user => { })
    },
    authenticateUser(username: string, password: string) {
        let user = data.users.find(user => user.username === username)
        if (!user || user.password !== password)
            throw new CredentialsError("Wrong credentials")

        return user?.id

    },

    getUserName(userId) {
        const user = data.users.find(user => user.id === userId)

        if (!user) throw new NotFoundError("user not found")

        return user?.name
    },
}

export default logic