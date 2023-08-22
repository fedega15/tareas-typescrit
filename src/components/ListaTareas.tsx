import { Tarea } from "./Tarea"

type ListaTareasProps = {
    listaTareas : string[]
    borrarTarea: (index:number) => void
} // entonces en props vamos a recibir lsita tareas y una fn borrartarea

export const ListaTareas = ({listaTareas, borrarTarea}: ListaTareasProps) => {
  return (
    <div className="taskList">
        {listaTareas.map((tarea,index) => (
            <Tarea key={index} tarea={tarea} borrarTarea={() => borrarTarea(index)}></Tarea>
        )
        )}

    </div>
  )
}