export class Robot {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.direction = "deadlock";
        this.orientation = "north";
    }
    forward() {
        this.direction = "forward";
        if (this.orientation === "north") {
            this.y -= 10;
        }
        else if (this.orientation === "east") {
            this.x += 10;
        }
        else if (this.orientation === "south") {
            this.y += 10;
        }
        else if (this.orientation === "west") {
            this.x -= 10;
        }
    }
    backward() {
        this.direction = "backward";
        if (this.orientation === "north") {
            this.y += 10;
        }
        else if (this.orientation === "east") {
            this.x -= 10;
        }
        else if (this.orientation === "south") {
            this.y -= 10;
        }
        else if (this.orientation === "west") {
            this.x += 10;
        }
    }
    right() {
        if (this.orientation === "north") {
            this.orientation = "east";
        }
        else if (this.orientation === "east") {
            this.orientation = "south";
        }
        else if (this.orientation === "south") {
            this.orientation = "west";
        }
        else if (this.orientation === "west") {
            this.orientation = "north";
        }
    }
    left() {
        if (this.orientation === "north") {
            this.orientation = "west";
        }
        else if (this.orientation === "west") {
            this.orientation = "south";
        }
        else if (this.orientation === "south") {
            this.orientation = "east";
        }
        else if (this.orientation === "east") {
            this.orientation = "north";
        }
    }
}
