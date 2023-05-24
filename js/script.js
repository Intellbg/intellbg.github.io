import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyDwEbzvtre9wyqknUcr903h3FYP1PoO8Io",
  authDomain: "onepiecetournaments-f9462.firebaseapp.com",
  projectId: "onepiecetournaments-f9462",
  storageBucket: "onepiecetournaments-f9462.appspot.com",
  messagingSenderId: "1038040975388",
  appId: "1:1038040975388:web:8d113a13bf64ad037537d9",
  measurementId: "G-4TCHMTWSTC",
};
const app = initializeApp(firebaseConfig);

const auth = getAuth();
document
  .getElementById("boton_registrar")
  .addEventListener("click", () => {
    const mail = document.getElementById("email").value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
      alert("Ingrese un correo valido");
      return;
    }
    const pw1 = document.getElementById("pw1").value;
    const pw2 = document.getElementById("pw2").value;
    if (pw1.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres");
      return;
    }
    if (pw1 !== pw1) {
      alert("Contraseñas no coinciden");
      return;
    }
    if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d)(.{8,})$/.test(pw1)) {
      alert(
        "La contraseña debe contener al menos una mayuscula, un número y un caracter especial"
      );
      return;
    }
    createUserWithEmailAndPassword(auth, mail, pw1)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });
      document.getElementById("email").value=''
      document.getElementById("pw1").value=''
      document.getElementById("pw2").value=''
      alert("User registrado")
  });