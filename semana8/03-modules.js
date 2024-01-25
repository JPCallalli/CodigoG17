// import {nombre} from "LaUbicacion"
import {suma, resta, multiplicacion, PI, otrosDatos, nombre} from "./modulosuma.js"

const resSuma = suma(10, 20);
const resResta = resta(10, 20);
const resMultiplicacion = multiplicacion(10, 20);

const root = document.getElementById('root');


root.innerHTML = `<h1>La suma es ${resSuma}</h1>`;

console.log({resResta, resMultiplicacion, PI, otrosDatos, nombre});