//Importacion de React y Frament para envolver, wrapping.
import React, { Fragment } from 'react';
//Importaciones componentes Material-UI.
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//Importacion para las cartas.
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
//Importacion de herramienta para obtener datos más sencillamente.
import useDataApi from 'use-data-api';
//Importacion de parte de visual de Material-UI.
import Loading from '../../loading/Loading';

//Constante de configuracion del estilo visual.
const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#c5cae9'
  },
  cardContent: {
    flexGrow: 1,
    backgroundColor: '#e8eaf6'
  },
  titleBackgroud: {
    borderLeft: '6px solid #3f51b5',
    borderRight: '6px solid #3f51b5'
  }
}));

//Contenido del componente.
const NewsFetch = props => {
  //Asignacion de la configuracion del estilo visual.
  const classes = useStyles();
  //Uso de la herramienta de fetching.
  const [{ data, isLoading, isError }] = useDataApi(
    props.url, //URL a fetchear.
    {}, //Variable iniciar a almacenar, nombre 'data'.
  );
  //Constante del contenido de las tarjetas.
  const cards = Array.from(data).map(item => (item));
  //Renderizado del componente.
  return (
    <Fragment>
      {/*Resultado de renderizado en caso de que algo falle.*/}
      {isError && <Typography component="p" variant="h6">Ha ocurrido un problema, lo sentimos. Puedes intentar recargar la página y/o comunicarle esto al administrador: {isError}</Typography>}
      {/*Resultado de renderizado mientras carga y/o es existoso..*/}
      {isLoading ? (
        //Resultado en caso de carga o mientras carga.
        <Loading text="Obteniendo Datos..." variant="h3" />
      ) : (
          //Resultado en caso exitoso. Creacion de las cartas.
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {cards.map((card, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                      <Typography className={classes.titleBackgroud} gutterBottom variant="h5" component="h2">
                        {card.titulo}
                      </Typography>
                    <CardContent className={classes.cardContent}>
                      <Typography>
                        {card.content !== '' || card.content === null ?
                        card.content :
                        'Para obtener más información puedes acceder al Link.'}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <a href={card.link} target='_blank' rel="noopener noreferrer">
                        <Button size="small" color="primary">
                          Link
                        </Button>
                      </a>
                      <Typography>
                        {card.pubDate}
                      </Typography>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        )}
    </Fragment>
  );
}

export default NewsFetch;