interface clearCompleteProps{
clearTodo : ()=>void,
incompleteTodo: number
}

const TodoResumen = ({clearTodo, incompleteTodo}:clearCompleteProps) => {
  return (
    <div className=" w-4/6  rounded-md bg-slate-50 mx-auto  shadow-md p-4 flex justify-between items-center font-semibold text-gray-400">
    <span>{incompleteTodo} to left Todo</span>
    <button onClick={clearTodo}>
        Clear Completed
    </button>
    </div>
  )
}

export default TodoResumen