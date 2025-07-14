import { Logic } from "./types"

import data from "./data"
import { DuplicityError, CredentialsError, NotFoundError } from "./errors"

const logic: Logic = {
    registerUser(name: string, email: string, username: string, password: string): void {
        let user = data.users.find(user => user.email === email || user.username === username)

        if (user) throw new DuplicityError("User already exists")

        user = { id: data.uuid(), name, email, username, password }

        data.users.push(user)
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