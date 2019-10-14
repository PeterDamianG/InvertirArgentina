//Importacion de React.
import React, { Fragment, useState } from 'react';
//Importaciones componentes Material-UI.
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
//Importacion para el tooltip.
import Tooltip from '@material-ui/core/Tooltip';

//Constante de configuracion del estilo visual.
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  valido: {
    backgroundColor: '#fafafa',
    margin: theme.spacing(1)
  },
  invalido: {
    backgroundColor: '#b71c1c',
    margin: theme.spacing(1)
  }
}));
//Asignacion de titulo al documento.
document.title = 'Invertir Argentina - Configuración';

//Contenido del componente.
const Config = props => {
  //Constante de estado, para setear el nombre en la base de Firebase.
  const [nuevoNombre, setNuevoNombre] = React.useState('nick');
  //Constante de estado, para setear la contraseña en la base de Firebase.
  const [nuevoPass, setNuevoPass] = React.useState('');
  //Constante para setear las opciones visuales.
  const classes = useStyles();
  //Constante para manejar el mensaje dado al usuario, sobre errores.
  const [error, setError] = useState('');
  //Funcion para actualizar el nombre de perfil, en la base de Firebase.
  const actualizarPerfil = nombre => {
    if (nombre.length > 3 && nombre.length <= 15) {
      props.user.updateProfile({
        displayName: nombre,
      }).then(function () {
        setNuevoNombre(nombre);
        setError('El nombre de ha actualizado correctamente. Puedes recargar la página para ver la actualización de estado.');
      }).catch(function (error) {
        switch (error.code) {
          //Code auth/requires-recent-login.
          case 'auth/requires-recent-login':
            setError('Es necesario que relogues para validar tus credenciales. Antes de que puedas cambiar tu nick.');
            console.log(`Si estás viendo esto, puedes contactarte con alguién de la administración para tratar este error:   ${error.code} y ${error.message}    .Gracias por tu tiempo y disculpa los inconvenientes.`);
            break;
          default:
            window.location.assign('error');
            console.log(`Si estás viendo esto, puedes contactarte con alguién de la administración para tratar este error: ${error} Gracias por tu tiempo y disculpa los inconvenientes.`);
        }
      });
    };
  };
  //Funcion para actualizar la contraseña, en la base de Firebase.
  const actualizarPass = password => {
    if (password.length > 5 && password.length <= 15) {
      props.user.updatePassword(password).then(function () {
        window.location.assign('home');
      }).catch(error => {
        switch (error.code) {
          //Code auth/requires-recent-login.
          case 'auth/requires-recent-login':
            setError('Es necesario que relogues para validar tus credenciales. Antes de que puedas cambiar tu nick.');
            console.log(`Si estás viendo esto, puedes contactarte con alguién de la administración para tratar este error:   ${error.code} y ${error.message}    .Gracias por tu tiempo y disculpa los inconvenientes.`);
            break;
          //Code auth/weak-password.
          case 'auth/weak-password':
            setError('La nueva contraseña, no es lo suficientemente fuerte. Puedes probar con otra menos vulnerable.');
            console.log(`Si estás viendo esto, puedes contactarte con alguién de la administración para tratar este error:   ${error.code} y ${error.message}    .Gracias por tu tiempo y disculpa los inconvenientes.`);
            break;
          default:
            window.location.assign('error');
            console.log(`Si estás viendo esto, puedes contactarte con alguién de la administración para tratar este error: ${error} Gracias por tu tiempo y disculpa los inconvenientes.`);
        }
      });
    };
  };
  //Condicion de renderizado, dependiendo si se está logeado o no.
  if (props.user !== null) {
    return (
      <Container component="main" maxWidth="md">
        <Paper className={classes.paper}>
          {/*Inicio de la parte de la vista, relacionado al cambio de nick.*/}
          <Typography component="h1" variant="h4">
            Aquí puedes cambiar tu nombre de usuario:
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Tooltip title="El nuevo nombre que decidas, tiene que tener como mínimo 4 carácteres y como máximo 15 carácteres.">
                <TextField
                  autoComplete="cambiarnombre"
                  name="Cambiar Nombre"
                  variant="outlined"
                  fullWidth
                  id="cambiarnombre"
                  label="Nuevo Nombre"
                  autoFocus
                  onChange={e => setNuevoNombre(e.target.value)}
                  className={nuevoNombre.length > 3 && nuevoNombre.length <= 15 ? classes.valido : classes.invalido}
                />
              </Tooltip>
            </Grid>
            <Grid item xs={12} sm={6} container justify="center" alignItems="center">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => { actualizarPerfil(nuevoNombre) }}
              >
                Cambiar Nombre
              </Button>
            </Grid>
          </Grid>
          {/*Condicional para mostrar un error visual, en cambio de nick.*/}
          {nuevoNombre.length > 3 && nuevoNombre.length <= 15 ? 
          <Typography component="h3" variant="overline">
            Tú nuevo nombre de usuario será: {nuevoNombre}
          </Typography> :
            <Typography component="h3" variant="overline">
              Tú nuevo nombre tiene que tener entre 4 carácteres a 15 carácteres.
          </Typography>}
          {/*En el caso que el usuario se conecta a travez del provedor de password, que corresponde a email y contraseña, se le dara la opcion de poder cambiarlo. No se renderiza en caso de otros proveedores, como facebook, google u otros.*/}
          {props.user.providerData[0].providerId === 'password' &&
            <Fragment>
              <Typography component="h1" variant="h4">
                Cambiar Contraseña:
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Tooltip title="La nueva contraseña que decidas, tiene que tener como mínimo 6 carácteres y como máximo 15 carácteres.">
                    <TextField
                      autoComplete="cambiarcontra"
                      name="Cambiar Contra"
                      variant="outlined"
                      fullWidth
                      id="cambiarcontra"
                      label="Nueva Contraseña"
                      type="password"
                      autoFocus
                      onChange={e => setNuevoPass(e.target.value)}
                      className={nuevoPass.length > 5 && nuevoPass.length <= 15 ? classes.valido : classes.invalido}
                    />
                  </Tooltip>
                </Grid>
                <Grid item xs={12} sm={6} container justify="center" alignItems="center">
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => { actualizarPass(nuevoPass) }}
                  >
                    Cambiar Contraseña
              </Button>
                </Grid>
              </Grid>
              {/*Condicional para mostrar un error visual, en cambio de password.*/}
              {nuevoPass.length > 5 && nuevoPass.length <= 15 ? 
              <Typography component="h3" variant="overline">
                La nueva contraseña cumple los requerimientos.
              </Typography> :
              <Typography component="h3" variant="overline">
                Tú nueva contraseña tiene que tener entre 6 carácteres a 15 carácteres.
              </Typography>}
            </Fragment>}
        </Paper>
        <Typography component="h3" variant="h4" align="center" color="textPrimary">{error}</Typography>
      </Container>
    );
  } else {
  //Redireccionamiento que hacemos en caso de no estar logeado.
    window.location.assign('login');
    return null;
  };
};

export default Config;