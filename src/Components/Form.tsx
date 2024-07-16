

const Form = () => {
  return (
    <form  className= " bg-white p-4 rounded-md  overflow-hidden flex gap-x-2 items-center">
        <span className="bg-slate-100 rounded-full border-2 h-4 w-4 inline-block">

        </span>
        
        <input type="text" 
        className="outline-none w-full text-gray-400" 
        placeholder="Ingrese tarea"
         />
    </form>
  )
}

export default Form