//Importacion de React.
import React from 'react';
//Importaciones componentes Material-UI.
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//Importacion de componente de cargado.
import Loading from '../../loading/Loading';
//Importamos el componente encargado de generar las pestañas.
import TemplateSidePage from '../templates/TemplateSidePage';
//Importacion del fetch y componente para el indice 0.
import PlazosFijosOficialFetch from './PlazosFijosOficialFetch';
//Importacion del fetch y componente para el indice 1.
import PlazosFijosTableFetch from './PlazosFijosTableFetch';
//Importacion de la plantilla componente para el indice 2.
import TemplateExpansionPanel from '../templates/TemplateExpansionPanel';
//Importacion de Hook para obtener url.
import GetURLHook from '../GetURLHook';

//Asignacion de titulo al documento.
document.title = 'Invertir Argentina - Plazos Fijos';

//Indice 0 de componentes internos.
const index0 = () => (
  <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
  >
    <Typography component="h1" variant="h1">
      Plazo Fijo
    </Typography>
    <Typography component="h3" variant="h4" align="center" color="textSecondary" gutterBottom>
      Instrumento del BCRA. Tasa de Política Monetaria.
    </Typography>
    <PlazosFijosOficialFetch />
    <Typography component="h5" variant="h5">
      Los datos son proporcionados oficialmente desde:
    </Typography>
    <Typography component="p" variant="h6">
      <a href='https://datos.gob.ar/'>datos.gob.ar</a>
    </Typography>
    <Typography component="p" variant="h6">
      <a href='https://datos.gob.ar/series/api/series/?ids=89.2_TS_INTE_PM_0_D_16'>Datos: Plazo Fijo</a>
    </Typography>
    <Typography component="section" variant="body1">
      La gráfica obtiene sus datos de manera oficial y representa los últimos 15 (quince) días de movimientos. Las fechas no hábiles, pueden no mostrarse correctamente.
    </Typography>
  </Grid>
);
//Indice 1 de componentes internos.
const index1 = () => {
  //Hook para conseguir url atravez de referencias.
  const url = GetURLHook('scraping/plazosfijos.json');

  if (typeof url === 'string') {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography component="h3" variant="h3">
          Lista de Interés en Plazos Fijos
        </Typography>
        <Typography component="h4" variant="h4" align="center" color="textSecondary" gutterBottom>
          Listado en diferente proveedores, con el valor actual de interés.
        </Typography>
        <PlazosFijosTableFetch url={url} />
        <Typography component="section" variant="body1">
          Entre las características que posee la tabla son: Búsqueda(Search), escribiendo palabras claves en campo de texto de búsqueda. Descarga en formato .CVS, para manipulación posterior en otros software y ordenamiento ascendente y desendente, por columnas, clickeando en sus correspondientes identificadores.
        </Typography>
        <Typography component="section" variant="body2">
          Los datos obtenidos se actualizan cada hora.
        </Typography>
      </Grid>
    );
  } else return <Loading text="Obteniendo Datos..." variant="body1" />;
};
//Indice 2 de componentes internos.
const index2 = () => (
  <TemplateExpansionPanel
    data={[{
      numberpanel: 1,
      titlepanel: '¿Plazo Fijo',
      contentpanel: 'El Depósito a plazo fijo o certificado de depósito a plazo fijo es una operación financiera por la cual una entidad financiera, a cambio del mantenimiento de ciertos recursos monetarios inmovilizados en un período determinado, reporta una rentabilidad financiera fija o variable, en forma de dinero o en especie. El término plazo fijo proviene del hecho de que el tiempo durante el cual la inversión permanece inmovilizada se estipula al comienzo de la misma: un año, tres meses, un mes, etc. Al llegar la fecha de vencimiento de la imposición la persona puede retirar todo el dinero o parte del mismo.'
    },
    {
      numberpanel: 2,
      titlepanel: 'Consejos del BCRA',
      contentpanel: '1 | Guardar el dinero en el hogar no genera ningún rédito. El Plazo Fijo ofrece un retorno conocido (la tasa de interés), es simple, es seguro y contribuye a la financiación de los clientes bancarios.\n2 | Antes de elegir un banco para constituir un plazo fijo chequear la tasa de plazo fijo por Home Banking o por la banca de inversión, los medios electrónicos suelen ofrecer mejores tasas de interés.\n3 | Por lo general, a mayor plazo, mayor es la tasa que el banco está dispuesto a pagar. Si se sabe que no se necesitará el dinero por un tiempo superior a 30 días, consultar las tasas de interés por plazos superiores, 60, 90, 180 y 360 días.\n4 | Los plazos fijos que fueron captados a tasa superiores a la de referencia, y los que hayan contado con incentivos o retribuciones especiales diferentes de la tasa de interés, no se encuentran garantizados por el Seguro de Garantía de los Depósitos.\n5 | Por lo general, a mayor monto depositado, mayor es la tasa que el banco está dispuesto a pagar. El monto mínimo para un plazo fijo suele ser de $1000.\n6 | Las operaciones de plazo fijo pueden hacerse en pesos o en dólares, y la tasa de uno y otro son diferentes.\n7 | Es recomendable invertir en un plazo fijo cuando se está seguro de que no se necesitará el dinero depositado durante un determinado tiempo, debido a que el mismo quedará inmovilizado sin poder ser retirado hasta su vencimiento.\n8 | Los plazos fijos en pesos son compensables, esto incrementa su seguridad ya que permite evitar el traslado del dinero de una entidad a otra. Al presentar un plazo fijo compensable en otra entidad, las opciones a las que se pueden acceder son: depositarlo en otra cuenta o constituir un nuevo plazo fijo.\n9 | Antes de constituir un plazo fijo, chequear la tasa de interés en distintas entidades para optar por la mejor oferta de tasas de interés.\n 10 | No son compensables aquellos plazos fijos que poseen una modalidad específica (ej. precancelables, ajustables con cláusula CER, UVas, etc.) ni los que se hayan realizado electrónicamente (por cajero, Home Banking, teléfono, etc.), ya que es necesario poseer el documento físico para presentarlo en otra entidad.'
    }
    ]} 
  />
);

//Constante de configuracion de la página.
const config = [
  //Cada objeto corresponde a una pestaña.
  {
    index: 0,
    label: 'Plazo Fijo Dato Oficial',
    content: index0
  },
  {
    index: 1,
    label: 'Listado Plazos Fijos',
    content: index1
  },
  {
    index: 2,
    label: 'Información',
    content: index2
  }
]

//Contenido del componente.
const PlazosFijos = () => (
  //Renderizado del componente.
  <TemplateSidePage objecto={config} />
);

export default PlazosFijos;
