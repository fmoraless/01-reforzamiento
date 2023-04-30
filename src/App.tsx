//import Funciones from "./typescript/Funciones"
//import { ObjetosLiterales } from "./typescript/ObjetosLiterales"
//import { TiposBasicos } from "./typescript/TiposBasicos"
//import {Contador} from "./components/Contador"
import {ContadorConHook} from "./components/ContadorConHook"

const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introduccion TS REACT</h1>
      <hr /> 
      {/* <TiposBasicos /> */}
      {/* <ObjetosLiterales /> */}
      {/* <Funciones /> */}
      <ContadorConHook />
      </div>
  )
}

export default App