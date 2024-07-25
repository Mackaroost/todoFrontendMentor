import Header from "./Components/Header"
import { TodoList } from "./Components/TodoList"
import Form from "./Components/Form"
import { useState } from "react"
import { mockTasks } from "./Components/mocks/mockList"
import TodoResumen from "./Components/TodoResumen"
import PanelFilter from "./Components/PanelFilter"



function App() {

  const[todos, setTodos]= useState(mockTasks)
  const [filterTodo, setFilterTodo]= useState('all')
  
  const createTodo = (title:string): void =>{
 const newTodo = {
  id:Date.now(),
  title,
  completed:false
 }
 setTodos([...todos, newTodo ])
  }

const filterFc = todos.filter((item)=>{
  if(filterTodo === 'all'){
    return item
  }else if(filterTodo === 'active'){
    return !item.completed
  }else if(filterTodo === 'completed'){
    return item.completed
  }
})

const filterAct = (filterTodo:string) => setFilterTodo(filterTodo)


  const deleteTodo = (id:number): void =>{
  setTodos(todos.filter(item=> item.id !== id))
  }
const updateTodo = (id:number):void=>{
setTodos(todos.map((item)=> item.id === id ? {...item,completed: !item.completed}: item))
}
  const clearTodo = ():void =>{
   setTodos(todos.filter(item=> !item.completed))
  }


  const incompleteTodo = todos.filter(todo => !todo.completed).length;  
  return (
    <div className="min-h-screen dark:bg-slate-900 bg-slate-200 ">
  <div className=" min-h-72 px-5  bg-[url('/todo-app-main/images/bg-mobile-light.jpg')] bg-cover bg-center dark:bg-[url('/todo-app-main/images/bg-mobile-dark.jpg')]">
  <Header />
  <div className="pt-8">
  <Form createTodo ={createTodo}/>
  </div>
  </div>
  <main className="container mx-auto ">
  <TodoList todos = {filterFc} deleteTodo = {deleteTodo} updateTodo={updateTodo}/>
  <TodoResumen clearTodo = {clearTodo} incompleteTodo = {incompleteTodo}/>
  <PanelFilter filterAct = {filterAct} filterTodo = {filterTodo}/>
  </main>
  </div>
  )
}

export default App
