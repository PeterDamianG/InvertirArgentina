//Importacion de React y Frament para envolver, wrapping.
import React, { Fragment } from 'react';
//Importacion componentes Material-UI.
import Typography from '@material-ui/core/Typography';
//Importacion de herramienta para obtener datos más sencillamente.
import useDataApi from 'use-data-api';
//Importacion de parte de visual de Material-UI.
import Loading from '../../loading/Loading';
//Importacion de la plantilla para crear graficos.
import TemplateTable from '../templates/TemplateTable';

//Contenido del componente.
const PlazosFijosTableFetch = props => {
  //Uso de la herramienta de fetching.
  const [{ data, isLoading, isError }] = useDataApi(
    props.url, //URL a fetchear.
    {}, //Variable iniciar a almacenar, nombre 'data'.
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
          //Resultado en caso exitoso o todavia falta. Creacion del table.
          <Fragment>{(data !== undefined ?
            <TemplateTable
              titletable="Porcentajes Plazos Fijos"
              columns=
              {[
                { title: 'Entidad', field: 'entidad' },
                { title: 'Cliente', field: 'clientes' },
                { title: 'No Cliente', field: 'nocliente'}
              ]}
              data={(() => {
                if(data.length > 1){
                  data.shift();
                  return data;
                }
              })()}
            />
            : <Loading text="Obteniendo Datos de la Tabla . . ." variant="h4" />)}</Fragment>
        )}
    </Fragment>
  );
}

export default PlazosFijosTableFetch;