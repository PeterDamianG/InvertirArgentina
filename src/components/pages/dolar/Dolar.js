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
import DolarOficialFetch from './DolarOficialFetch';
//Importacion del fetch y componente para el indice 1.
import DolarTableFetch from './DolarTableFetch';
//Importacion de la plantilla componente para el indice 2.
import TemplateExpansionPanel from '../templates/TemplateExpansionPanel';
//Importacion de Hook para obtener url.
import GetURLHook from '../GetURLHook';

//Asignacion de titulo al documento.
document.title = 'Invertir Argentina - Dolar';

//Indice 0 de componentes internos.
const index0 = () => (
  <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
  >
    <Typography component="h1" variant="h1">
      Dolar Oficial
    </Typography>
    <Typography component="h3" variant="h4" align="center" color="textSecondary" gutterBottom>
      Tipo de Cambio BNA (Vendedor)
    </Typography>
    <DolarOficialFetch />
    <Typography component="h5" variant="h5">
      Los datos son proporcionados oficialmente desde:
    </Typography>
    <Typography component="p" variant="h6">
      <a href='https://datos.gob.ar/'>datos.gob.ar</a>
    </Typography>
    <Typography component="p" variant="h6">
      <a href='https://datos.gob.ar/series/api/series/?ids=168.1_T_CAMBIOR_D_0_0_26'>Datos: Dolar Oficial</a>
    </Typography>
    <Typography component="section" variant="body1">
      La gráfica obtiene sus datos de manera oficial y representa los últimos 15 (quince) días de movimientos. Las fechas no hábiles, pueden no mostrarse correctamente.
    </Typography>
  </Grid>
);
//Indice 1 de componentes internos.
const index1 = () => {
  //Hook para conseguir url atravez de referencias.
  const url = GetURLHook('scraping/dolar.json');

  if (typeof url === 'string') {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography component="h3" variant="h3">
          Lista de Precios del Dolar
        </Typography>
        <Typography component="h4" variant="h4" align="center" color="textSecondary" gutterBottom>
          Listado en diferente proveedores, con el valor actual del dolar y algunos detalles como variación y spread.
        </Typography>
        <DolarTableFetch url={url} />
        <Typography component="section" variant="body1">
          Entre las características que posee la tabla son: Búsqueda(Search), escribiendo palabras claves en campo de texto de búsqueda. Descarga en formato .CVS, para manipulación posterior en otros software y ordenamiento ascendente y desendente, por columnas, clickeando en sus correspondientes identificadores(Entidad, Compra, Venta, Variación, Spread).
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
      titlepanel: '¿Dolar?',
      contentpanel: 'El dólar estadounidense es la moneda oficial de Estados Unidos de América. Usualmente también se suele asociar el nombre empleado por la divisa con la circulación legal en ese país. Tras la ruptura del patrón oro en el año 1971, la moneda se convirtió, de facto,en una moneda fiat. Aunque la emisión de esta clase de dólares solo se hace en Estados Unidos, 14 países más usan el nombre «dólar» para su moneda; otras naciones como Ecuador, El Salvador, Panamá y Timor Oriental, por medio de ratificaciones y acuerdos o como sustitución de un circulante propio debilitado, lo han elegido como moneda oficial y medio legal de pago. El código ISO 4217 para esta moneda es USD. '
    },
    {
      numberpanel: 2,
      titlepanel: 'Argentina Piensa en Verde',
      contentpanel: 'Argentina es el segundo país en el mundo, con más dolares en circulación y que su población anhela más está divisa. Curiosamente el primer país es Estados Unidos, claramente porque es su moneda oficial. '
    }
    ]} 
  />
);

//Constante de configuracion de la página.
const config = [
  //Cada objeto corresponde a una pestaña.
  {
    index: 0,
    label: 'Dolar Oficial',
    content: index0
  },
  {
    index: 1,
    label: 'Lista Precio Dolar',
    content: index1
  },
  {
    index: 2,
    label: 'Curiosidades',
    content: index2
  }
]

//Contenido del componente.
const Dolar = () => (
  //Renderizado del componente.
  <TemplateSidePage objecto={config} />
);

export default Dolar;