import MoonIcons from "./MoonIcons"
import { useEffect, useState } from "react"
import SunIcons from "./SunIcons"

const Header  = () => {
  const [darkMode, setDarkMode] = useState(false)
  
  useEffect(() => {
   if(darkMode){
    document.documentElement.classList.add("dark");
   }else{
    document.documentElement.classList.remove("dark");
   }
  }, [darkMode])

  return (
    <header>
    <div className= 'flex justify-between items-center container px-8  pt-14 '>
      <p className="text-slate-50 font-bold tracking-[0.3em] text-3xl">TODO</p>
      <button onClick={()=> setDarkMode(!darkMode)}>
        {
          darkMode ? <SunIcons/> : <MoonIcons/>
        }
        
      </button>
    </div>
  </header>
  )
}

export default Header