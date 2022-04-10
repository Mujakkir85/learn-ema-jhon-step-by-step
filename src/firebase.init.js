// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdikPBKceTp0EmbvHiN3QjjiDZpdsBhuA",
    authDomain: "ema-jhon-simple-75c80.firebaseapp.com",
    projectId: "ema-jhon-simple-75c80",
    storageBucket: "ema-jhon-simple-75c80.appspot.com",
    messagingSenderId: "329771042001",
    appId: "1:329771042001:web:ee2017034a222f448e71f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;