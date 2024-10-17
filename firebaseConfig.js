// firebaseConfig.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js';
import {
	getFirestore,
	collection,
	addDoc,
	getDocs,
} from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js';

// Configuración de Firebase obtenida desde Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyDPBdDOQZuKuLAx7CsDibNs6OMb-AIT-Xw",
    authDomain: "crudfirebase1-3cd85.firebaseapp.com",
    projectId: "crudfirebase1-3cd85",
    storageBucket: "crudfirebase1-3cd85.appspot.com",
    messagingSenderId: "331264587993",
    appId: "1:331264587993:web:ef972d7dd5415f2079a6c8",
    measurementId: "G-QS6MTZVP73"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);