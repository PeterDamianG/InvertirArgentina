//Importacion de React.
import React from 'react';
//Importaciones componentes Material-UI.
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//Importacion para las cartas del inicio logeado.
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//Importacion para el tooltip.
import Tooltip from '@material-ui/core/Tooltip';
//Importacion del icono para mostrar de ejemplo.
import MenuIcon from '@material-ui/icons/Menu';
//Importacion del sistema de enlazamiento de Reach-Router.
import { Link } from '@reach/router';
//Importacion de la configuracion de inicio cuando se esta logeado.
import configInicio from './ConfigInicio';
//Importacion de imagen de fondo.
import BackgroundLogo from './images/BackgroundInicioLogless.svg';

//Asignacion de titulo al documento.
document.title = "Invertir Argentina - Inicio";
//Constante de configuracion del estilo visual.
const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  background: {
    backgroundImage: `url(${BackgroundLogo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
}));

//Contenido del componente.
const Inicio = (props) => {
  //Asignacion de la configuracion del estilo visual.
  const classes = useStyles();
  //Constante del contenido de las tarjetas.
  const cards = configInicio;
  //Condicional para renderizar dependiendo el estado login de un usuario.
  if(props.user === null) {
    //Renderizado del componente sin login.
    return (
      <main>
        <Container maxWidth="sm" className={classes.background}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Invertir en Argentina
          </Typography>
          <Typography component="h3" variant="h4" align="center" color="textSecondary" gutterBottom>
            Informate de los mejores instrumentos financieros.
          </Typography>
          <Typography variant="h5" align="center" color="textPrimary" paragraph>
            No necesitas estar registrado, para obtener la mejor información. 
          </Typography>
          <Typography variant="h5" align="center" color="textPrimary" paragraph>
            (Basta con abrir el menú en la barra superior, este icono =>       <IconButton><MenuIcon /></IconButton>)
          </Typography>
          <Typography variant="h6" align="center" color="textPrimary" paragraph>
            Pero sí para opinar y que te enviemos las últimas novedades. 
          </Typography>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Link to="registro">
                <Button variant="contained" color="primary">
                  Registrarse
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to="login">
                <Tooltip title="¡Puedes iniciar sesión con muchos diferentes provedores!">
                  <Button variant="outlined" color="primary">
                    ¡Ya estoy registrado!
                  </Button>
                </Tooltip>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </main>
    )
  } else {
    //Renderizado del componente con login.
    return (
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map(card => (
            <Grid item key={card.index} xs={12} sm={6} md={4}>
              <Link to={card.link}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.imagen}
                    title={card.titulo}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.cabecera}
                    </Typography>
                    <Typography>
                      {card.detalle}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    )
  };
};

export default Inicio;