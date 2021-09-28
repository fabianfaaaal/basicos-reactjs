import React, { Fragment } from 'react' //Usamos Fragment para no insertar codigo HTML de mas como por ejemplo un contenedor <div> en el return.
import Header from './components/Header'
import Footer from './components/Footer'

//ESTE ES EL COMPONENTE PRINCIPAL, QUE ES PARA CARGAR OTROS COMPONENTES

function App() {
  return (
    <Fragment>
      <Header />
      <h1>Hola Mundo!</h1>
      <Footer />
    </Fragment>
  );
}

export default App;
