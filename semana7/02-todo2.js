/**
 * 1. tener una referencia a los elementos a utilizar en el DOM/HTML
 * 2. utilizar propiedades, métodos(funciones) que me permitan alcanzar las funcionalidades que deseo
 * 3. divertirse
 */

let inputTarea = document.getElementById('idTarea');
let btnAgregar = document.querySelector('#btnAgregar');
let ulTareas = document.getElementById('tareas');

console.log("inputTarea", inputTarea);
console.log("btnAgregar", btnAgregar);

let arrTareas = [];

let header = document.querySelector('header');
// console.log(typeof header.innerHTML);
/**
 * Historias de usuario
 * Como usuario quiero que la aplicación me permita escribir una tarea para poder listarla.
 */

function generarHTMLTareas(tareas){
    let htmlTareas = "";
    //vamos a dibujar las tareas dentro del ul
    for(let i = 0; i < tareas.length; i++){
        // console.log(arrTareas[i]);
        htmlTareas = htmlTareas + `<li>${tareas[i]}</li>`;
        // console.log(htmlTareas);
    }
    //al tener el HTML en formato string dentro de htmlTareas inner de ulTareas
    return htmlTareas;
}

function dibujarTareasAlInicio(){
    console.log("AL Inicio", arrTareas);
    //Obtengo las tareas del local storage
    let tareasObtenidas = localStorage.getItem("tareas")
    console.log("tareasObtenidas", tareasObtenidas);
    //Como estan en formato string las convierto otra vez a un arreglo
    let arrTareasObtenidas = JSON.parse(tareasObtenidas);
    console.log("arrTareasObtenidas", arrTareasObtenidas);
    //Igualando el valor leido del Local Storage en arrTareas
    //La manera de hacer esto no está de ltodo bien
    arrTareas = arrTareasObtenidas;
    console.log("Igualo", arrTareas);
    //al tenerlas en forma arreglo, las puedo pasar a generar HTMLTareas
    let htmlTareas = generarHTMLTareas(arrTareasObtenidas);
    ulTareas.innerHTML = htmlTareas;
}
dibujarTareasAlInicio();

//elemento.addEventListener("nombredelevento", function)
btnAgregar.addEventListener('click', function (){
    // console.log(inputTarea.value);
    arrTareas.push(inputTarea.value);
    let jsonTareas = JSON.stringify(arrTareas);
    console.log("jsonTareas",jsonTareas);
    localStorage.setItem("tareas", jsonTareas);
    // console.table(arrTareas);
    
    //VERSION 1
    /*
    let htmlTareas = "";
    //vamos a dibujar las tareas dentro del ul
    for(let i = 0; i < arrTareas.length; i++){
        // console.log(arrTareas[i]);
        htmlTareas = htmlTareas + `<li>${arrTareas[i]}</li>`;
        console.log(htmlTareas);
    }
    //al tener el HTML en formato string dentro de htmlTareas inner de ulTareas
    */
   //VERSION 2
    let htmlTareas = generarHTMLTareas(arrTareas);
    // console.log(htmlTareas);
    ulTareas.innerHTML = htmlTareas;
    //Limpiamos el value de input
    inputTarea.value = "";
})

//H2, como usuario deseo que al presionar "ENTER" se agregue la tarea a la lista de tareas

//A. cuando se dispara un evento podemos capturar el objeto del evento, la manera de capturarlo es indicarle un parámetro a la funcion dentro del addEventListener
//KeyUp a comparación de los eventos keyPress y ketDown obtiene
inputTarea.addEventListener("keyup", function(evento){
    // console.log(evento.key);
    //evento.target hace referencia al propio elemento desde donde se esta disparando
    // console.log(evento.target)
    if(evento.key === "Enter"){
        arrTareas.push(evento.target.value);
        let htmlTareas = generarHTMLTareas(arrTareas);
        ulTareas.innerHTML = htmlTareas;
        inputTarea.value = "";
    }
    
})