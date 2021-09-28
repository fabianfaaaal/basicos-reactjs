import React, { Fragment } from 'react' //Usamos Fragment para no insertar codigo HTML de mas como por ejemplo un contenedor <div> en el return.
import Header from './components/Header'
import Footer from './components/Footer'

//ESTE ES EL COMPONENTE PRINCIPAL, QUE ES PARA CARGAR OTROS COMPONENTES

function App() {

  //Obtener fecha 
  const fecha = new Date().getFullYear()

  return (
    <Fragment>
      <Header 
        titulo ='Tienda Virtual'
      />
      
      <Footer 
        fecha = {fecha}
      />
    </Fragment>
  );
}

export default App;
