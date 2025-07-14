import logic from "./logic"
import data from "./data"
import { CredentialsError, DuplicityError, NotFoundError } from "./errors"

console.info(" SUITE: logic...")

console.info(" TEST:Registering user...")

console.info(" CASE:Success registering new user...")


{
    try {
        logic.registerUser("Peter Pan", "peter@pan.com", "peterpan", "123123123")

        const user = data.users.find(user => user.username === "peterpan")

        console.assert(user !== undefined, "User exists")

        console.assert(user?.name === "Peter Pan", "User name is Peter Pan")

        console.assert(user?.email === "peter@pan.com", "User Email is peter@pan.com")

        console.assert(user?.username === "peterpan", "User name is peterpan")

        console.assert(user?.password === "123123123", " User Password is 123123123")
    } catch (error) {
        console.error(error)
    }
}



console.info("CASE:User already exists...")


{
    try {
        data.users.push({ id: data.uuid(), name: "Wendy Darling", email: "wendy@darling.com", username: "wendydarling", password: "123123123" })

        logic.registerUser("Wendy Darling", "wendy@darling.com", "wendydarling", "123123123")
    } catch (error) {
        console.error(error)
    }
}


console.info(" TEST:Authenticate user...")

console.info(" CASE:Success on existing user...")

{
    let catchedError
    try {
        data.users.push({ id: data.uuid(), name: "Pepito Grillo", email: "pepito@grillo.com", username: "pepitogrillo", password: "123123123" })

        const userId = logic.authenticateUser("pepitogrillo", "123123123")

        console.assert(typeof userId === "string", "User id is a string")
        const user = data.users.find(user => user.id === userId)
        console.assert(user?.username === "pepitogrillo", "User username is pepitogrillo")
        console.assert(user?.password === "123123123", "User password is 123123123")
    } catch (error) {
        catchedError = error
    } finally {
        console.assert(catchedError instanceof DuplicityError, "catchedError is instanceof DuplicityError")
        console.assert(catchedError.message === "User already exists", "catchedError message is 'User already exists'")
    }
}


console.info(" CASE:Fails on existing user but wrong username...")


{
    let catchedError
    try {
        data.users.push({ id: data.uuid(), name: "James Hook", email: "james@hook.com", username: "jameshook", password: "123123123" })

        const userId = logic.authenticateUser("jameshoo", "123123123")


    } catch (error) {
        catchedError = error
    } finally {
        console.assert(catchedError instanceof CredentialsError, "catchedError is instanceof CredentialsError")
        console.assert(catchedError.message === "Wrong credentials", "catchedError message is 'Wrong credentials'")
    }
}



console.info(" CASE:Fails on existing user but wrong password...")

{
    let catchedError
    try {
        data.users.push({ id: data.uuid(), name: "Campa Nilla", email: "campa@nilla.com", username: "campanilla", password: "123123123" })

        const userId = logic.authenticateUser("campanilla", "12312312")

        console.log(userId)
    } catch (error) {
        catchedError = error
    } finally {
        console.assert(catchedError instanceof CredentialsError, "catchedError is instanceof CredentialsError")
        console.assert(catchedError.message === "Wrong credentials", "catchedError message is 'Wrong credentials'")
    }
}





console.info(" CASE:Fails non existing user...")

{
    let catchedError
    try {

        const userId = logic.authenticateUser("mickeymouse", "123123123")

        console.log(userId)
    } catch (error) {
        catchedError = error
    } finally {
        console.assert(catchedError instanceof CredentialsError, "catchedError is instanceof CredentialsError")
        console.assert(catchedError.message === "Wrong credentials", "catchedError message is 'Wrong credentials'")
    }
}

console.info("TEST:GetUsername...")

console.info("CASE Success on existing user...")

{
    try {
        const userId = data.uuid()

        data.users.push({ id: userId, name: "Pedro Picapiedra", email: "pedro@picapiedra.com", username: "pedropicapiedra", password: "123123123" })

        const name = logic.getUserName(userId)

        console.assert(name === "Pedro Picapiedra", "name is Pedro Picapiedra")
    } catch (error) {
        console.error(error)
    }
}

console.info("CASE fails on non-existing user...")

{
    let catchedError
    try {
        const userId = data.uuid()

        logic.getUserName(userId)
    } catch (error) {
        catchedError = error
    } finally {
        console.assert(catchedError instanceof NotFoundError, "catchedError is instanceof NotFoundError")
        console.assert(catchedError.message === "user not found", "catchedError message is 'user not found'")
    }
}