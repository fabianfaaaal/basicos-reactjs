import React from 'react'

function Header({ titulo }) { //function declaration, con destructuring

  return (
    <div>
      <h1 id="encabezado" className="encabezado">
        {titulo}
      </h1>
    </div>
  )
}

export default Header
