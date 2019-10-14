//Importacion de React.
import React, { useState, useEffect } from 'react';
//Importacion de MaterialUI, para el estilo visual.
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
//Importacion de un componente pre-configurado de FirebaseAuth.
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
//Importacion de Firebase.
import firebase from '../../Firebase';

//Este componente genera error con las reglas del hook, es necesario pasarlo como anonimo para evitar eso.
export default () => {
  //Estado local para asignacion y comprobacion si esta loggeado. Se podria usar tranquilamente el contexto, pero como ya pasamos Firebase, usamos eso.
  let [isSignedIn, useIsSignedIn] = useState(false);

  // Configuracion de FirebaseUIAuth.
  const uiConfig = {
    //Nombre del parametro de consulta para modo.
    queryParameterForWidgetMode: 'mode',
    //Nombre del parametro de consulta, para logeo exitoso url.
    queryParameterForSignInSuccessUrl: 'signInSuccessUrl',
    //Opcion de flujo para ventana popup o redireccion.
    signInFlow: 'popup',
    //Redirecion despues de logeo exitoso. Alternativamente podemos pasarle una url, string literal o callback.
    signInSuccessUrl: '/home',
    //Los providers que le pasaremos para usar.
    signInOptions: [
      //Provider de email y password, usando el sistema de registro.
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        //Requerimos que se escriba el nombre de usuario.
        requireDisplayName: true
      },
      //Provider de Google.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //Provider de Facebook, con seteo de opciones.
      {
        provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        scopes: [
          'public_profile',
          'email',
          'user_friends'
        ],
        customParameters: {
          //Forzamos a que se reautentique.
          auth_type: 'reauthenticate'
        }
      },
      //Provider de Twitter.
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      //Provider de GitHub.
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
    //Colocar en verdadero si tu tiene solo un Provider general como Google y tu quieres que inmediatamente se redireccione y muestre ese Provider. Para que esto tome efecto, la opcion signInFlow, necesita estar en 'redirect'.
    immediateFederatedRedirect: false,
    //Opcion para colocar la url, string literal o funcion callback para mostrar los terminos de servicios.
    tosUrl: 'termsofservice',
    //Opcion para colocar la url, string literal o funcion callback para mostrar la politica y privicidad.
    privacyPolicyUrl: 'privacypolicy',
    callbacks: {
      //Funcion de redireccion en caso correcto de autenticacion.
      signInSuccessWithAuthResult: () => window.location.assign('home')
    }
  };
  //Constante donde se registra un observador, para revisar el estado del usuario en cuanto a su autenticacion.
  const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => (useIsSignedIn(isSignedIn = !!user)));
  //Efecto para manejar el observador en cada renderizado.
  useEffect(
    () => { unregisterAuthObserver() }
  );
  //Renderizado condicional, depende si se esta logeado o no.
  if (!isSignedIn) {
    //Renderizado en caso de no estar logeado.
    return (
      <Paper>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Typography variant="h3" component="h3">
            Invertir en Argentina
          </Typography>
          <Typography variant="h4" component="h4">
            Por favor, inicia sesión:
          </Typography>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </Grid>
      </Paper>
    );
  }
  //Renderizado en caso de estar logeado. Aca solo se puede llegar, escribiendo la url manualmente o a travez del historialpush.
  return (
    <Paper>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h3" component="h3">
          Invertir en Argentina
        </Typography>
        <Typography variant="h4" component="h4">
          ¡Ya has iniciado sesión correctamente!
      </Typography>
        <Button color="primary" onClick={() => firebase.auth().signOut()}>Des-logearse</Button>
      </Grid>
    </Paper>
  );
};