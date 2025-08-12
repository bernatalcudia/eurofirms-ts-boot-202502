import { useState } from "react"

import { Register } from "./view/Register.tsx"
import { Login } from "./view/Login.tsx"
import { Home } from "./view/Home.tsx"


function App() {
  const [view, setView] = useState("register")

  const handleLoginClicked = () => setView("login")

  const handleRegisterClicked = () => setView("register")

  const handleUserRegistered = () => {
    alert("User registered")

    setView("login")
  }

  const handleUserLoggedIn = () => setView("home")



  return <>
    {view === "register" && <Register onLoginClicked={handleLoginClicked} onUserRegistered={handleUserRegistered} />}

    {view === "login" && <Login onRegisterClicked={handleRegisterClicked} onUserLoggedIn={handleUserLoggedIn} />}

    {view === "home" && <Home />}
  </>
}

export default App
