console.log("Hola");
//todo lo que hemod estado utilizando
/**document
 * LocalStorage
 * console
 * 
 * existe dentro del objeto window
 * Pero no es necesario escribirlo
 */
window.console.log("que tal!");

console.log(window);
//Window nos va a dar acceso a diferentes API del navegador
/**
 * API DOM - me permite interactuar con el DOM
 * API de Geolocalización, me da al ubicación
 * API de Almacenamiento, LocalStorage
 * API Multimedia, accede a hardware como el microfono o la camara web
 */

window.navigator.geolocation.getCurrentPosition(function(posicion){
    console.log(posicion);
})