import { Robot } from "./Robot.js";
console.log("Hello world");
const robot = new Robot("east");
console.log(robot);
const robotImage = document.createElement("img");
robotImage.src = "robot.png";
robotImage.style.width = "100px";
robotImage.style.position = "absolute";
document.body.appendChild(robotImage);
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            robot.forward();
            break;
        case "ArrowDown":
            robot.backward();
            break;
        case "ArrowLeft":
            robot.left();
            break;
        case "ArrowRight":
            robot.right();
            break;
        default:
            break;
    }
    robotImage.style.left = `${robot.x}px`;
    robotImage.style.top = `${robot.y}px`;
    if (robot.orientation === "north") {
        robotImage.style.transform = `rotate(0deg)`;
    }
    else if (robot.orientation === "south") {
        robotImage.style.transform = `rotate(180deg)`;
    }
    else if (robot.orientation === "east") {
        robotImage.style.transform = `rotate(90deg)`;
    }
    else if (robot.orientation === "west") {
        robotImage.style.transform = `rotate(-90deg)`;
    }
});
