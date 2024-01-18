console.log("Hola");

//API - Aplication Programming Interface
//Set de herramientas que me permiten conversar, dar instruciones al navegador
//Auto, timon, los pedales, palanca de cambios
//seria la API del Auto

//document es un objeto que representa mi documento HTML
const miBoton = document.getElementById("btn");

console.log(miBoton);

miBoton.textContent = "Guardar!!";

/*
    Si yo deseo interactuar con el DOM(HTML) 
    1. voy a necesitar referencias
    1.1 getElementsById(id del elemento)
    1.2 querySelector (selector como si fuera de CSS)
    ej. #nombreID . nombreClase nombreetiqueta
    Va a obtener el primer elemento qu coinida
*/

console.log("Document", document);

const miHeader = document.querySelector("header");

console.log("miheader",miHeader);

//el innerText es una propiedad que hace referencia al texto dentro de un elemento
// innerHTML hace referencia al HTML dentro del elemento
miHeader.innerHTML = `
    <div>
        <h1>
            Document Object Model
        </h1>
    </div>
`;

//Propiedades como el color o padding que son de una sola palabra no reciben modificación
// propiedades de dos o mas palabras usarán la sintaxis de camelCase ej.: font-family sera fontFamily
miHeader.style.color = "blue";
miHeader.style.padding = "20px";
miHeader.style.backgroundColor = "peru";
miHeader.style.fontFamily = "Areial, sans-serif";
//Linter, ESlint, herramientas para tener el codigo bonito ordenado
//dinamismo
// miBoton.addEventListener("click", function(){
//     miHeader.style.backgroundColor = "red"
// })

/**
 * El selector querySelectorAll, me permite obtener una lista de nodos (elementos html) y a partir de ahi puedo iterar en esos elementos con métodos como forEach
 */

const itemsLista = document.querySelectorAll('.listItem');

console.log("itemsLista", itemsLista)

//funtion callback, estamos pasando una funcion como parámetro
itemsLista.forEach(function(item){
    console.log("LI - ", item)
    item.style.color = "steelblue";
    item.style.fontFamily = "Courier"
})

//Eventos
//para poder escuchar eventos vamos a necesitar:
//TODOS los elementos sea un boton, un div, un input can a tener eventos
//elemeto.addEventListener("nombreDelEvento", funcion)
console.log("Listener", miBoton.addEventListener)

let miInput = document.getElementById('inputEmail');

console.log("inputEmail", miInput);
//Si yo deseo interactuar con el HTML
//1. voy a necesitar referencias, cvariables a los elementos que estén presentes
// 2. a aprtir de ahi puedo utilizar propiedades, metódos
// ej. innerHTML, style.color, addEventListener
// 3. según sea método o propiedad la puedo utilizar para agregar dinamismo a mi app
miBoton.addEventListener("click", function(){
    //alert abre una ventana con un mensaje
    // alert("Hiciste click en el botón")
    console.log("Hola!")
    console.log("inputEmail", miInput.value);
    //Todo input va a tener uha propiedad que se llama values
    if(miInput.value.includes(".com")){
        console.log("Existeeeee!!!!")
    }else{
        console.log("No hayyyyyyyyyyyyy")
    }
    //toggle es como un interruptor
    //si una clase esta dentro de un elemento, la remueve
    //si la clase no esta dentro del elemento, la agrega
    miInput.classList.toggle("input-class")
})

let img = document.querySelector('#imagen');

console.log(img.getAttribute("src"));
//SetAttribute recibe dos parametros
img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3bQXtbydBYVvEcmmPfp1j0OGR37bbF7qlVYQ7PNlL-Q&s");

img.setAttribute("alt", "Carro Moderno");

let partners = document.querySelector(".partners");

console.log("Partners",partners)

partners.classList.add("importante");

let noticias = document.getElementById("idNoticias");

noticias.classList.remove("noticias");
console.log("Noticias",noticias);