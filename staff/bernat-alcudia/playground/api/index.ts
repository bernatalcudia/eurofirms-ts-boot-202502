import express from "express"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"

import { errors } from "com"

const { SystemError } = errors

import { logic } from "./logic"

const { MONGO_URL, JWT_SECRET, PORT } = process.env

mongoose.connect(MONGO_URL!)
    .then(() => {


        const api = express()

        api.get("/", (req, res) => { res.send("Hello API") })

        const jsonBodyExpress = express.json()

        api.post("/users", jsonBodyExpress, (req, res) => {

            try {
                const { name, email, username, password } = req.body

                logic.registerUser(name, email, username, password)
                    .then(() => res.status(201).json({ message: "User created" }))
                    .catch(error => {
                        res.status(409).json({ error: error.name, message: error.message })
                    })
            } catch (error) {
                res.status(400).json({ error: SystemError.name, message: (error as Error).message })
            }
        })

        api.post("/users/auth", jsonBodyExpress, (req, res) => {

            try {
                const { username, password } = req.body

                logic.authenticateUser(username, password)
                    .then(userId => {
                        const token = jwt.sign({ sub: userId }, JWT_SECRET!)
                        res.status(200).json({ token })
                    })
                    .catch(error => {
                        res.status(401).json({ error: error.name, message: error.message })
                    })
            } catch (error) {
                res.status(400).json({ error: SystemError.name, message: (error as Error).message })
            }
        })

        api.get("/users/self", (req, res) => {

            try {
                const authorization = req.headers.authorization

                if (!authorization) {

                    res.status(401).json({ error: SystemError.name, message: "no authorization received" })

                    return
                }

                const token = authorization?.slice(7)

                const { sub: userId } = jwt.verify(token, JWT_SECRET!)

                logic.getUserName(userId as string)
                    .then(name => {
                        res.json(name)
                    })
                    .catch(error => {
                        res.status(401).json({ error: error.name, message: error.message })
                    })
            } catch (error) {
                res.status(400).json({ error: SystemError.name, message: (error as Error).message })
            }
        })

        api.listen(PORT, () => { console.log("API listening is up on port 8080") })
    })