import { expect } from "chai"

import { Robot } from "./Robot.js"

describe("Robot", () => {
    it("constructs an instance of Robot", () => {
        const robot = new Robot()

        expect(robot).to.be.instanceOf(Date)
    })
})