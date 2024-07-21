
interface filterFcProps{
    filterAct: (filter:string)=>void
}

const PanelFilter : React.FC <filterFcProps> = ({filterAct }) => {
  return (
    <div className=" w-4/6 mt-2 rounded-md bg-slate-50 mx-auto  shadow-md p-4 flex justify-around items-center font-semibold text-gray-400">
        <button onClick = {()=>filterAct('all') }>All</button>
        <button onClick = {()=>filterAct('active') }>Active</button>
        <button onClick = {()=>filterAct('completed') }>Complete</button>

    </div>
  )
}

export default PanelFilter