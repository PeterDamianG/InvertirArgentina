//Importacion de React y useState para uso de estados.
import React, { useState } from 'react';
//Importaciones componentes Material-UI.
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
//Importacion para el tooltip.
import Tooltip from '@material-ui/core/Tooltip';
//Importacion del sistema de enlazamiento de Reach-Router.
import { Link } from '@reach/router';
//Importacion de Firebase para uso de FireStore.
import firebase from '../../Firebase';

//Asignacion de titulo al documento.
document.title = 'Invertir Argentina - Registro';
//Constante de configuracion del estilo visual.
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  valido: {
    backgroundColor: '#fafafa',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  invalido: {
    backgroundColor: '#b71c1c',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  ocultar: {
    display: 'none'
  },
  mostrar: {
    display: 'contents'
  }
}));

//Contenido del componente.
const Registro = props => {
  //Asignacion de la configuracion del estilo visual.
  const classes = useStyles();
  //Constantes de estado, para enviar la consulta a Firebase Auth.
  const [email, setEmail] = useState('Email');
  const [password, setPassword] = useState('');
  //Constantes de estado, para ocultar elementos.
  const [ocultar, setOcultar] = useState(false);
  //Constante para manejar el mensaje dado al usuario, sobre errores.
  const [error, setError] = useState('');
  //Funcion para crear la cuenta con Firebase.
  const verificarConsulta = () => {
    //Variable para confirmar si esta todo correcto.
    let okey = true;
    //Primer bloque para comprobar inputs requeridos.
    if (!(email.length > 5 && email.length <= 24)) {
      setError('El email no cumple con los requisitos, tiene que tener más de 6 carácteres y no menos de 64.');
      okey = false;
    };
    if (!(password.length > 5 && password.length <= 24)) {
      setError('La contraseña no cumple con los requisitos, tiene que tener más de 6 carácteres y no menos de 24.');
      okey = false;
    };
    //Resultado en caso correcto.
    if (okey) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() =>{
        setOcultar(true);
        setError(`Se ha creado el usuario correctamente, puede ingresar con el siguiente mail: ${email} .`);
      })
      .catch(error => {
        //Manejo en caso de errores.
        switch (error.code) {
          case 'auth/email-already-in-use':
            setError(`El mail: ${email} . Se encuentra actualmente en uso.`);
            console.log(`Si estás viendo esto, puedes contactarte con alguién de la administración para tratar este error:   ${error.code} y ${error.message}    .Gracias por tu tiempo y disculpa los inconvenientes.`);
            break;
          case 'auth/invalid-email':
            setError(`El mail: ${email} . No tiene un formato valido.`);
            console.log(`Si estás viendo esto, puedes contactarte con alguién de la administración para tratar este error:   ${error.code} y ${error.message}    .Gracias por tu tiempo y disculpa los inconvenientes.`);
            break;
          case 'auth/operation-not-allowed':
            setError('Actualmente el sistema de registro no está habilitado. Disculpe las molestias.');
            console.log(`Si estás viendo esto, puedes contactarte con alguién de la administración para tratar este error:   ${error.code} y ${error.message}    .Gracias por tu tiempo y disculpa los inconvenientes.`);
            break;
          case 'auth/weak-password':
            setError('La contraseña, no es lo suficientemente fuerte. Por favor, intenta con otra menos vulnerable.');
            console.log(`Si estás viendo esto, puedes contactarte con alguién de la administración para tratar este error:   ${error.code} y ${error.message}    .Gracias por tu tiempo y disculpa los inconvenientes.`);
            break;
          default:
            window.location.assign('error');
            console.log(`Si estás viendo esto, puedes contactarte con alguién de la administración para tratar este error:   ${error.code} y ${error.message}    .Gracias por tu tiempo y disculpa los inconvenientes.`);
        };
      });
    };
  };
  //Renderizado condicional si se esta logeado o no.
  if (props.user === null) {
    return (
      <Container component="main" maxWidth="xs">
        <div className={ocultar ? classes.ocultar : classes.mostrar}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Registrarse
          </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {/*Input para el mail*/}
                <Tooltip title="Su mail no puede tener menos de 6 carácteres ni más de 64.">
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    className={email.length > 5 && email.length <= 64 ? classes.valido : classes.invalido}
                    onChange={e => setEmail(e.target.value)}
                  />
                </Tooltip>
              </Grid>
              <Grid item xs={12}>
                {/*Input para la contraseña*/}
                <Tooltip title="Su contraseña no puede tener menos de 6 carácteres ni más de 24.">
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="Contraseña"
                    autoComplete="password"
                    className={password.length > 5 && password.length <= 24 ? classes.valido : classes.invalido}
                    onChange={e => setPassword(e.target.value)}
                  />
                </Tooltip>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={verificarConsulta}
            >
              Registrarme
          </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/login">
                  ¿Ya tienes una cuenta? ¡Logueate!
              </Link>
              </Grid>
            </Grid>
          </Paper>
        </div>
        <Typography component="h3" variant="h4" align="center" color="textPrimary">{error}</Typography>
      </Container>
    );
  } else {
    //Redireccionamiento que hacemos en caso de estar logeado.
    window.location.assign('login');
    return null;
  };
};

export default Registro;