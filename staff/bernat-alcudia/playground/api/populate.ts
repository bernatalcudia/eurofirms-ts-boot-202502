import { User, Post } from "./types"

const post1: Post = { id: "1", author: "1", image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjEwbTRxZDIybXEybmR0OXMyYmljdmhxYjNpenl3eXl0Y3EwYmdtdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lDR0wnXboVr8c/giphy.gif", text: "taking a nap", date: new Date() }

const peter: User = { id: "1", name: "Peter Pan", email: "peter@pan.com", username: "peterpan", password: "123123123" }
const wendy: User = { id: "2", name: "Wendy Darling", email: "wendy@darling.com", username: "wendydarling", password: "123123123" }
const pepito: User = { id: "3", name: "Pepito Grillo", email: "pepito@grillo.com", username: "pepitogrillo", password: "123123123" }
const campa: User = { id: "4", name: "Campa Nilla", email: "campa@nilla.com", username: "campanilla", password: "123123123" }

const users: User[] = []
const posts: Post[] = []

users.push(peter)
users.push(wendy)
users.push(pepito)
users.push(campa)

posts.push(post1)

console.table(users)
console.table(posts)