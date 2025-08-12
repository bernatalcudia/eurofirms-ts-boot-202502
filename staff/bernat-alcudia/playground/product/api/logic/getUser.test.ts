import mongoose from "mongoose"
import { getUser } from "./getUser.ts"



mongoose.connect(process.env.MONGO_URL_TEST!)
    .then(() => {
        console.info(" TEST:getUser...")

        console.info(" CASE:Success on existing user...")

        try {
            return getUser("68937091b2a15adb54c479ee")
                .then((user) => console.log("user  gotten", user))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())