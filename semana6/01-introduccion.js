console.log("Hola desde el archivo JS");

// Estructuras de datos
// Variables
// let nombreVariable = valor
let nombre = "Juan";
// nomenclatura camelCase 
let precioMonitor = 400;
// Tipos de datos
// let precioSmartphone = "500";
let precioSmartphone = 500;

console.log(precioSmartphone);;
// typeof me dice el tio de dato de algo
console.log(typeof precioSmartphone);

let edad = 30;
// Tip para cuando hagan console.log
// console.log me permite imprimir por separado varias cosas, es muy útil para cuando tenemos varios console.log
console.log("Edad", edad);
console.log("Tipo Edad: ", typeof edad);

// JS es sensible a las mayusculas y minusculas, Apellido no es igual a apellido
let apellido = "Fernandez";
console.log("apellido", apellido);
console.log("Tipo apellido: ", typeof apellido);

// boolean V/F
let meQuiere = true;
console.log("meQuiere", meQuiere);
console.log("Tipo meQuiere: ", typeof meQuiere);

// null - vacio nada
let noHayNada = null;
console.log("noHayNada", noHayNada);
console.log("Tipo noHayNada: ", typeof noHayNada);

// undefined - No Definido, no tiene valor
let porDefinir;
console.log("porDefinir", porDefinir);
console.log("Tipo porDefinir: ", typeof porDefinir);

// truthy - falsy:
// NO utilicen caracteres especiales para variablea como ´ " ñ
// JS es muy flexible, no es necesario especificar el tipo de dato, el valor asignado es el que da el tipo de dato
let anio = 2023;

anio = 2024;

console.log("anio: ", anio);
// en JS cambiar de valor a una variable es muy sencillo, pero al cambiarlo es posible cambiar el tipo de dato
anio = "DOS MIL VEINTICUATRO"
console.log("otra vez anio: ", anio);