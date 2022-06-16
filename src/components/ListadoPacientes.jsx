import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes, setPaciente}) => {  //tomo la función que viene de app.jsx y la leo
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center"> Listado de pacientes </h2>
                    <p className="text-center text-xl mt-5 mb-10"> Administra tus {" "}
                        <span className="text-indigo-600 font-bold">pacientes y citas</span>
                    </p>
        
                    { pacientes.map((paciente) => (  //por último la paso al componente
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                        />)   
                    )} 
                </>
            ): (
                <>
                    <h2 className="font-black text-3xl text-center"> No hay pacientes </h2>
                    <p className="text-center text-xl mt-5 mb-10"> Comienza agregando pacientes {" "}
                        <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
                    </p>
                </>
            )}

        </div>
    )
}

export default ListadoPacientes;
