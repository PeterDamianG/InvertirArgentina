//Importacion de React y useState para usar estados.
import React, { useState } from 'react';
//Importacion de Prototypes, para los tipos de datos que se pasan.
import PropTypes from 'prop-types';
//Importaciones componentes Material-UI.
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

//Constante de configuracion del estilo visual.
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

//Contenido del componente.
const TemplateSidePage = props => {
  //Asignacion de la configuracion del estilo visual.
  const classes = useStyles();
  //Constantes de estado, para manejar valor del estado.
  const [value, setValue] = useState(0);
  //Funcion para manejar los cambios de estado.
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  //Renderizado del componente.
  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {props.objecto.map(item =>(
          <Tab key={item.index} label={item.label} />
        ))}
      </Tabs>
      {props.objecto.map(item =>(
        <TabPanel key={item.index} value={value} index={item.index}>
          {item.content}
        </TabPanel>
      ))}
    </Paper>
  );
}
/*****************TabPanel*********************/
const TabPanel = props => {
  //Destructuracion de constante para manejarnos mas facilmente.
  const { children, value, index, ...other } = props;
  //Contenido a renderizar.
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
};
//Asignacion del objeto requerido para manjear los paneles.
TabPanel.propTypes = {
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default TemplateSidePage;