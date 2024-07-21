import Header from "./Components/Header"
import { TodoList } from "./Components/TodoList"
import Form from "./Components/Form"
import { useState } from "react"
import { mockTasks } from "./Components/mocks/mockList"
import TodoResumen from "./Components/TodoResumen"



function App() {

  const[todos, setTodos]= useState(mockTasks)

  const createTodo = (title:string): void =>{
 const newTodo = {
  id:Date.now(),
  title,
  completed:false
 }
 setTodos([...todos, newTodo ])
  }

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
    <>
  <div className=" min-h-72 px-5  bg-[url('/todo-app-main/images/bg-mobile-light.jpg')] bg-cover bg-center">
  <Header />
  <div className="pt-14">
  <Form createTodo ={createTodo}/>
  </div>
  </div>
  <main className="container mx-auto  bg-transparent">
  <TodoList todos = {todos} deleteTodo = {deleteTodo} updateTodo={updateTodo}/>
  <TodoResumen clearTodo = {clearTodo} incompleteTodo = {incompleteTodo}/>
  </main>
  </>
  )
}

export default App
