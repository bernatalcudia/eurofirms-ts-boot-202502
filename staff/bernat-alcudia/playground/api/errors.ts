
class DuplicityError extends Error {
    constructor(message: string) {
        super(message)

    }
}

class CredentialsError extends Error {
    constructor(message: string) {
        super(message)

    }
}

class NotFoundError extends Error {
    constructor(message: string) {
        super(message)

    }
}

export {
    DuplicityError,
    CredentialsError,
    NotFoundError
}