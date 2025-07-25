import mongoose from "mongoose"
import { deletePost } from "./deletePost"


mongoose.connect("mongodb://localhost:27017/test")
    .then(() => {
        console.info(" TEST:deletePost...")

        console.info(" CASE:Success on existing user...")

        try {
            return deletePost("67bf483049b781456d78ce1b", "67zf483069b781456d78cw1b")
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