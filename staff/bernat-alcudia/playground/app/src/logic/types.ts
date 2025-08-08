type RegisterUser = (name: string, email: string, username: string, password: string) => Promise<void>
type LoginUser = (username: string, password: string) => Promise<void>

type Logic = {
    registerUser: RegisterUser
    loginUser: LoginUser
}

export type {
    RegisterUser,
    LoginUser,

    Logic
}