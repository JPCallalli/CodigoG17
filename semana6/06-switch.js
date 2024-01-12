let opcion = 2;
let pelicula = "Romántica";

// if (){
//     opcion = 2;
// }else if(){
//     opcion = 3;
// }



// switch (La expresion a evaluar)

switch (opcion){
    case 1:
        // Código a ejecutar si la extensión es verdadera
        console.log("Elegiste la opcion 1 personal");
        break;
    case 2:
        console.log("Elegiste la opcion 2 duo");
        break;
    case 3:
        console.log("Elegiste la opcion 3 famliar");
        break;
    default: //else 
        console.log("Elegiste una opcion no valida");
        break;
}

// Deseo evaluar una expresion mas compleja

switch (true){
    case (pelicula === "Comedia" && opcion === 1):
        console.log("Elegiste la opcion 1 personal con la mascara");
        break;
    case (pelicula === "Ciencia Ficción" && opcion ===1):
        console.log("Elegiste la opcion 1 personal con la interstellar");
        break;
    case (pelicula === "Romántica" && opcion === 2):
        console.log("Elegiste la opcion 2 duo con la bella y la bestia");
        break
    default:
        console.log("Elegiste una opcion no valida");
        break;        
}

// switch(true) {
//     case (pelicula === "Comedia" && opcion === 1):
//         console.log("Elegiste la opcion 1 personal con La máscara");
//         break;
//     case (pelicula === "Ciencia Ficción" && opcion === 1):
//         console.log("Elegiste la opcion 1 personal con Interstellar");
//         break;
//     case (pelicula === "Romántica" && opcion === 2):
//         console.log("Elegiste la opcion 2 duo con La bella y la bestia");
//         break;
//     default:
//         console.log("Elegiste una opción inválida");
//         break;
// }