const { validate, errors } = await import("com")
import { LoginUser } from "./types"
const { SystemError } = errors
import { data } from "../data"


export const loginUser: LoginUser = async (username: string, password: string): Promise<void> => {

    validate.username(username)
    validate.password(password)

    return fetch("http://localhost:8080/users/auth", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(response => {
            if (response.status === 200)
                return response.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then((token) => data.setToken(token))

            return response.json()
                .catch(error => { throw new SystemError(error.message) })
                .then((body: { error: string, message: string }) => {
                    const { error, message } = body

                    const constructor = errors[error as keyof typeof errors]

                    throw new constructor(message)
                })
        })
}