//Importacion de React.
import React from 'react';
//Importaciones componentes Material-UI.
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
//Importacion del icono, es caso de no poseer imagen de perfil.
import AccountCircle from '@material-ui/icons/AccountCircle';
//Importacion del sistema de enlazamiento de Reach-Router.
import { Link } from '@reach/router';

//Asignacion de titulo al documento.
document.title = 'Invertir Argentina - Perfil';
//Constante de configuracion visual.
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
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}));

//Contenido del componente.
const Perfil = props => {
  //Asignacion de la configuracion del estilo visual.
  const classes = useStyles();
  //Condicional para renderizar dependiendo el estado login de un usuario.
  if (props.user !== null) {
    return (
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            {props.user.photoURL === null ?
              <AccountCircle /> :
              <img src={props.user.photoURL} alt="ImagenAvatar" />
            }
          </Avatar>
          <Typography component="h1" variant="h5">
            {props.user.displayName === null ? props.user.email : props.user.displayName}
          </Typography>
          <Link to="/config">
            <Button
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Configuración
            </Button>
          </Link>
        </Paper>
      </Container>
    );
  } else {
    //En caso de estar en esta pagina sin estar logueado, lo que no deberia ser posible al menos que escribas manualmente la url o uses el historypush. Se redireccionara a la pagina del login.
    window.location.assign('login');
    return null;
  }
};

export default Perfil;