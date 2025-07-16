import { Schema, model } from "mongoose"

interface IUser {
    name: string
    email: string
    username: string
    password: string
}

const user = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        String,
        required: true,
        unique: true
    },
    username: {
        String,
        required: true,
        unique: true
    },
    password: { String, required: true }
})

const User = model<IUser>("User", user)

export {
    IUser,
    User,

}