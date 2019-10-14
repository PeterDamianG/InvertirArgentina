//Importacion de React;
import React from 'react';
//Importaciones componentes Material-UI.
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

//Constante de configuracion del estilo visual.
const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    backgroundColor: 'rgba(0, 0, 0, .03)',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

//Constante de configuracion del estilo visual.
const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: '#3f51b5',
    color: 'white',
    borderBottom: '2px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

//Constante de configuracion del estilo visual.
const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

//Contenido del componente.
const TemplateExpansionPanel = props => {
  //Constante de estado para manejar el expandido de los paneles.
  const [expanded, setExpanded] = React.useState('panel1');
  //Funcion para manejar el evento al expandir los paneles.
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  //Renderizado del componente.
  return (
    <React.Fragment>
      {props.data.map((item) => (
        <ExpansionPanel key={item.numberpanel} square expanded={expanded === `panel${item.numberpanel}`} onChange={handleChange(`panel${item.numberpanel}`)}>
          <ExpansionPanelSummary aria-controls={`panel${item.numberpanel}d-content`} id={`panel${item.numberpanel}d-header`}>
            <Typography>{item.titlepanel}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{item.contentpanel}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </React.Fragment>
  );
};

export default TemplateExpansionPanel;