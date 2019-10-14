import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
//Importacion del componente para el fetch.
import NewsFetch from './NewsFetch';
//Importacion de Firebase, para obtener las URL de descarga.
import firebase from '../../Firebase';
//Importacion de parte de visual de Material-UI.
import Loading from '../../loading/Loading';
import ClarinLogo from './images/ClarinLogo.svg';
import TelamLogo from './images/TelamLogo.svg';
import IprofesionalLogo from './images/IprofesionalLogo.svg';
import PoliticaOnlineLogo from './images/PoliticaOnlineLogo.svg';
import NacionLogo from './images/NacionLogo.svg';
import Pagina12Logo from './images/Pagina12Logo.svg';
import AmbitoLogo from './images/AmbitoLogo.svg';

const TemplateNews = props => {
  //Estado para manejar la URL a fetchear.
  const [url, setUrl] = useState((async () => {
    const result = await firebase.storage().ref(`news/news${props.empresa}.json`).getDownloadURL();
    setUrl(result);
  })());
  //Funcion para determinar el nombre del titulo de la pagina.
  const nameTitle = (texto => {
    if(texto === 'clarin') return 'Clarín';
    else if(texto === 'telam') return 'Telam';
    else if(texto === 'iprofesional') return 'iProfesional';
    else if(texto === 'politicaonline') return 'La Política Online';
    else if(texto === 'nacion') return 'La Nación';
    else if(texto === 'pagina12') return 'Página12';
    else if(texto === 'ambito') return 'Ámbito';
  })(props.empresa);
  //Funcion para determinar el logo en la seccion pertinente.
    const logo = (texto => {
      if(texto === 'clarin') return ClarinLogo;
      else if(texto === 'telam') return TelamLogo;
      else if(texto === 'iprofesional') return IprofesionalLogo;
      else if(texto === 'politicaonline') return PoliticaOnlineLogo;
      else if(texto === 'nacion') return NacionLogo;
      else if(texto === 'pagina12') return Pagina12Logo;
      else if(texto === 'ambito') return AmbitoLogo;
    })(props.empresa);
  //Asignacion del nombre a titulo de la pagina.
  document.title = `Invertir Argentina - ${nameTitle}`;
  //Renderizado del componente.
  if(typeof url === 'string') {
    return(
      <React.Fragment>
        <Grid   
        container
        direction="row"
        justify="center"
        alignItems="flex-start">
          <img src={logo} alt={nameTitle}/>
        </Grid>
        <NewsFetch url={url} />;
      </React.Fragment>
    ) 
  }
  else return <Loading text="Obteniendo Datos..." variant="body1" />;
};

export default TemplateNews;