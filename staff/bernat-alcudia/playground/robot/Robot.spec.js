import { expect } from "chai";
import { Robot } from "./Robot.js";
describe("Robot", () => {
    it("constructs an instance of Robot", () => {
        const robot = new Robot();
        expect(robot).to.be.instanceOf(Robot)
        expect(robot.x).to.equal(0)
        expect(robot.y).to.equal(0)
        expect(robot.movement).to.equal("stop")
        expect(robot.orientation).to.equal("north")
    });
});
