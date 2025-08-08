import { Logic } from "./types"
import { registerUser } from "./registerUser"
import { loginUser } from "./loginUser"
import { getUser } from "./getUser"

export const logic: Logic = {
    registerUser,
    loginUser,
    getUser
}
