//Importanciones de imagenes.
import NewspaperLogo from './images/NewspaperLogo.svg';
import CoinLogo from './images/CoinLogo.svg';
import BilletesLogo from './images/BilletesLogo.svg';

const configInicio = [
  {
    index: 0,
    titulo: 'Noticias',
    imagen: NewspaperLogo,
    cabecera: 'Noticias Económicas',
    detalle: 'Sección donde se encuentran las noticias más relevantes, obtenidas de diversas fuentes.',
    link: 'noticias'
  },
  {
    index: 1,
    titulo: 'Dolar',
    imagen: CoinLogo,
    cabecera: 'Dolar Internacional',
    detalle: 'Información importante y datos, sobre el dolar la moneda extranjera más relevante en Argentina.',
    link: 'dolar'
  },
  {
    index: 2,
    titulo: 'Plazos Fijos',
    imagen: BilletesLogo,
    cabecera: 'Plazos Fijos',
    detalle: 'Sección donde se encuentran información y datos, relacionados a los plazos fijos.',
    link: 'plazosfijos'
  },
  {
    index: 3,
    titulo: 'Cauciones Bursátiles',
    imagen: BilletesLogo,
    cabecera: 'Cauciones Bursátiles',
    detalle: 'Sección donde se encuentran información y datos, relacionados a las Cauciones Bursátiles.',
    link: 'caucionesbursatiles'
  }
]

export default configInicio;