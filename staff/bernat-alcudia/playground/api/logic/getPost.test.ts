import mongoose from "mongoose"
import { getPosts } from "./getPosts"


mongoose.connect("mongodb://localhost:27017/test")
    .then(() => {
        console.info(" TEST:getPosts...")

        console.info(" CASE:Success on existing user...")

        try {
            return getPosts("67bf483049b781456d78ce1b")
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