import { TodosType} from "./types/todos";
  
  interface TodoListProps {
    todos: TodosType[];
  }

export const TodoList : React.FC<TodoListProps> = ({todos}) => {
   
  return (
    <article className="container mx-auto  bg-transparent">
    <ul className="mt-[-3rem] w-4/6 p-4 rounded-md bg-slate-50 mx-auto flex-col items-center ">
        {
            todos.map((item)=>{
                return(
                    <li key={item.id}
                    className="bg-slate-400 p-4 my-2 flex"
                    > 
                    <span 
                    className="bg-slate-100 rounded-full border-2 h-4 w-4 inline-block">
                    </span>
                    {item.title}
                    <div className= "flex flex-end bg-red-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
                    </div>
                    </li>
                )
            })
        }

    </ul>
    </article>
  )
}
