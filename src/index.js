//Importacion de React.
import React from 'react';
import ReactDOM from 'react-dom';
//Importacion de un resetcss provisto por MaterialUI.
import CssBaseline from '@material-ui/core/CssBaseline';
//Importacion de todo el contenido de la aplicacion.
import App from './components/App';
//Importacion de una base en css, configurada por nosotros para detalles.
import './BaseCss.css';

//Renderizado de la base del DOM y la APP.
ReactDOM.render(
  <React.Fragment>
    {/*Base de estilo recomendado por Material.UI. Una especie de Reset.css*/}
    <CssBaseline />
    {/*Llamada a la app.*/}
    <App />
  </React.Fragment>,
//Elemento principal donde va a ser llamada la app.
document.getElementById('root'));