/* ============================================================
   CONFIGURACIÓN DE LA GUÍA
   Es el único archivo que tienes que editar.
   ============================================================ */
window.GUIA_CONFIG = {
  pueblo: "San Vicente de Chucurí",
  departamento: "Santander",
  centro: [6.8810, -73.4100],   // centro del mapa
  zoom: 15,

  // Logo del pueblo que sale grande arriba (sube la imagen con este nombre)
  logo: "logo.png",

  // Tu correo de Google (el administrador que aprueba lugares).
  // Debe ser el mismo que pongas en las reglas de Firestore.
  admins: ["appbox4@gmail.com"],

  // Pega aquí los datos de tu app web de Firebase (ver GUIA.md, paso 3).
  // Mientras estén vacíos, la guía funciona en "modo de prueba".
  firebase: {
    apiKey: "AIzaSyBJ1c5JrPAqw9Jc8Tmt0nR3M0bBg-3YHAo",
    authDomain: "sanvicente-8afc6.firebaseapp.com",
    projectId: "sanvicente-8afc6",
    storageBucket: "sanvicente-8afc6.firebasestorage.app",
    messagingSenderId: "226429269786",
    appId: "1:226429269786:web:0b3e38fc7eb5a4910ddea3"
  }
};
