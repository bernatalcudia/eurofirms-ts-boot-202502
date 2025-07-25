import zod, { email, ZodSchema } from "zod"
import { ValidationError } from "./errors"

const nameSchema = zod.string().min(3).max(50)
const emailSchema = zod.string().email()
const usernameSchema = zod.string().min(3).max(50)
const passwordSchema = zod.string().min(8).max(50)
const idSchema = zod.string().uuid()
const urlSchema = zod.string().url()
const textSchema = zod.string().min(3).max(1000)

function validateWithSchema<T>(schema: ZodSchema, data: unknown, explain = "data") {
    const result = schema.safeParse(data)

    if (!result.success)
        throw new ValidationError(`Invalid ${explain}: ${result.error.message}`)

}

export const validate = {
    name: (name: string, explain = "name") => {
        validateWithSchema(nameSchema, name, explain)
    },
    email: (email: string, explain = "email") => {
        validateWithSchema(emailSchema, email, explain)
    },
    username: (username: string, explain = "username") => {
        validateWithSchema(usernameSchema, username, explain)
    },
    password: (password: string, explain = "password") => {
        validateWithSchema(passwordSchema, password, explain)
    },
    id: (id: string, explain = "id") => {
        validateWithSchema(idSchema, id, explain)
    },
    url: (url: string, explain = "url") => {
        validateWithSchema(urlSchema, url, explain)
    },
    text: (text: string, explain = "text") => {
        validateWithSchema(textSchema, text, explain)
    }
}