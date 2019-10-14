//Importacion de React, Contexto y el sistema de carga diferido.
import React, { Suspense, lazy, useContext } from 'react';
//Importamos el sistema de rutas desde Reach-Router.
import { Router } from '@reach/router';
//Importamos el contexto, para no arrastrarlo con props.
import { userContext } from './AppContext';
//Importamos el loading, para la entrecarga entre paginas.
import Loading from './loading/Loading';

//Constante iniciada en lazy, para que carguen en diferido.
const Inicio = lazy(() => import('./pages/inicio/Inicio'));
const Noticias = lazy(() => import('./pages/noticias/Noticias'));
  //Constante para las paginas internas, seccion noticias.
  const TemplateNews = lazy(() => import('./pages/noticias/TemplateNews'));
const Contacto = lazy(() => import('./pages/contacto/Contacto'));
const Login = lazy(() => import('./pages/login/Login'));
const Registro = lazy(() => import('./pages/registro/Registro'));
  //Constante para las paginas en caso de estar logeado.
  const Perfil = lazy(() => import('./pages/perfil/Perfil'));
  const Config = lazy(() => import('./pages/config/Config'));
//Importacion de pagina en caso de no encontrarse y error.
const NotFound = lazy(() => import('./pages/notfound/NotFound'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));
//Importacion de las paginas en el sidebar.
const Dolar = lazy(() => import('./pages/dolar/Dolar'));
const PlazosFijos = lazy(() => import('./pages/plazosfijos/PlazosFijos'));
const FCI = lazy(() => import('./pages/fci/FCI'));
const CaucionesBursatiles = lazy(() => import('./pages/caucionesbursatiles/CaucionesBursatiles'));
//Importacion de terminos, condiciones y politicas de la pagina.
const PrivacyPolicy = lazy(() => import('./pages/privacypolicy/PrivacyPolicy'));
const TermsofService = lazy(() => import('./pages/termsofservice/TermsofService'));

//Contenido del componente.
const RouterConfig = () => {
  //Inicializacion variables de autenticacion.
  const { user } = useContext(userContext);
  //Renderizado del componente.
  return (
    //Etiqueta para cargar loading, mientras se cargan las páginas.
    <Suspense fallback={<Loading variant="h2" text="Obteniendo Página . . . " />}>
      <Router>
        {/*Diferentes rutas cargaran la misma pagina de inicio.*/}
        <Inicio user={user} path='/' />
        <Inicio user={user} path='inicio' />
        <Inicio user={user} path='home' />
        <Noticias path='noticias/' />
          {/*Template para las diferentes empresas de noticias.*/}
          <TemplateNews empresa='clarin' path='noticias/clarin' />
          <TemplateNews empresa='telam' path='noticias/telam' />
          <TemplateNews empresa='iprofesional' path='noticias/iprofesional' />
          <TemplateNews empresa='politicaonline' path='noticias/politicaonline' />
          <TemplateNews empresa='nacion' path='noticias/nacion' />
          <TemplateNews empresa='pagina12' path='noticias/pagina12' />
          <TemplateNews empresa='ambito' path='noticias/ambito' />
        <Contacto user={user} path='contacto' />
        <Login path='login' />
        <Registro user={user} path='registro' />
          {/*Paginas que se cargan cuando estas logeado.*/}
          <Perfil user={user} path='perfil' />
          <Config user={user} path='config' />
        {/*Vista que se carga cuando no se encuentra la pagina o hay error.*/}
        <NotFound default />
        <ErrorPage path='error' />
        {/*Paginas correspondientes al sidebar.*/}
        <Dolar path='dolar' />
        <PlazosFijos path='plazosfijos' />
        <FCI path='fci' />
        <CaucionesBursatiles path='caucionesbursatiles' />
        {/*Paginas de terminos, condiciones y politicas.*/}
        <PrivacyPolicy path='privacypolicy' />
        <TermsofService path='termsofservice' />
      </Router>
    </Suspense>
  );
}

export default RouterConfig;