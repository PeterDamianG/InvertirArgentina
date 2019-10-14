//Importacion de React.
import React from 'react';
//Importaciones componentes Material-UI.
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
//Importacion del sistema de enlazamiento de Reach-Router.
import { Link } from '@reach/router';

//Constante de configuracion de estilo visual.
const useStyles = makeStyles(theme => ({
  button: {
    color: 'white'
  },
  paper: {
    padding: theme.spacing(2),
  }
}));

const CustomSideBar = () => {
  //Asignamos la configuracion visual a una constante.
  const classes = useStyles();
  //Renderizado del componente.
  return (
    <React.Fragment>
      <Link to="dolar">
        <Button className={classes.button}>Dolar</Button>
      </Link>
      <Divider />
      <Link to="plazosfijos">
        <Button className={classes.button}>Plazos Fijos</Button>
      </Link>
      <Link to="caucionesbursatiles">
        <Button className={classes.button}>Cauciones Bursátiles</Button>
      </Link>
      <Link to="fci">
        <Button className={classes.button}>Fondo Común de Inversión</Button>
      </Link>
      <Divider />
    </React.Fragment>
  );
}

export default CustomSideBar;