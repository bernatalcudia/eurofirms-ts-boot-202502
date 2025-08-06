import mongoose from "mongoose"
import { createPost } from "./createPost.ts"



mongoose.connect(process.env.MONGO_URL_TEST!)
    .then(() => {
        console.info(" TEST:createPost...")

        console.info(" CASE:Success on existing user...")

        try {
            return createPost("68921234cad13b12d74182db", "https://image.com/123", "post text")
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