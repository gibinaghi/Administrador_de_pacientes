import { useState } from 'react';
import Formulario from "./components/Formulario"
import Hedaer from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  //genero la función
  const [pacientes, setPacientes] = useState([]); //arranca como array vacio que se va llenando, de acá salen los datos a los demás componentes
  const [paciente, setPaciente] = useState({}); //objeto vacio

  return (
    <div className="container mx-auto mt-20">
      <Hedaer /> 

      <div className="mt-12 md:flex">
        <Formulario   //paso la función al componente listadoPacientes.jsx
          pacientes={pacientes}
          setPacientes={setPacientes}  //props
          paciente={paciente}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
        />
      </div>

    </div>
  )
}

export default App
