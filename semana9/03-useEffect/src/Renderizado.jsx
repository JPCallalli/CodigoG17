import { useState } from "react"

export default function Renderizado() {
    const [cargando, setCargando] = useState(false);
   
    const paises = ["Perú","Chile","Colombia"];

    const postresPeruanos = [
        {
          id: 1,
          nombre: "Suspiro a la Limeña",
          descripcion: "Un dulce tradicional de Lima, hecho con manjar blanco y decorado con merengue.",
        },
        {
          id: 2,
          nombre: "Picarones",
          descripcion: "Anillos de masa frita, a base de camote y calabaza, bañados en miel de chancaca.",
        },
        {
          id: 3,
          nombre: "Mazamorra Morada",
          descripcion: "Un postre preparado con maíz morado, frutas secas y acompañado de arroz con leche.",
        }
    ];
    return(
        <>
            {/* renderizado condicional */}
            {cargando ? <p>Espere por favor...</p> : <p>Proceso terminado</p>}
            <button onClick={() => {setCargando(!cargando)}}> Cambiar</button>
            <hr />
            <ul>
                {/* renderizado de listas */}
            {paises.map((pais, indice) => (<li key={indice}>{pais}</li>))}
            </ul>
            <hr />
            <h2>Postres</h2>
            {postresPeruanos.map((item) => (
            <div key={item.id}>
                <h3>{item.nombre}</h3>
                <p>{item.descripcion}</p>
            </div>))}
        </>
    )
}

