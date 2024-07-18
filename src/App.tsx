import Header from "./Components/Header"
import { TodoList } from "./Components/TodoList"
import Form from "./Components/Form"
import { useState } from "react"
import { mockTasks } from "./Components/mocks/mockList"



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
  
  return (
    <>
  <div className=" min-h-72 px-5  bg-[url('/todo-app-main/images/bg-mobile-light.jpg')] bg-cover bg-center">
  <Header />
  <div className="pt-14">
  <Form createTodo ={createTodo}/>
  </div>
  </div>

  <TodoList todos = {todos} deleteTodo = {deleteTodo}/>
 

  </>
  )
}

export default App
