import DeleteTodo from "./DeleteTodo";
import { TodosType} from "./types/todos";
  
  interface TodoListProps {
    todos: TodosType[],
    deleteTodo: (id:number)=> void
  }
 
export const TodoList : React.FC<TodoListProps> = ({todos, deleteTodo}) => {
   
  return (
    <main className="container mx-auto  bg-transparent">
    <ul className="mt-[-3rem] w-4/6  rounded-md bg-slate-50 mx-auto flex-col items-center shadow-md ">
        {
            todos.map((item)=>{
                return(
                    <li key={item.id}
                    className="p-4 flex items-center gap-x-2 w-full border-b-2 border-b-gray-300 font-semibold text-gray-500 "
                    > 
                    <span 
                    className="bg-slate-100 rounded-full border-2  inline-block w-[18px] h-[18px]">
                    </span>
                    {item.title}
                    <button className= "ml-auto text-gray-400"
                    onClick={()=> console.log('iste click a '+ item.id)}>
                    <DeleteTodo/>
                    </button>
                    </li>

                )
            })
        }
            <div className="p-4 flex justify-between items-center font-semibold text-gray-400">
        <span>{`${todos.length} item left`}</span>
        <button>Clear Completed</button>
        </div>
    </ul>
 
    </main>
  )
}
