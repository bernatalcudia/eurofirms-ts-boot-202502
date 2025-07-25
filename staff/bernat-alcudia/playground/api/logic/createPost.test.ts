import mongoose from "mongoose"
import { createPost } from "./createPost"



mongoose.connect("mongodb://localhost:27017/test")
    .then(() => {
        console.info(" TEST:createPost...")

        console.info(" CASE:Success on existing user...")

        try {
            return createPost("67bf483049b781456d78ce1b", "https://image.com/123", "post text")
                .then((result) => {
                    console.assert(result === undefined, "result is undefined")
                    console.log("post created")
                })
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())