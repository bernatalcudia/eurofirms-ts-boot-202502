import mongoose from "mongoose"
import { getUserName } from "./getUsername.ts"



mongoose.connect(process.env.MONGO_URL_TEST!)
    .then(() => {
        console.info(" TEST:getUserName...")

        console.info(" CASE:Success on existing user...")

        try {
            return getUserName("68921234cad13b12d74182db")
                .then((userName) => console.log("user name gotten", userName))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())