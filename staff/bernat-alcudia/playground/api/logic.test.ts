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
                    .then(() => console.log("user save"))
                    .catch(error => console.error(error))
            } catch (error) {
                console.error(error)
            }
        }
    })
    // .then(() => {
    //     console.info(" TEST:authenticateUser...")

    //     console.info(" CASE:Success on existing user...")

    //     {
    //         try {
    //             return logic.authenticateUser("peterpan", "123123123")
    //                 .then((userId) => console.log("user authenticated", userId))
    //                 .catch(error => console.error(error))
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    // })

    // .then(() => {
    //     console.info(" TEST:getUserName...")

    //     console.info(" CASE:Success on existing user...")

    //     {
    //         try {
    //             return logic.getUserName("67bf483049b781456d78ce1b")
    //                 .then((userName) => console.log("user name gotten", userName))
    //                 .catch(error => console.error(error))
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    // })

    // .then(() => {
    //     console.info(" TEST:createPost...")

    //     console.info(" CASE:Success on existing user...")

    //     {
    //         try {
    //             return logic.createPost("67bf483049b781456d78ce1b", "https://image.com/123", "post text")
    //                 .then((result) => {
    //                     console.assert(result === undefined, "result is undefined")
    //                     console.log("post created")
    //                 })
    //                 .catch(error => console.error(error))
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    // })
    // .then(() => {
    //     console.info(" TEST:getPosts...")

    //     console.info(" CASE:Success on existing user...")

    //     {
    //         try {
    //             return logic.getPosts("67bf483049b781456d78ce1b")
    //                 .then((posts) => {

    //                     console.log("posts gotten", posts)
    //                 })
    //                 .catch(error => console.error(error))
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    // })

    .then(() => {
        console.info(" TEST:deletePost...")

        console.info(" CASE:Success on existing user...")

        {
            try {
                return logic.deletePost("67bf483049b781456d78ce1b", "67zf483069b781456d78cw1b")
                    .then((result) => {
                        console.assert(result === undefined, "result is undefined")

                        console.log("post deleted", result)
                    })
                    .catch(error => console.error(error))
            } catch (error) {
                console.error(error)
            }
        }
    })

    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())