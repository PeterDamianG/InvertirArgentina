//Importacion de React.
import React from 'react';
//Importaciones para estilo visual de Material-UI.
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//Importacion del svg animado para simular un loading.
import LoadingLogo from './images/Loading.svg';

//Contenido del componente.
const Loading = (props) => (
  <React.Fragment>
    {/*Centrado y grilla del texto a mostrar.*/}
    <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
    >
      <Typography variant={props.variant}>
        {props.text}
      </Typography>
    </Grid>
    {/*SVG de carga.*/}
    <img src={LoadingLogo} alt="LoadingLogo Fail"/>
  </React.Fragment>
);

export default Loading;