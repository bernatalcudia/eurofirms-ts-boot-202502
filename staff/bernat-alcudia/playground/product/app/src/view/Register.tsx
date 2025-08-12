import { logic } from "../logic"

interface RegisterFormElements extends HTMLFormControlsCollection {
    name: HTMLInputElement
    email: HTMLInputElement
    username: HTMLInputElement
    password: HTMLInputElement
}

interface RegisterForm extends HTMLFormElement {
    elements: RegisterFormElements
}

interface RegisterProps {
    onLoginClicked: () => void
    onUserRegistered: () => void
}



export const Register = ({ onLoginClicked, onUserRegistered }: RegisterProps) => {

    const handleSubmit = async (event: React.FormEvent<RegisterForm>) => {
        event.preventDefault()

        const form = event.currentTarget

        const name = form.elements.name.value
        const email = form.elements.email.value
        const username = form.elements.username.value
        const password = form.elements.password.value

        try {
            await logic.registerUser(name, email, username, password)

            onUserRegistered()
        } catch (error) {
            console.error(error)

            alert((error as Error).message)

        }
    }

    const handleLoginClicked = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()

        onLoginClicked()
    }

    return <>
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="name" />

            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="email" />

            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="username" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="password" />

            <button type="submit">Register</button>
        </form>

        <p>Already have an account? <a href="#" onClick={handleLoginClicked}>Login</a></p>
    </>
}