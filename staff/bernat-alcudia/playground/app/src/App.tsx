import { useState } from "react"

import { Register } from "./view/Register.tsx"
import { Login } from "./view/Login.tsx"


function App() {
  const [view, setView] = useState("login")

  return <>
    {view === "register" && <Register />}

    {view === "login" && <Login />}
  </>
}

export default App
