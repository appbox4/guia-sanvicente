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
  admins: ["TU_CORREO@gmail.com"],

  // Pega aquí los datos de tu app web de Firebase (ver GUIA.md, paso 3).
  // Mientras estén vacíos, la guía funciona en "modo de prueba".
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  }
};
