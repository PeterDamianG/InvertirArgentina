//Importacion de React.
import React from 'react';
//Importaciones componentes Material-UI.
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//Importacion para las cartas.
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//Importacion del sistema de enlazamiento de Reach-Router.
import { Link } from '@reach/router';
//Importacion de la configuracion de las cartas de noticias.
import configInicio from './ConfigNews';
//Importacion de imagen de fondo.
import BackgroundLogo from './images/BackgroundNoticias.svg';

//Asignacion de titulo al documento.
document.title = "Invertir Argentina - Noticias";
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

const Inicio = () => {
  //Asignacion de la configuracion del estilo visual.
  const classes = useStyles();
  //Constante del contenido de las tarjetas.
  const cards = configInicio;
  //Renderizado del componente
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid className={classes.background} container spacing={4}>
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

export default Inicio;