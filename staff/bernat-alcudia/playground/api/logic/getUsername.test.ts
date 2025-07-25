import mongoose from "mongoose"
import { getUserName } from "./getUsername"



mongoose.connect("mongodb://localhost:27017/test")
    .then(() => {
        console.info(" TEST:getUserName...")

        console.info(" CASE:Success on existing user...")

        try {
            return getUserName("67bf483049b781456d78ce1b")
                .then((userName) => console.log("user name gotten", userName))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())