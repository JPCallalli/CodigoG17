// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUYve5Uc_BXCtpfCmE7FTnhx0io6gJO8Q",
  authDomain: "g17front-3301e.firebaseapp.com",
  projectId: "g17front-3301e",
  storageBucket: "g17front-3301e.appspot.com",
  messagingSenderId: "294509537988",
  appId: "1:294509537988:web:9f73dab6b5b62a39e7f791"
};

// Initialize Firebase
// Necesitamos una referencia a nuestra aplicaciónweb que registramos en firebase
// para eso tenemos a initializeApp, mediante la configuración va a poder conocer
// a que servidor se va a conectar
const app = initializeApp(firebaseConfig);
// getStorage me permite mendiante app, solamente va a acceder al modulo de storage
const storage = getStorage(app);

export {
    storage
}