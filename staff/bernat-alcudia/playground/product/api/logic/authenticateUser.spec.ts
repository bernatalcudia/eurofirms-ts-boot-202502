import mongoose from "mongoose"
import { expect } from "chai"
import { UserDocType, User } from "../data/models.ts"
import { authenticateUser } from "./authenticateUser.ts"
import { NotFoundError, CredentialsError } from "com/errors"


describe("authenticateUser", () => {
    before(() => mongoose.connect(process.env.MONGO_URL_TEST!))

    beforeEach(() => User.deleteMany({}))

    it("authenticate a existing user", () => {
        let user: UserDocType | null, userId: string
        return User.create({ name: "James Hook", email: "james@hook.com", username: "jameshook", password: "123123123" })
            .then((_user) => { user = _user })
            .then(() => authenticateUser("jameshook", "123123123"))
            .then((_userId) => { userId = _userId })
            .finally(() => {
                expect(userId).to.be.string
                expect(userId).to.equal(user?._id.toString())
            })

    })

    it("fails trying to authenticate a non existing user", () => {
        let error: Error
        return authenticateUser("campanilla", "123123123")
            .catch((_error) => { error = _error })
            .finally(() => {
                expect(error).be.instanceOf(NotFoundError)
                expect(error.message).to.equal("user not found")
            })
    })

    it("fails on existing user but wrong password", () => {
        let error: Error
        return User.create({ name: "James Hook", email: "james@hook.com", username: "jameshook", password: "123123123" })
            .then(() => authenticateUser("jameshook", "1231231234"))
            .catch((_error) => { error = _error })
            .finally(() => {
                expect(error).be.instanceOf(CredentialsError)
                expect(error.message).to.equal("wrong credentials")
            })

    })

    afterEach(() => User.deleteMany({}))

    after(() => mongoose.disconnect())


})