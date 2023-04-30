import React from 'react'

const Funciones = () => {

  const sumar = (a:number, b:number):number => {
    return a + b;
  }

  return (
    <>
    <div>Funciones</div>
    <span>El resultado es: { sumar(2,5) } </span>
    </>
  )
}

export default Funciones