import mongoose from "mongoose"
import { registerUser } from "./registerUser"


mongoose.connect("mongodb://localhost:27017/test")
    .then(() => {
        console.info(" SUITE: logic...")

        console.info(" TEST:Registering user...")

        console.info(" CASE:Success registering new user...")

        try {
            return registerUser("Peter Pan", "peter@pan.com", "peterpan", "123123123")
                .then(() => console.log("user save"))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())