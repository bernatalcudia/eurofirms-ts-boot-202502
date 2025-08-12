import mongoose from "mongoose"
import { deletePost } from "./deletePost.ts"


mongoose.connect(process.env.MONGO_URL_TEST!)
    .then(() => {
        console.info(" TEST:deletePost...")

        console.info(" CASE:Success on existing user...")

        try {
            return deletePost("68921234cad13b12d74182db", "68921561444d778ee7723454")
                .then((result) => {
                    console.assert(result === undefined, "result is undefined")

                    console.log("post deleted", result)
                })
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())