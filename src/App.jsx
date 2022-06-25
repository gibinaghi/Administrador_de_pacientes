import { useState, useEffect } from 'react';
import Formulario from "./components/Formulario"
import Hedaer from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  //genero la función
  const [pacientes, setPacientes] = useState([]); //arranca como array vacio que se va llenando, de acá salen los datos a los demás componentes
  const [paciente, setPaciente] = useState({}); //objeto vacio

  //se carga una sola vez cuando el componente está listo
  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []; //si no hay nada el localStorage agrega un arreglo vacio
      setPaciente(pacientesLS)
    }
    obtenerLS();
  }, []); 


  //sincroniza el state con lo que hay en pacientes
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));  //pacientes es un arreglo pero JSON.stringify lo convierte a String
  }, [pacientes])

  
  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Hedaer /> 

      <div className="mt-12 md:flex">
        <Formulario   //paso la función al componente listadoPacientes.jsx
          pacientes={pacientes}
          setPacientes={setPacientes}  //props
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>

    </div>
  )
}

export default App
