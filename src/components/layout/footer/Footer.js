//Importacion de React y Fragment para envolver, wrapping.
import React, { Fragment } from 'react';
//Importaciones para el estilo visual desde Material-UI.
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//Importacion de Reach-Router para el enlazamiento.
import { Link } from '@reach/router';
//Importanciones de imagenes.
import FacebookLogo from './images/FacebookLogo.svg';
import TwitterLogo from './images/TwitterLogo.svg';
import PlayStoreLogo from './images/PlayStoreLogo.svg';
import GitHubLogo from './images/GitHubLogo.svg';
import InvertirArgentinaLogo from './images/LogoInverso.svg';

//Constante de estilos y su configuracion.
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: '25%',
    marginTop: '15%',
    backgroundColor: '#3f51b5',
    borderRadius: '25px 25px 0px 0px'
  },
  footer: {
    marginTop: 'auto',
    backgroundColor: '#3f51b5',
    borderRadius: '25px 25px 25px 25px',
    padding: theme.spacing(1)
  },
  padding: {
    padding: theme.spacing(1),
    color: 'white'
  },
  color: {
    color: 'white'
  }
}));

//Contenido del componente.
const Footer = () => {
  //Inicializacion de constante para el estilo visual.
  const classes = useStyles();
  //Renderizado del componente.
  return (
    <Fragment>
      <Container className={classes.root}>
        <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        >
          {/*Contenido de la primera columna.*/}
          <Typography className={classes.padding} variant="h6" color="textPrimary" align="center">
            Enlaces de interes:
          </Typography>
          <Link to="/" className={classes.padding}>
            <Typography variant="body1" className={classes.color} align="center">
              Página Principal
            </Typography>
          </Link>
          <Link to="login" className={classes.padding}>
            <Typography variant="body1" className={classes.color} align="center">
              Acceso de Usuarios
            </Typography>
          </Link>
          <Link to="noticias" className={classes.padding}>
            <Typography variant="body1" className={classes.color} align="center">
              Noticias
            </Typography>
          </Link>
          <Link to="contacto" className={classes.padding}>
            <Typography variant="body1" className={classes.color} align="center">
              Contacto
            </Typography>
          </Link>
          <Link to="registro" className={classes.padding}>
            <Typography variant="body1" className={classes.color} align="center">
              Registrate para disfrutar ventajas
            </Typography>
          </Link>
        </Grid>
        <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        >
          {/*Contenido de la segunda columna.*/}
          <Typography className={classes.padding} variant="h6" color="textPrimary" align="center">
            Siguenos en nuestras redes:
          </Typography>
          <div>
            <a href='https://www.facebook.com/InvertirArgentina'>
              <img className={classes.padding} src={FacebookLogo} alt="Facebook"/>
            </a>
            <a href='https://www.twitter.com/InvertirArgentina'>
              <img className={classes.padding} src={TwitterLogo} alt="Twitter"/>
            </a>
          </div>
          <div>
            <a href='Aun No'>
              <img className={classes.padding} src={PlayStoreLogo} alt="PlayStore"/>
            </a>
            <a href='https://github.com/PeterDamianG/InvertirArgentina'>
              <img className={classes.padding} src={GitHubLogo} alt="GitHub"/>
            </a>
          </div>
        </Grid>
        <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-end"
        >
          {/*Contenido de la tercera columna.*/}
          <Typography  className={classes.padding}variant="h6" color="textPrimary" align="center">
            ¿Quieres contactarnos?
          </Typography>
          <Typography variant="body1" className={classes.color} align="center">
            <a href='mailto:InvertirArgentinaNow@Gmail.com'>
              Mail: InvertirArgentina@Gmail.com
            </a>
            <br/>
            <a href='mailto:PeterDamianG@Gmail.com'>
              Mail: PeterDamianG@Gmail.com
            </a>
          </Typography>
          <Link className={classes.padding} to="/">
            <img src={InvertirArgentinaLogo} alt="InvertirArgentina"/>
          </Link>
          <Link to="termsofservice">
            <Typography variant="body1" className={classes.color} align="center">
              Terminos del Servicio
            </Typography>
          </Link>
          <Link to="privacypolicy">
            <Typography variant="body1" className={classes.color} align="center">
              Privacidad, Políticas y Cookies
            </Typography>
          </Link>
        </Grid>
      </Container>
      <footer className={classes.footer}>
          <Typography variant="body2" className={classes.color} align="center">
            {'Copyright © '}
            <Link to='/'>
            Invertir Argentina
            </Link>{' '}
            {new Date().getFullYear()}
            {'. All rights reserved. All trademarks are property of their respective owners in the US and other countries. Site By Peter Damian G.'}
          </Typography>
      </footer>
    </Fragment>
  );
}

export default Footer;