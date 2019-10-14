//Importacion de React.
import React, { useState } from 'react';
//Importaciones componentes Material-UI.
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
//Importacion para el tooltip.
import Tooltip from '@material-ui/core/Tooltip';
//Importacion del sistema de enlazamiento de Reach-Router.
import { Link } from '@reach/router';
//Importacion de imagen de fondo.
import BackgroundLogo from './images/BackgroundContacto.svg';
//Importacion de Firebase para uso de FireStore.
import firebase from '../../Firebase';

//Constante para uso de la base de datos.
const db = firebase.firestore();
//Asignacion de titulo al documento.
document.title = "Invertir Argentina - Contacto";
//Constante de configuracion del estilo visual.
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
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
  invalidop: {
    backgroundColor: '#f57c00',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  background: {
    backgroundImage: `url(${BackgroundLogo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },  
  ocultar: {
    display: 'none'
  },
  mostrar: {
    display: 'contents'
  }
}));
//Funcion para validar el mail.
const validarEmail = (mail) => {
  var rex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return rex.test(String(mail).trim().toLowerCase());
};

//Contenido del componente.
const Contacto = props => {
  //Asignacion de la configuracion del estilo visual.
  const classes = useStyles();
  //Constantes de estado, para enviar la consulta a FireStorage.
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [mail, setMail] = useState('');
  const [telefono, setTelefono] = useState('1566666666');
  const [dirigido, setDirigido] = useState('dirigido a');
  const [consulta, setConsulta] = useState('');
  //Constantes de estado, para ocultar elementos.
  const [ocultar, setOcultar] = useState(false);
  //Constante para manejar el mensaje dado al usuario, sobre errores.
  const [error, setError] = useState('');
  //Funcion para validar el contenido antes de enviar.
  const verificarConsulta = () => {
    //Variable para confirmar si esta todo correcto.
    let okey = true;
    //Primer bloque para comprobar inputs requeridos.
    if (!(nombre.length > 3 && nombre.length <= 15)) {
      setError('El nombre no cumple con los requisitos, tiene que tener más de 4 carácteres y no menos de 15.');
      okey = false;
    };
    if (!(apellido.length > 3 && apellido.length <= 15)) {
      setError('El apellido no cumple con los requisitos, tiene que tener más de 4 carácteres y no menos de 15.');
      okey = false;
    };
    if (!(mail.length > 5 && mail.length <= 64)) {
      setError('El mail no cumple con los requisitos, tiene que tener más de 6 carácteres y no menos de 64.');
      okey = false;
    };
    if (!(consulta.length > 11 && consulta.length <= 512)) {
      setError('La consulta no cumple con los requisitos, tiene que tener más de 12 carácteres y no menos de 512.');
      okey = false;
    };
    //Resultado en caso correcto.
    if (okey) {
      db.collection("consultas").add({
      nombre: nombre,
      apellido: apellido,
      mail: !validarEmail(mail) ? mail : 'Invalido',
      telefono: telefono.length > 5 && telefono.length <= 24 ? telefono : 'Invalido',
      dirigido: dirigido.length > 5 && dirigido.length <= 24 ? dirigido : 'Invalido',
      consulta: consulta,
      usuariodisplay: props.user.displayName,
      usuariomail: props.user.email,
      usuarioemailverified: props.user.emailVerified,
      userphone: props.user.phoneNumber
      })
      .then(() => {
        setError('La consulta se ha hecho correctamente. Gracias por tu tiempo.');
        setOcultar(true);
      })
      .catch(error => {
        //Manejo en caso de errores.
        switch (error.number) {
          //Code CANCELLED.
          case 1:
            setError('La operación fue cancelada.');
            console.log(`Si estás viendo esto, puedes contactarte con alguién de la administración para tratar este error:   ${error.code} y ${error.message}    .Gracias por tu tiempo y disculpa los inconvenientes.`);
            break;
          //Code UNKNOWN.
          case 2:
            setError('Un error desconocido a ocurrido. Consulta con la administración para más información.');
            console.log(`Si estás viendo esto, puedes contactarte con alguién de la administración para tratar este error:   ${error.code} y ${error.message}    .Gracias por tu tiempo y disculpa los inconvenientes.`);
            break;
          //Code INVALID_ARGUMENT.
          case 3:
            setError('Los argumentos enviados, fueron invalidos. Esto corresponde a datos incorrectos enviados hacia el servidor.');
            console.log(`Si estás viendo esto, puedes contactarte con alguién de la administración para tratar este error:   ${error.code} y ${error.message}    .Gracias por tu tiempo y disculpa los inconvenientes.`);
            break;
          //Code DEADLINE_EXCEEDED.
          case 4:
            setError('Se tardo demasiado en realizar la operación y el retraso a causado una falla.');
            console.log(`Si estás viendo esto, puedes contactarte con alguién de la administración para tratar este error:   ${error.code} y ${error.message}    .Gracias por tu tiempo y disculpa los inconvenientes.`);
            break;
          //Code NOT_FOUND.
          case 5:
            setError('Alguna petición no ha funcionado.');
            console.log(`Si estás viendo esto, puedes contactarte con alguién de la administración para tratar este error:   ${error.code} y ${error.message}    .Gracias por tu tiempo y disculpa los inconvenientes.`);
            break;
          //Code ALREADY_EXISTS.
          case 6:
            setError('El archivo/petición ya existe, no se puede reemplazar.');
            console.log(`Si estás viendo esto, puedes contactarte con alguién de la administración para tratar este error:   ${error.code} y ${error.message}    .Gracias por tu tiempo y disculpa los inconvenientes.`);
            break;
          //Code PERMISSION_DENIED.
          case 7:
            setError('No tienes suficientes permisos para realizar está operación, revisa estar autenticado. En caso contrario consulta con la administración.');
            console.log(`Si estás viendo esto, puedes contactarte con alguién de la administración para tratar este error:   ${error.code} y ${error.message}    .Gracias por tu tiempo y disculpa los inconvenientes.`);
            break;
          //Code UNAUTHENTICATED.
          case 16:
            setError('Las credenciales de autenticación, no son válidas.');
            console.log(`Si estás viendo esto, puedes contactarte con alguién de la administración para tratar este error:   ${error.code} y ${error.message}    .Gracias por tu tiempo y disculpa los inconvenientes.`);
            break;
          //Code RESOURCE_EXHAUSTED.
          case 8:
            setError('Algunos recursos se encuentran en sobreexplotados, puede ser por falta de espacio o que sobrepaso la couta de servicio.');
            console.log(`Si estás viendo esto, puedes contactarte con alguién de la administración para tratar este error:   ${error.code} y ${error.message}    .Gracias por tu tiempo y disculpa los inconvenientes.`);
            break;
          //Code FAILED_PRECONDITION.
          case 9:
            setError('La operación fue rechazada, porque no se realizo desde un ambiente o lugar correcto, requerido para si ejecución.');
            console.log(`Si estás viendo esto, puedes contactarte con alguién de la administración para tratar este error:   ${error.code} y ${error.message}    .Gracias por tu tiempo y disculpa los inconvenientes.`);
            break;
          //Code ABORTED.
          case 10:
            setError('La operación fue abortada.');
            console.log(`Si estás viendo esto, puedes contactarte con alguién de la administración para tratar este error:   ${error.code} y ${error.message}    .Gracias por tu tiempo y disculpa los inconvenientes.`);
            break;   
          //Code OUT_OF_RANGE.
          case 11:
            setError('La operación está fuera del rango. Alguno de los parametros a sobrepasado, el rango de manejo del sistema de bytes.');
            console.log(`Si estás viendo esto, puedes contactarte con alguién de la administración para tratar este error:   ${error.code} y ${error.message}    .Gracias por tu tiempo y disculpa los inconvenientes.`);
            break;   
          //Code UNIMPLEMENTED.
          case 12:
            setError('La operación no esta implementada, soportada o permitida.');
            console.log(`Si estás viendo esto, puedes contactarte con alguién de la administración para tratar este error:   ${error.code} y ${error.message}    .Gracias por tu tiempo y disculpa los inconvenientes.`);
            break;   
          //Code INTERNAL.
          case 13:
            setError('A ocurrido un error interno. Este error es grave, contacta con la administración inmediatamente.');
            console.log(`Si estás viendo esto, puedes contactarte con alguién de la administración para tratar este error:   ${error.code} y ${error.message}    .Gracias por tu tiempo y disculpa los inconvenientes.`);
            break;
          //Code UNAVAILABLE.
          case 14:
            setError('El servicio actualmente se encuentra no disponible.');
            console.log(`Si estás viendo esto, puedes contactarte con alguién de la administración para tratar este error:   ${error.code} y ${error.message}    .Gracias por tu tiempo y disculpa los inconvenientes.`);
            break;     
          //Code DATA_LOSS.
          case 15:
            setError('Datos perdidos o corruptos, inrecuperables.');
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
    //Renderizado del componente sin login.
    return (
      <Paper>
        <Container maxWidth="sm" className={classes.background}>
          <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
            Contacto
          </Typography>
          <Typography component="h4" variant="h5" align="center" color="textSecondary" gutterBottom>
            Para consultarnos, aquello que usted desee relacionado a la página y/o el desarrollo de la misma puede recurrir a estos e-mail:
          </Typography>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <a href='mailto:InvertirArgentina@Gmail.com'>
                <Button variant="contained" color="primary">
                  Invertir Argentina
                </Button>
              </a>
            </Grid>
            <Grid item>
              <a href='mailto:PeterDamianG@Gmail.com'>
                <Button variant="outlined" color="primary">
                  Peter DG
                </Button>
              </a>
            </Grid>
          </Grid>
          <Typography variant="h6" align="center" color="textPrimary" paragraph>
            Para contactarnos, por asuntos más especificos, deberás rellenar un formulario. Estando logeado:
          </Typography>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Link to="/login">
                <Button variant="contained" color="primary">
                  Login
                </Button>
              </Link>
            </Grid>
          </Grid>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
            Disculpe las molestias.
          </Typography>
        </Container>
      </Paper>
    );
  } else {
    //Renderizado del componente con login.
    return (
      <Container maxWidth="md">
        <Paper className={ocultar ? classes.ocultar : classes.mostrar}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Contacto
          </Typography>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Typography component="h3" variant="h4" align="center" color="textPrimary">
              Puedes contactarnos para preguntarnos cualquier cosa relacionada a la página y/o su desarrollo.
          </Typography>
            <Typography component="h3" variant="h4" align="center" color="textSecondary">
              Dependiendo la complejidad y cantidad de temas, relacionados con el asunto que nos consulte. Será el tiempo que tardaremos en contestarle.
          </Typography>
            <Typography component="h3" variant="h4" align="center" color="textPrimary">
              Complete el siguiente formulario para ponerse en contacto con nosotros:
          </Typography>
          </Grid>
        </Paper>
        <Paper className={ocultar ? classes.ocultar : classes.mostrar}>
          <form className={classes.container} noValidate autoComplete="off">
            {/*Input para el nombre*/}
            <Tooltip title="Su nombre no puede tener menos de 4 carácteres ni más de 15.">
              <TextField
                id="nombre-input"
                label="Nombre"
                className={nombre.length > 3 && nombre.length <= 15 ? classes.valido : classes.invalido}
                name="nombre"
                margin="normal"
                variant="outlined"
                onChange={e => setNombre(e.target.value)}
              />
            </Tooltip>
            {/*Input para el apellido*/}
            <Tooltip title="Su apellido no puede tener menos de 4 carácteres ni más de 15.">
              <TextField
                id="apellido-input"
                label="Apellido"
                className={apellido.length > 3 && apellido.length <= 15 ? classes.valido : classes.invalido}
                name="apellido"
                margin="normal"
                variant="outlined"
                onChange={e => setApellido(e.target.value)}
              />
            </Tooltip>
            {/*Input para el mail*/}
            <Tooltip title="Su mail no puede tener menos de 6 carácteres ni más de 64.">
              <TextField
                id="email-input"
                label="E-mail"
                className={mail.length > 5 && mail.length <= 64 ? classes.valido : classes.invalido}
                name="email"
                type="email"
                margin="normal"
                variant="outlined"
                onChange={e => setMail(e.target.value)}
              />
            </Tooltip>
            {/*Input para el telefono*/}
            <Tooltip title="Su telefono no puede tener menos de 6 carácteres ni más de 24. Es opcional.">
              <TextField
                id="telefono-input"
                label="Telefono - Opcional"
                className={telefono.length > 5 && telefono.length <= 24 ? classes.valido : classes.invalidop}
                name="telefono"
                type="number"
                margin="normal"
                variant="outlined"
                onChange={e => setTelefono(e.target.value)}
              />
            </Tooltip>
            {/*Input para a quien va dirigido.*/}
            <Tooltip title="A quién vaya dirigido, no puede contener menos de 6 carácteres ni más de 24. Es opcional.">
              <TextField
                id="dirigido-input"
                label="Dirigido a - Opcional"
                className={dirigido.length > 5 && dirigido.length <= 24 ? classes.valido : classes.invalidop}
                name="dirigido"
                margin="normal"
                variant="outlined"
                onChange={e => setDirigido(e.target.value)}
              />
            </Tooltip>
            {/*Input para la consulta*/}
            <Tooltip title="Su consulta, no puede contener menos de 12 carácteres ni más de 512.">
              <TextField
                id="consulta-input"
                label="Consulta"
                className={consulta.length > 11 && consulta.length <= 512 ? classes.valido : classes.invalido}
                name="consulta"
                margin="normal"
                variant="outlined"
                fullWidth
                multiline
                rowsMax="4"
                onChange={e => setConsulta(e.target.value)}
              />
            </Tooltip>
          </form>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => { verificarConsulta() }}
          >
            Enviar Consulta
          </Button>
        </Paper>
        <Typography component="h3" variant="h4" align="center" color="textPrimary">{error}</Typography>
      </Container>
    );
  };
};

export default Contacto;