//Importacion de React.
import { useState } from 'react';
//Importacion de Firebase, para obtener las URL de descarga.
import firebase from '../Firebase';

//Creacion de un Hook para su reutilizacion.
const GetURLHook = referencia => {
  //Obtencion de una URL basada en las referencias de FirebaseStorage.
  const [url, setUrl] = useState((async () => {
    const result = await firebase.storage().ref(referencia).getDownloadURL();
    setUrl(result);
  })());
  return url;
}

export default GetURLHook;