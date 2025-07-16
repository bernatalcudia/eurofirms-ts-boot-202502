import mongoose from "mongoose"
import logic from "./logic"
import { CredentialsError, DuplicityError, NotFoundError } from "./errors"


mongoose.connect("mongodb://localhost:27017/test")
    .then(() => {
        console.info(" SUITE: logic...")

        console.info(" TEST:Registering user...")

        console.info(" CASE:Success registering new user...")

        {
            try {
                return logic.registerUser("Peter Pan", "peter@pan.com", "peterpan", "123123123")
                    .then(() => console.log("User save"))
                    .catch(error => console.error(error))
            } catch (error) {
                console.error(error)
            }
        }
    })
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())