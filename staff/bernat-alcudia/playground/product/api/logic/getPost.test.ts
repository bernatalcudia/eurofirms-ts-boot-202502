import mongoose from "mongoose"
import { getPosts } from "./getPosts.ts"


mongoose.connect(process.env.MONGO_URL_TEST!)
    .then(() => {
        console.info(" TEST:getPosts...")

        console.info(" CASE:Success on existing user...")

        try {
            return getPosts("68921234cad13b12d74182db")
                .then((posts) => {

                    console.log("posts gotten", posts)
                })
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())