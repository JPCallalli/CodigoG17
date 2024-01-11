let precioMonitor = 400;
let cpu = 300;
let placaMadre = 250;
// ARITMETICAS
// suma +
let precioTotal = precioMonitor + cpu + placaMadre;

console.log("precio total: ", precioTotal);

let conServicio = 1000 + 50;

console.log("precio con servicio: ", conServicio);

// resta -

let resta = 500 - 100;
console.log("resta: ", resta);

// multiplicación *
let multiplicacion = 1000 * 1.18;
console.log("multiplicacion: ", multiplicacion);

// division /
let division = 1000 / 2;
console.log("division: ", division);

// modulo % - residuo
let modulo = 1000 % 300;
console.log("modulo: ", modulo);

// CONCATENACIÓN en JS se refiere a unir texto, palabras

let nombre = "Juan";
let apellido = "Perez";
let saludo = "Hola " + nombre + " " + apellido;
console.log("saludo: ", saludo);

let suma = "1" + 1;
console.log("suma: ", suma);
console.log("Tipo de dato de suma: ", typeof suma);
// tengamos cuidado con el tipo de dato
// hay una caracteristica de JS ECMAscript que me permite concatenar de manera mas segura
// `` Backtick, estas tambien son comillas
// Template String ${}, me permite dentro de un string con Backtricks poner codigo de JS
let otroSaludo = `Buen día ${nombre} ${apellido}
y mi edad es ${20 + 10}
`;

console.log("otroSaludo: ", otroSaludo);

// palabras reservadas son palabras que se guarda en JS para definir variables o estructuras dentro de su código
