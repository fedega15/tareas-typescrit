import { useState} from 'react'
import { ListaTareas } from './ListaTareas'

export const TodoApp = () => {

//states
const [nuevaTarea, setNuevaTarea] = useState<string>('')
const [listaTareas, setListaTareas] = useState<string[]>([])
//handles
const handleAddTask = () => {
    if(nuevaTarea.trim() === '') return
    setListaTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea])
    setNuevaTarea('')

}
const handleBorrarTarea= (index:number) => {
    setListaTareas(tareas => tareas.filter((_, i) => i !== index))
}

  return (
    <div>
        <h1>Lista de tareas</h1>
        <div>
            <input 
                type="text" 
                value={nuevaTarea}
                onChange={(e) => setNuevaTarea(e.target.value)}
                placeholder="Nueva tarea.."
            />
            <button onClick={handleAddTask}>Agregar Tarea</button>
        </div>  
        <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea} />
    </div>
  )
}