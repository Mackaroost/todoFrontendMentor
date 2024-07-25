import Error from "./Error"
import { SetStateAction, useState } from "react"

interface createTodoProps{
    createTodo: (title:string)=> void
}

const Form = ({createTodo}:createTodoProps) => {

    const[title, setTitle]=useState('')
    const [error, setError] = useState('')

    const handleInput = (event: { target: { value: SetStateAction<string> } })=>{
       setTitle(event.target.value)
       setError('')
    }

    const handleSubmit=(e: { preventDefault: () => void })=>{
        e.preventDefault()
        if(title.trim().length > 0){
            createTodo(title)
            setError('')
            setTitle('')
        }
        else{
            setError('Debe completar el campo')
        }
    }
  return (
    <>
    <form 
     onSubmit={handleSubmit}
     className= " bg-white p-4 rounded-md overflow-hidden flex gap-x-2 items-center dark:bg-slate-800">
        <span 
        className="bg-slate-100 rounded-full border-2 h-4 w-4 inline-block">
        </span>
        
        <input type="text" 
        className="outline-none bg-transparent w-full text-gray-400" 
        placeholder="Ingrese tarea"
        onChange={handleInput}
        value={title}
         />
    </form>
         {
           error && <Error msj = {error}/>
         }
         </>
  )
}

export default Form