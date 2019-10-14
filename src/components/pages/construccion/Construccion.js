//Importacion de React.
import React from 'react';
//Importaciones componentes Material-UI.
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//Importacion de imagen.
import BackgroundLogo from './images/Construccion.svg';

//Contenido del componente.
const Construccion = () => (
  <Paper>
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Typography component="h2" variant="h2">
        Lo sentimos, la sección buscada se encuentra en construcción.
    </Typography>
      <img src={BackgroundLogo} alt="ErrorLogo" />
      <Typography component="h4" variant="h4">
        Puedes seguir navegando en otras secciones, sin problemas.
    </Typography>
    </Grid>
  </Paper>
);

export default Construccion;