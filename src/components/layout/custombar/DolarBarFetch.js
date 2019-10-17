//Importacion de React y Fragment para envolver, wrapping.
import React, { Fragment } from 'react';
//Importacion de herramienta para obtener datos más sencillamente.
import useDataApi from 'use-data-api';

//Contenido del componente.
const DolarBarFetch = () => {
  //Uso de la herramienta de fetching.
  const [{ data, isLoading, isError }] = useDataApi(
    'https://ws.geeklab.com.ar/dolar/get-dolar-json.php', //URL a fetchear.
    {}, //Variable iniciar a almacenar, nombre 'data'.
  );
  //Renderizado del componente.
  return (
    <Fragment>
      {/*Resultado de renderizado en caso de que algo falle.*/}
      {isError && <div/>}
      {/*Resultado de renderizado mientras carga y/o es existoso.*/}
      {isLoading ? (
        //Resultado en caso de carga o mientras carga.
        <div>Obteniendo Datos</div>
      ) : (
        //Resultado en caso exitoso.
        <p>Dolar Venta {data.libre}</p>
      )}
    </Fragment>
  );
};

export default DolarBarFetch;
