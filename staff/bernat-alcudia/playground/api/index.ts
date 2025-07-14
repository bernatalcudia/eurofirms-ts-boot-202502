import express from "express"

const api = express()

api.get("/", (req, res) => { res.send("Hello API") })

api.listen(8080, () => { console.log("API listening is up on port 8080") })