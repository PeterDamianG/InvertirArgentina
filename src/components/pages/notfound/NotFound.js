//Importacion de React.
import React from 'react';
//Importaciones componentes Material-UI.
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//Importacion de imagen.
import BackgroundLogo from './images/NotFound.svg';

//Asignacion de titulo al documento.
document.title = 'Invertir Argentina - Página No Encontrada';

//Contenido del componente.
const NotFound = () => (
  <Paper>
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Typography component="h2" variant="h2">
        Lo sentimos, la página búscada no existe.
    </Typography>
      <img src={BackgroundLogo} alt="ErrorLogo" />
      <Typography component="h4" variant="h4">
        Puedes seguir navegando en otras secciones, sin problemas.
    </Typography>
    </Grid>
  </Paper>
);

export default NotFound;