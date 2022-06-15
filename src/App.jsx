import { useState } from 'react';
import Formulario from "./components/Formulario"
import Hedaer from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([]); //arranca como array vacio que se va llenando

  return (
    <div className="container mx-auto mt-20">
      <Hedaer /> 

      <div className="mt-12 md:flex">
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}  //props
        />
        <ListadoPacientes 
          pacientes={pacientes}
        />
      </div>

    </div>
  )
}

export default App
