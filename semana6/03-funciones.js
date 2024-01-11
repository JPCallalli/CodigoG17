// Podemos pensar en una funcion como en una maquina que va a agrupar ciertas instrucciones

// Montar bicicleta es un conjunto de instruciones, pero no pensamos en ese conjunto de instrucciones
// 1. colocate al costado de la bicicleta
// 2. sosten la bicicleta
// 3. levanta la pierna cercana a la bicicleta
// 4. pasa la pierna por encima de la bicicleta
// 5. pon el pie por el pedal


// 


// Calcular precio total
// function nombreDeLafuncion (parámetros) {}
function calcularPrecioTotal(precio){
    let margenGanancia = 1.15;
    let igv = 1.18;
    let precioTotal = precio * margenGanancia * igv;
    console.log("precioTotal: ", precioTotal);
}
// Llamo a la funcion por su nombre y de ser necesario le daré unos argumentos
// nombreFuncion(argumentos)
calcularPrecioTotal(100);

// Máquina
// varios parámetros, los seraramos por ","
function calcularViaje(pasajes, estadia, comida){
    console.log(pasajes)
    let precioTotal = pasajes + estadia + comida;
    // Me permite retornar el resultado de algo
    // va a cortar la ejecucion de mi funcion
    return precioTotal;
}

let resultado = calcularViaje(100, 50, 45);
console.log("resultado: ", resultado);


// Ambito global de la función, va a existir para todo el código
let bebida = "Chicha Morada";

function grupoPizza(){
    // ambito, lo que declaremos dentro de un bloque de código definido por {} solamente va a existir dentro de esa función
    let aperitivo = "panes al ajo";
    console.log(`voy a tomar algo de ${bebida}`);
    console.log(`voy a comer ${aperitivo}`)
}

grupoPizza();

// console.log(`yo tambien deseo ${aperitivo}`);

//Funciones en JS son Ciudadano de primera clase
// podemos pasar una funcion como argumento a otra funcion

// preparamos un arroz chaufa
function picarVegetales(){
    console.log("picando vegetales")
}

function granearArroz(){
    console.log("granear Arroz")
}

function freirPolloYHuevo(){
    console.log("freir Pollo Y Huevo")
}

function prepararArrozChaufa(paso1, paso2, paso3){
    paso1();
    paso2();
    paso3();
}

prepararArrozChaufa(picarVegetales, granearArroz, freirPolloYHuevo);

// Hoisting
// el hoisting es cuando las funciones y var se mueven al inicio del código
// Primero estoy llamando a la función
saludo();
// luego la estoy declarando
function saludo(){
    console.log("Hola");
}

// conocemos esta sintaxis
// function mombre(){}

// funcion flecha
// let nombrefuncion = (parametros) => {codigo a ejecutar}
// Funciones flecha no tienen Hoisting

// let despedida = (nombre) => {
//     console.log(`Bye ${nombre}`);
// }
let despedida = (nombre) => `Bye ${nombre}`;


console.log(despedida("Juan Renato"));
console.log(despedida("Jean Paul"));
console.log(despedida("2023"));