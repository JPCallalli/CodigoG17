// Primero librerías
import { useState } from "react"
// Coponentes y demás
import Form from "./components/Form"
import Report from "./components/Report"

export default function App() {
  // en un estado siempre es recomendable, setear el tipo de valor, "", 0, [], null
  const [nombre, setNombre] = useState("Shrek");
  return (
    <>
      <h1>App Component</h1>      
      <Form nombre={nombre} setNombre={setNombre}/>
      <Report nombre={nombre} />
    </>
  )
}