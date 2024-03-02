// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAih1acPolITa2dBATVo7BfwSnTcQkI5mA",
  authDomain: "firechat-529d8.firebaseapp.com",
  projectId: "firechat-529d8",
  storageBucket: "firechat-529d8.appspot.com",
  messagingSenderId: "23124543546",
  appId: "1:23124543546:web:26d63ad9bd6bf298438d03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { 
    auth,
    db 
}