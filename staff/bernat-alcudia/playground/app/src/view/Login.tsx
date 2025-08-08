import { logic } from "../logic"

interface LoginFormElements extends HTMLFormControlsCollection {
    username: HTMLInputElement
    password: HTMLInputElement
}

interface LoginForm extends HTMLFormElement {
    elements: LoginFormElements
}


export const Login = () => {

    const handleSubmit = (event: React.FormEvent<LoginForm>) => {
        event.preventDefault()

        const form = event.currentTarget

        const username = form.elements.username.value
        const password = form.elements.password.value

        try {
            logic.loginUser(username, password)

            alert("Login successful")
        } catch (error) {
            console.error(error)

            alert((error as Error).message)

        }
    }

    return <>
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="username" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="password" />

            <button type="submit">Login</button>

        </form>
    </>
}