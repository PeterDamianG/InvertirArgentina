//Importacion de React y Contexto.
import React, { useContext } from 'react';
//Importacion de la configuracion e inicializacion de Firebase.
import firebase from './Firebase';

//Exportacion de la variable base de usuario en el contexto.
export const userContext = React.createContext({
  user: null
});

//Exportacion de una funcion para retornar los valores del contexto.
export const useSession = () => {
  const { user } = useContext(userContext);
  return user;
};

//Exportacion de un hook para setear la var de contexto al propio contexto.
export const useAuth = () => {
  //Variables de estado.
  const [state, setState] = React.useState(() => { 
    const user = firebase.auth().currentUser; 
    return { initializing: !user, user, } 
  });
  //Funcion para cambiar el estado.
  const onChange = (user) => {
    setState({ initializing: false, user });
  };
  //Usamos efectos de react para mantener actualizados los cambios.
  React.useEffect(() => {
    //Escuchador para la autenticacion de los cambios de estado.
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange);
    //Desuscripcion del escuchador cuando se desmonta el render.
    return () => unsubscribe();
  }, []);
  //Retornamos el estado completo.
  return state;
};