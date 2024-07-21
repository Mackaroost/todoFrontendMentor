
interface filterFcProps{
    filterAct: (filter:string)=>void,
    filterTodo: string
}

const PanelFilter : React.FC <filterFcProps> = ({filterAct, filterTodo }) => {
  return (
    <div className=" w-4/6 mt-2 rounded-md bg-slate-50 mx-auto  shadow-md p-4 flex justify-around items-center font-semibold">
        <button 
            className={`${filterTodo === 'all' ? 
            'text-blue-500 hover:text-gray-400': 
            'text-gray-400 hover:text-blue-500' }`}
             onClick = {()=>filterAct('all') }>
                All
             </button>
        <button 
        className={`${filterTodo === 'active' ? 
            'text-blue-500 hover:text-gray-400': 
            'text-gray-400 hover:text-blue-500' }`}onClick = {()=>filterAct('active') }>
                Active
        </button>
        <button 
        className={`${filterTodo === 'completed' ? 
            'text-blue-500 hover:text-gray-400': 
            'text-gray-400 hover:text-blue-500' }`}
        onClick = {()=>filterAct('completed') }>
            Complete
        </button>

    </div>
  )
}

export default PanelFilter