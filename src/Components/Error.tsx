
interface msjProp{
    msj: string
}
const Error = ({msj}:msjProp) => {
  return (
    <div className="p-2 my-2 rounded-md flex items-center justify-center bg-fuchsia-400 mx-auto ">
        <p className="text-center text-black">{msj}</p>
    </div>
  )
}

export default Error