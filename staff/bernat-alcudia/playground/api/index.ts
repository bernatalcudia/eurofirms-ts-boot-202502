import express from "express"
import { SystemError } from "./errors"
import logic from "./logic"

const api = express()

api.get("/", (req, res) => { res.send("Hello API") })

const jsonBodyExpress = express.json()

api.post("/users", jsonBodyExpress, (req, res) => {

    try {
        const { name, email, username, password } = req.body

        logic.registerUser(name, email, username, password)

        res.status(201).json({ message: "User created" })
    } catch (error) {
        res.status(400).json({ error: SystemError.name, message: error.message })
    }
})

api.listen(8080, () => { console.log("API listening is up on port 8080") })