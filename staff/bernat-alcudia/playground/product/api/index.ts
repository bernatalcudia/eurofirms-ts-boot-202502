import mongoose from "mongoose"
import express from "express"
import cors from "cors"
import { usersRouter } from "./routes/usersRouter"
import { errorHandler } from "./middlewares"

const { MONGO_URL, PORT } = process.env

mongoose.connect(MONGO_URL!)
    .then(() => {
        const api = express()

        api.use(cors())

        api.get("/", (req, res) => { res.send("Hello API") })

        api.use("/users", usersRouter)

        api.use(errorHandler)

        api.listen(PORT, () => { console.log("API listening is up on port 8080") })
    })