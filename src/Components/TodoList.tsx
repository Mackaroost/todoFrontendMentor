import DeleteTodo from "./DeleteTodo";
import { type TodosType } from "./types/todos";
import CheckBtn from "./CheckBtn";
  
  interface TodoListProps {
    todos: TodosType[]
    deleteTodo: (id:number)=> void,
    updateTodo:(id:number)=>void
  }
 
export const TodoList : React.FC<TodoListProps> = ({todos, deleteTodo, updateTodo}) => {
   
  return (
    <ul className="mt-[-3rem] w-4/6  rounded-md bg-slate-50 mx-auto flex-col items-center shadow-md ">
        {
            todos.map((item) =>{
                return(
                    <li key={item.id} className="p-4 flex items-center gap-x-2 w-full border-b-2 border-b-gray-300 "> 
                     <button 
                     onClick={()=>updateTodo(item.id)}
                     className={`${item.completed ? ' flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' : 'bg-slate-100'} rounded-full border-2 inline-block w-[18px] h-[18px]`}>
                     {item.completed ? <CheckBtn /> : null}
                       </button>
                       <p className={`font-semibold text-gray-500 ${item.completed ? 'line-through' : ''}`}>
                         {item.title}
                       </p>
                    <button className= "ml-auto text-gray-400"
                    onClick={()=> deleteTodo(item.id)}>
                    <DeleteTodo/>
                    </button>
                    </li>

                )
            })
        }
    </ul>
  )
}
