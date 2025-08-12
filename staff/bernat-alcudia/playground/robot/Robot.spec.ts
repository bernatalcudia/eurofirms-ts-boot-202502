import { expect } from "chai"

import { Robot } from "./Robot.js"

describe("Robot", () => {
    it("constructs an instance of Robot", () => {
        const robot = new Robot()

        expect(robot).to.be.instanceOf(Robot)
        expect(robot.x).to.equal(0)
        expect(robot.y).to.equal(0)
        expect(robot.direction).to.equal("deadlock")
        expect(robot.orientation).to.equal("north")
    })

    it("goes forward to the north", () => {
        const robot = new Robot()

        robot.forward()

        expect(robot.direction).to.equal("forward")
        expect(robot.x).to.equal(0)
        expect(robot.y).to.equal(-10)

        robot.forward()
        expect(robot.x).to.equal(0)
        expect(robot.y).to.equal(-20)

        robot.forward()
        expect(robot.x).to.equal(0)
        expect(robot.y).to.equal(-30)
    })

    it("goes forward to the east after turning right 1 time", () => {
        const robot = new Robot()

        robot.right()

        expect(robot.orientation).to.equal("east")

        robot.forward()

        expect(robot.direction).to.equal("forward")
        expect(robot.x).to.equal(10)
        expect(robot.y).to.equal(0)

        robot.forward()

        expect(robot.x).to.equal(20)
        expect(robot.y).to.equal(0)

        robot.forward()

        expect(robot.x).to.equal(30)
        expect(robot.y).to.equal(0)
    })

    it("goes forward to the south after turning right 2 times", () => {
        const robot = new Robot()


        robot.right()
        robot.right()

        expect(robot.orientation).to.equal("south")

        robot.forward()

        expect(robot.direction).to.equal("forward")
        expect(robot.x).to.equal(0)
        expect(robot.y).to.equal(10)

        robot.forward()

        expect(robot.x).to.equal(0)
        expect(robot.y).to.equal(20)

        robot.forward()

        expect(robot.x).to.equal(0)
        expect(robot.y).to.equal(30)
    })

    it("goes forward to the west after turning right 3 times", () => {
        const robot = new Robot()


        robot.right()
        robot.right()
        robot.right()

        expect(robot.orientation).to.equal("west")

        robot.forward()

        expect(robot.direction).to.equal("forward")
        expect(robot.x).to.equal(-10)
        expect(robot.y).to.equal(0)

        robot.forward()

        expect(robot.x).to.equal(-20)
        expect(robot.y).to.equal(0)

        robot.forward()

        expect(robot.x).to.equal(-30)
        expect(robot.y).to.equal(0)
    })

    it("goes forward to the north after turning right 4 times", () => {
        const robot = new Robot()

        robot.right()
        robot.right()
        robot.right()
        robot.right()

        expect(robot.orientation).to.equal("north")

        robot.forward()

        expect(robot.direction).to.equal("forward")

        expect(robot.x).to.equal(0)
        expect(robot.y).to.equal(-10)

        robot.forward()

        expect(robot.x).to.equal(0)
        expect(robot.y).to.equal(-20)

        robot.forward()

        expect(robot.x).to.equal(0)
        expect(robot.y).to.equal(-30)
    })

    it("goes forward to the west after turning left 1 time", () => {
        const robot = new Robot()


        robot.left()


        expect(robot.orientation).to.equal("west")

        robot.forward()

        expect(robot.direction).to.equal("forward")
        expect(robot.x).to.equal(-10)
        expect(robot.y).to.equal(0)

        robot.forward()

        expect(robot.x).to.equal(-20)
        expect(robot.y).to.equal(0)

        robot.forward()

        expect(robot.x).to.equal(-30)
        expect(robot.y).to.equal(0)
    })

    it("goes forward to the south after turning left 2 times", () => {
        const robot = new Robot()


        robot.left()
        robot.left()

        expect(robot.orientation).to.equal("south")

        robot.forward()

        expect(robot.direction).to.equal("forward")
        expect(robot.x).to.equal(0)
        expect(robot.y).to.equal(10)

        robot.forward()

        expect(robot.x).to.equal(0)
        expect(robot.y).to.equal(20)

        robot.forward()

        expect(robot.x).to.equal(0)
        expect(robot.y).to.equal(30)
    })

    it("goes forward to the east after turning left 3 times", () => {
        const robot = new Robot()

        robot.left()
        robot.left()
        robot.left()

        expect(robot.orientation).to.equal("east")

        robot.forward()

        expect(robot.direction).to.equal("forward")
        expect(robot.x).to.equal(10)
        expect(robot.y).to.equal(0)

        robot.forward()

        expect(robot.x).to.equal(20)
        expect(robot.y).to.equal(0)

        robot.forward()

        expect(robot.x).to.equal(30)
        expect(robot.y).to.equal(0)
    })

    it("goes forward to the north after turning left 4 times", () => {
        const robot = new Robot()

        robot.left()
        robot.left()
        robot.left()
        robot.left()

        expect(robot.orientation).to.equal("north")

        robot.forward()

        expect(robot.direction).to.equal("forward")

        expect(robot.x).to.equal(0)
        expect(robot.y).to.equal(-10)

        robot.forward()

        expect(robot.x).to.equal(0)
        expect(robot.y).to.equal(-20)

        robot.forward()

        expect(robot.x).to.equal(0)
        expect(robot.y).to.equal(-30)
    })

})