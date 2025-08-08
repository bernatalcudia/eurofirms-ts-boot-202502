import { Logic } from "./types"
import { registerUser } from "./registerUser"
import { loginUser } from "./loginUser"

export const logic: Logic = {
    registerUser,
    loginUser
}
