import { useState } from 'react'
import './App.css'
import Input from './componentes/Input.jsx'
import Boton from './componentes/Boton.jsx'

function App() {
  const [nombre, setNombre] = useState("")
  const [password, setPassword] = useState("")

  return (
    <main className="App">
      <div className="card">
        <h1>Login</h1>
        <Input setNombre={setNombre}
          setPassword={setPassword}></Input>

             
        
        { nombre && password === "252525" && <Boton />}
      </div>
    </main>
  )
}

export default App
