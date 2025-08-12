export class Robot {
    x: number
    y: number

    movement: string
    orientation: string

    constructor() {
        this.x = 0
        this.y = 0
        this.movement = "stop"
        this.orientation = "north"
    }
}