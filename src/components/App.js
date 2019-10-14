//Importacion de React.
import React from 'react';
//Importacion de un convertor para la asignacion de clases-css.
import clsx from 'clsx';
//Importaciones de Material-UI para el estilo visual.
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
//Importacion de Iconos.
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
//Importacion del loading.
import Loading from './loading/Loading';
//Importacion de las partes fijas del layout.
import CustomBar from './layout/custombar/CustomBar';
import CustomSideBar from './layout/customsidebar/CustomSideBar';
import Footer from './layout/footer/Footer';
//Importacion del router para manejar las paginas.
import RouterConfig from './RouterConfig';
//Importacion de componentes de autenticacion y contexto.
import { userContext, useAuth } from './AppContext';

//Constante de estilos y su configuracion.
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: '80%',
    marginLeft: '20%',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: '20%',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '20%',
    backgroundColor: '#3f51b5'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: '-20%',
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  color: {color: 'white'}
}));

//Contenido del componente.
const App = () => {
  //Inicializacion de variables para el estilo visual.
  const classes = useStyles();
  const theme = useTheme();
  //Inicializacion variables de autenticacion.
  const { initializing, user } = useAuth();
  //Inicializacion del estado para manejar el Drawer.
  const [open, setOpen] = React.useState(false);
  //Funciones para manejar el abrir/cerrar del Drawer.
  const handleDrawerOpen = () => {setOpen(true);}
  const handleDrawerClose = () => {setOpen(false);}
  //Renderizado de las partes de la APP.
  if (initializing) {
    //Un cargador, para esperar que se inicialize firebase.
    return <Loading text="Estamos iniciando el sistema, espera por favor." variant="h2" />
  }
  //Renderizado del componente.
  return (
    //Etiqueta para iniciar y envolver toda la App con el contexto.
    <userContext.Provider value={{ user }}>
      <div className={classes.root}>
        {/*Inicio de la AppBar.*/}
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              color="inherit"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              {/*Icono del menu.*/}
              <MenuIcon />
            </IconButton>
            {/*Componente de la barra principal.*/}
            <CustomBar/>
          </Toolbar>
        </AppBar>
        {/*Inicio del Drawer.*/}
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton className={classes.color} onClick={handleDrawerClose}>
              {/*Funcion con el icono del drawer.*/}
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          {/*Componente con el contenido en el drawer.*/}
          <CustomSideBar />
        </Drawer>
        {/*Contenido principal.*/}
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          {/*Inicio del sistema de pages. Usando el RouterConfig.*/}
          <RouterConfig />
        </main>
      </div>
      {/*Pie de pagina.*/}
      <Footer />
    </userContext.Provider>
  );
}

export default App;