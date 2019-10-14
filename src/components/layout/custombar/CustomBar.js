//Importacion de React y Contexto.
import React, { useContext } from 'react';
//Importaciones de Material-UI para el estilo visual.
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//importacion del icono para el usuario conectado.
import AccountCircle from '@material-ui/icons/AccountCircle';
//Importacion para el tooltip.
import Tooltip from '@material-ui/core/Tooltip';
//Importacion de firebase para el logout.
import firebase from '../../Firebase';
//Importacion de Link para Reach-Router.
import { Link } from '@reach/router';
//Importamos el contexto, para no arrastrarlo con props.
import { userContext } from '../../AppContext';
//Importamos los datos-fetch.
import DolarBarFetch from './DolarBarFetch';

//Constante de configuracion de estilo visual.
const useStyles = makeStyles(theme => ({
  button: {
    color: 'white'
  },
  paper: {
    padding: theme.spacing(1),
  }
}));

//Contenido del componente.
const CustomBar = () => {
  //Asignamos la configuracion visual a una constante.
  const classes = useStyles();
  //Instanciamos el contexto, para recuperar el valor actual.
  const { user } = useContext(userContext);
  //Constante para manejar el submenu de usuario.
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  //Metodos para manejar el submenu.
  const handleMenu = (event) => {setAnchorEl(event.currentTarget);}
  const handleClose = () => {setAnchorEl(null);}
  //Renderizado del componente.
  return (
  //Sistema flex de grillas de Material-UI para la disposicion.
  <Grid
    container
    direction="row"
    justify="space-between"
    alignItems="center"
  >
    {/*Primer grupo de tres botones.*/}
    <div>
      <Link to="/">
        <Button className={classes.button}>Inicio</Button>
      </Link>
      <Link to="noticias">
        <Button className={classes.button}>Noticias</Button>
      </Link>
      <Link to="contacto">
        <Button className={classes.button}>Contacto</Button>
      </Link>
    </div>
    {/*Segundo boton con data-fetch y acceso a otra seccion.*/}
    <Tooltip title="Es un promedio entre las siguientes fuentes: Ambito, Yahoo, Google y La Nación. ¡Para detalles más exactos clickear!">
      <Link to="dolar">
        <Button variant="contained" color="primary" size="large">
          <DolarBarFetch />
        </Button>
      </Link>
    </Tooltip>
    {/*Tercer grupo botones, con renderizado condicionado.*/}
    {(user === null) 
    ?
    //En caso de estar deslogeado.
    <div>
      <Tooltip title="¡Puedes iniciar seción con varios métodos diferentes!">
        <Link to="login">
          <Button className={classes.button}>Login</Button>
        </Link>
      </Tooltip>
      <Link to="registro">
        <Button className={classes.button}>Registro</Button>
      </Link>
    </div> 
    :
    //En caso de estar logeado.
    <div>
      <div>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <Typography variant="h5" component="h6">
            {user.displayName === null ? user.email : user.displayName}
          </Typography>
          <Avatar className={classes.avatar}>
            {user.photoURL === null ?
              <AccountCircle /> :
              <img src={user.photoURL} alt="ImagenAvatar" />
            }
          </Avatar>
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
          }}
          open={open}
          onClose={handleClose}
          >
          <Link to="perfil"><MenuItem>Perfil</MenuItem></Link>
          <Link to="config"><MenuItem>Configuración</MenuItem></Link>
          <MenuItem onClick={() => firebase.auth().signOut()}>Desconexión</MenuItem>
        </Menu>
      </div>
    </div>
    }
  </Grid>
  );
};

export default CustomBar;