import { expect } from "chai"
import mongoose, { Types } from "mongoose"
import { User } from "../data/models.ts"
import { getUser } from "./getUser.ts"
import { SystemError, NotFoundError } from "com/errors"
import { UserType } from "./types.ts"


const { ObjectId } = Types


describe("getUser", () => {
    before(() => mongoose.connect(process.env.MONGO_URL_TEST!))

    beforeEach(() => User.deleteMany({}))

    it("get a existing user", () => {
        let userId: string, user: UserType
        return User.create({ name: "James Hook", email: "james@hook.com", username: "jameshook", password: "123123123" })
            .then((user) => {
                userId = user.id

                return getUser(userId)

            })
            .then((_user) => user = _user)
            .finally(() => {
                expect(user.id).to.equal(userId)
                expect(user.name).to.equal("James Hook")
                expect(user.email).to.equal("james@hook.com")
                expect(user.username).to.equal("jameshook")
            })
    })

    it("fails trying to get a non existing user", () => {
        let error: Error

        return getUser(new ObjectId().toString())
            .catch((_error) => error = _error)
            .finally(() => {
                expect(error).be.instanceOf(NotFoundError)
                expect(error.message).to.equal("user not found")
            })
    })

    afterEach(() => User.deleteMany({}))

    after(() => mongoose.disconnect())

})