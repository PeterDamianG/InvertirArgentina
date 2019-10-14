//Importacion de React.
import React from 'react';
//Importaciones componentes Material-UI.
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

//Contenido del componente.
const ErrorPage = () => (
  <Paper>
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Typography component="h3" variant="h3">
        Lo sentimos ha ocurrido un error.
      </Typography>
      <Typography component="h6" variant="h6">
        Puedes pasarle el codigo mostrado en la consola, a alguién de la administración para resolverlo. O puedes reintentar hacer la última acción/operación hecha.
      </Typography>
      <Typography component="h6" variant="overline">
        Generalmente si eres dirigido aquí, ocurrio un error que no se ha podido manejar. Disculpanos las molestias.
      </Typography>
    </Grid>
  </Paper>
);

export default ErrorPage;