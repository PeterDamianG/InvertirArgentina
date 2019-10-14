//Firebase App el SDK nucleo. Siempre es requerido primero.
import * as firebase from "firebase/app";
//Importamos los productos que usaremos de Firebase.
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

//Configuracion del proyecto.
const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};


//Inicializacion de Firebase y Analytics.
firebase.initializeApp(config);
//firebase.analytics();

export default firebase;