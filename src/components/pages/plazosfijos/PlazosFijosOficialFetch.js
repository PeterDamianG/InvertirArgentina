//Importacion de React y Frament para envolver, wrapping.
import React, { Fragment } from 'react';
//Importacion componentes Material-UI.
import Typography from '@material-ui/core/Typography';
//Importacion de herramienta para obtener datos más sencillamente.
import useDataApi from 'use-data-api';
//Importacion de componente de cargado.
import Loading from '../../loading/Loading';
//Importacion de la plantilla para crear graficos.
import TemplateGrafico from '../templates/TemplateGrafico';

//Creacion de funcion para asignar la fecha al fetcher.
const getFecha = () => {
  let date = new Date();
  date.setDate(date.getDate() - 15);
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();

  return `${year}-${month + 1}-${day}`
};

//Contenido del componente.
const PlazosFijosOficialFetch = props => {
  //Uso de la herramienta de fetching.
  const [{ data, isLoading, isError }] = useDataApi(
    `https://apis.datos.gob.ar/series/api/series/?ids=89.2_TS_INTE_PM_0_D_16&start_date=${getFecha()}&metadata=none&limit=15&format=json`, //URL a fetchear.
    {}, //Variable inicial a almacenar, nombre 'data'.
  );
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
          //Resultado en caso exitoso o todavia falta. Creacion del grafico.
          <Fragment>{(data.data !== undefined ?
            <TemplateGrafico data={data.data.map(item => (
              {
                x: item[0],
                y: item[1],
                label: item[1]
              }
            ))}
            x={1024}
            y={400}
            sidelabel="Porcentaje Plazos Fijos según Tasa de Política Monetaria"
            simbol="%"
            textbar="Porcentaje"
            />
            : <Loading text="Obteniendo Datos..." variant="h3" />)}</Fragment>
        )}
    </Fragment>
  );
}

export default PlazosFijosOficialFetch;