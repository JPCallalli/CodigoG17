import { useEffect, useState } from 'react'
import Renderizado from "./Renderizado"

export default function App() {
  const [contador, setContador] = useState(0)
  const [foco, setFoco] = useState(true)

  const verifyFoco = () => {
    if(foco){
      return "F"
    }else{
      return "OFF"
    }
  }

  // 1. tiene que etar al final y antes del return
  // useEffect(() =>{}, filtro), escuchar cambios de props o estado y cuando los haya ejecuta el código de la funcion que recibe
  useEffect(() => {
    console.log("cambio!!!", foco)
  }, [contador])

  useEffect(() => {
    console.log("focoooo", foco)
  }, [foco])

  useEffect(() => {
    console.log("Solo una Vez!!")
    // Peticiones :D
    setContador(1000)
  }, [])

  return (
   <>
    <div>{contador}</div>
    <div>{verifyFoco()}</div>
    <button onClick={() => {setContador(contador + 1)}}>Incrementar Contador</button>
    <button onClick={() => [setFoco(!foco)]}>Interruptor 👍</button>
    {/* Este componente es útil */}
    <Renderizado></Renderizado>
  </>
  )
}


